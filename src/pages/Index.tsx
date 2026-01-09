import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Brain, 
  Code, 
  Users, 
  Building2, 
  FileText, 
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Trophy,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Aptitude Preparation',
    description: 'Master Quantitative Aptitude, Logical Reasoning, and Verbal Ability with practice questions.',
    href: '/aptitude',
    color: 'text-info',
  },
  {
    icon: Code,
    title: 'Technical Interview',
    description: 'Deep dive into DSA, OOPS, DBMS, OS, Computer Networks, and Programming Languages.',
    href: '/technical',
    color: 'text-primary',
  },
  {
    icon: ClipboardCheck,
    title: 'Coding Practice',
    description: 'Solve coding problems with difficulty tags, sample inputs/outputs, and detailed solutions.',
    href: '/coding',
    color: 'text-accent',
  },
  {
    icon: Users,
    title: 'HR Interview',
    description: 'Prepare for behavioral questions with sample answers and expert tips.',
    href: '/hr-interview',
    color: 'text-warning',
  },
  {
    icon: Building2,
    title: 'Company Preparation',
    description: 'Get company-specific preparation for TCS, Infosys, Wipro, Accenture, and more.',
    href: '/companies',
    color: 'text-destructive',
  },
  {
    icon: FileText,
    title: 'Resume & Tips',
    description: 'Build a winning resume and improve your communication skills for GDs and interviews.',
    href: '/resources',
    color: 'text-success',
  },
];

const stats = [
  { value: '500+', label: 'Practice Questions' },
  { value: '50+', label: 'Mock Tests' },
  { value: '10+', label: 'Companies Covered' },
  { value: '100%', label: 'Free Access' },
];

export default function Index() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <GraduationCap className="h-4 w-4" />
              Your Interview Success Partner
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Crack Your Interview with{' '}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The complete preparation platform for campus placements and job interviews. 
              Master aptitude, technical concepts, coding, and soft skills — all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/aptitude">
                  Start Preparation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/mock-tests">Take Mock Test</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive preparation modules designed specifically for college students and freshers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={feature.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card border-y">
        <div className="container py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose InterviewPrep?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We understand what it takes to crack campus placements. Our platform is built by those who've been through the process.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Curated content for campus placements',
                  'Practice questions with detailed explanations',
                  'Timed mock tests with performance analytics',
                  'Company-specific preparation guides',
                  'Track your progress and identify weak areas',
                  'Completely free to access',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Trophy className="h-10 w-10 text-warning mx-auto" />
                <h3 className="mt-4 font-semibold">Track Progress</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monitor your improvement over time
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="h-10 w-10 text-destructive mx-auto" />
                <h3 className="mt-4 font-semibold">Focused Learning</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Identify and improve weak areas
                </p>
              </Card>
              <Card className="p-6 text-center col-span-2">
                <Building2 className="h-10 w-10 text-primary mx-auto" />
                <h3 className="mt-4 font-semibold">Company Ready</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prepare for specific companies with tailored content
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="bg-primary text-primary-foreground p-8 lg:p-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Start Your Preparation Journey?
          </h2>
          <p className="mt-4 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of students who are preparing for their dream placements. 
            Create your free account and start practicing today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/auth?mode=signup">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/aptitude">Browse Content</Link>
            </Button>
          </div>
        </Card>
      </section>
    </MainLayout>
  );
}
