import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Code, 
  Users, 
  Building2, 
  Target,
  Trophy,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

const quickLinks = [
  { icon: Brain, title: 'Aptitude', href: '/aptitude', color: 'bg-info/10 text-info' },
  { icon: Code, title: 'Technical', href: '/technical', color: 'bg-primary/10 text-primary' },
  { icon: Users, title: 'HR Interview', href: '/hr-interview', color: 'bg-warning/10 text-warning' },
  { icon: Building2, title: 'Companies', href: '/companies', color: 'bg-destructive/10 text-destructive' },
];

export default function Dashboard() {
  const { user, isLoading, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-12 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </MainLayout>
    );
  }

  if (!user) return null;

  return (
    <MainLayout>
      <div className="container py-8 lg:py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome back! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            {user.email} • Continue your preparation journey
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Questions Solved</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Start practicing to track progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mock Tests</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Complete tests to see analytics</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Study Time</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0h</div>
              <p className="text-xs text-muted-foreground">Time spent learning</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
              <Trophy className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">—</div>
              <p className="text-xs text-muted-foreground">Answer more questions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>You haven't started any topics yet.</p>
                  <Button className="mt-4" asChild>
                    <Link to="/aptitude">
                      Start with Aptitude
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Overview</CardTitle>
                <CardDescription>Your preparation status across topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { name: 'Aptitude', progress: 0 },
                  { name: 'Technical', progress: 0 },
                  { name: 'Coding', progress: 0 },
                  { name: 'HR Interview', progress: 0 },
                ].map((topic) => (
                  <div key={topic.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{topic.name}</span>
                      <span className="text-sm text-muted-foreground">{topic.progress}%</span>
                    </div>
                    <Progress value={topic.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.href}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg ${link.color} transition-transform hover:scale-105`}
                  >
                    <link.icon className="h-6 w-6" />
                    <span className="mt-2 text-xs font-medium">{link.title}</span>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Take a Mock Test */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Ready for a Challenge?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Test your knowledge with timed mock tests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/mock-tests">
                    Take Mock Test
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Admin Link */}
            {isAdmin && (
              <Card className="border-warning/50">
                <CardHeader>
                  <CardTitle className="text-warning">Admin Access</CardTitle>
                  <CardDescription>Manage content and users</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/admin">
                      Open Admin Panel
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
