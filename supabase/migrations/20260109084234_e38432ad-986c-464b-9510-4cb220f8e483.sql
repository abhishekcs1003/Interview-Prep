-- Create role enum
create type public.app_role as enum ('admin', 'moderator', 'user');

-- Create user_roles table (separate from profiles for security)
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null default 'user',
  created_at timestamp with time zone not null default now(),
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

-- Create security definer function to check roles (prevents recursive RLS)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- RLS policies for user_roles
create policy "Users can view their own roles"
  on public.user_roles for select
  using (auth.uid() = user_id);

create policy "Admins can view all roles"
  on public.user_roles for select
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can manage roles"
  on public.user_roles for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create profiles table
create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = user_id);

-- Create categories table (for organizing content)
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  icon text,
  parent_id uuid references public.categories(id) on delete set null,
  sort_order integer default 0,
  created_at timestamp with time zone not null default now()
);

alter table public.categories enable row level security;

create policy "Anyone can view categories"
  on public.categories for select
  using (true);

create policy "Admins can manage categories"
  on public.categories for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create difficulty enum
create type public.difficulty_level as enum ('easy', 'medium', 'hard');

-- Create questions table
create table public.questions (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete cascade not null,
  title text not null,
  content text not null,
  options jsonb, -- for MCQ: [{text: "Option A", is_correct: true}, ...]
  explanation text,
  difficulty difficulty_level not null default 'medium',
  tags text[],
  company_tags text[],
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

alter table public.questions enable row level security;

create policy "Anyone can view questions"
  on public.questions for select
  using (true);

create policy "Admins can manage questions"
  on public.questions for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create companies table
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text,
  description text,
  hiring_process text,
  interview_tips text,
  website_url text,
  created_at timestamp with time zone not null default now()
);

alter table public.companies enable row level security;

create policy "Anyone can view companies"
  on public.companies for select
  using (true);

create policy "Admins can manage companies"
  on public.companies for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create user_progress table
create table public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  question_id uuid references public.questions(id) on delete cascade not null,
  is_completed boolean default false,
  is_bookmarked boolean default false,
  last_attempted_at timestamp with time zone,
  attempts integer default 0,
  created_at timestamp with time zone not null default now(),
  unique (user_id, question_id)
);

alter table public.user_progress enable row level security;

create policy "Users can view their own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can manage their own progress"
  on public.user_progress for all
  using (auth.uid() = user_id);

-- Create mock_tests table
create table public.mock_tests (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  duration_minutes integer not null default 30,
  category_id uuid references public.categories(id) on delete set null,
  question_ids uuid[] not null,
  is_active boolean default true,
  created_at timestamp with time zone not null default now()
);

alter table public.mock_tests enable row level security;

create policy "Anyone can view active mock tests"
  on public.mock_tests for select
  using (is_active = true);

create policy "Admins can manage mock tests"
  on public.mock_tests for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create test_attempts table
create table public.test_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  mock_test_id uuid references public.mock_tests(id) on delete cascade not null,
  answers jsonb not null default '{}',
  score integer,
  time_taken_seconds integer,
  started_at timestamp with time zone not null default now(),
  completed_at timestamp with time zone
);

alter table public.test_attempts enable row level security;

create policy "Users can view their own attempts"
  on public.test_attempts for select
  using (auth.uid() = user_id);

create policy "Users can manage their own attempts"
  on public.test_attempts for all
  using (auth.uid() = user_id);

-- Create resources table (for tips, articles, etc.)
create table public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  category_id uuid references public.categories(id) on delete set null,
  resource_type text not null, -- 'article', 'tip', 'guide'
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

alter table public.resources enable row level security;

create policy "Anyone can view resources"
  on public.resources for select
  using (true);

create policy "Admins can manage resources"
  on public.resources for all
  using (public.has_role(auth.uid(), 'admin'));

-- Create trigger function for updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Add triggers for updated_at
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger update_questions_updated_at
  before update on public.questions
  for each row execute function public.update_updated_at_column();

create trigger update_resources_updated_at
  before update on public.resources
  for each row execute function public.update_updated_at_column();

-- Create function to handle new user signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (user_id, full_name)
  values (new.id, new.raw_user_meta_data ->> 'full_name');
  
  insert into public.user_roles (user_id, role)
  values (new.id, 'user');
  
  return new;
end;
$$;

-- Trigger for new user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();