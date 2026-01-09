-- Fix update_updated_at_column function with proper search_path
create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;