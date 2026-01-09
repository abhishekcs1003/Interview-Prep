import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ClipboardCheck, 
  Clock, 
  BarChart3,
  Brain,
  Code,
  Users,
  Building2,
  ArrowRight,
  Play
} from 'lucide-react';

const mockTests = [
  {
    id: '1',
    title: 'Aptitude Full Test',
    description: 'Comprehensive test covering all aptitude topics',
    duration: 60,
    questions: 50,
    category: 'Aptitude',
    icon: Brain,
    color: 'text-info bg-info/10',
    difficulty: 'mixed',
  },
  {
    id: '2',
    title: 'Quantitative Aptitude',
    description: 'Focus on numerical and mathematical problems',
    duration: 30,
    questions: 25,
    category: 'Aptitude',
    icon: Brain,
    color: 'text-info bg-info/10',
    difficulty: 'medium',
  },
  {
    id: '3',
    title: 'Logical Reasoning',
    description: 'Test your analytical and logical thinking',
    duration: 30,
    questions: 25,
    category: 'Aptitude',
    icon: Brain,
    color: 'text-info bg-info/10',
    difficulty: 'medium',
  },
  {
    id: '4',
    title: 'DSA Fundamentals',
    description: 'Data structures and algorithms basics',
    duration: 45,
    questions: 30,
    category: 'Technical',
    icon: Code,
    color: 'text-primary bg-primary/10',
    difficulty: 'medium',
  },
  {
    id: '5',
    title: 'DBMS & SQL',
    description: 'Database concepts and SQL queries',
    duration: 30,
    questions: 25,
    category: 'Technical',
    icon: Code,
    color: 'text-primary bg-primary/10',
    difficulty: 'medium',
  },
  {
    id: '6',
    title: 'TCS NQT Pattern',
    description: 'Mock test based on TCS NQT pattern',
    duration: 90,
    questions: 75,
    category: 'Company',
    icon: Building2,
    color: 'text-destructive bg-destructive/10',
    difficulty: 'mixed',
  },
  {
    id: '7',
    title: 'Infosys InfyTQ Pattern',
    description: 'Mock test based on Infosys hiring pattern',
    duration: 90,
    questions: 60,
    category: 'Company',
    icon: Building2,
    color: 'text-destructive bg-destructive/10',
    difficulty: 'mixed',
  },
  {
    id: '8',
    title: 'HR Interview Simulation',
    description: 'Practice behavioral interview questions',
    duration: 30,
    questions: 15,
    category: 'HR',
    icon: Users,
    color: 'text-warning bg-warning/10',
    difficulty: 'easy',
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-easy/10 text-easy border-easy/20';
    case 'medium':
      return 'bg-medium/10 text-medium border-medium/20';
    case 'hard':
      return 'bg-hard/10 text-hard border-hard/20';
    case 'mixed':
      return 'bg-primary/10 text-primary border-primary/20';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export default function MockTests() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Mock Tests</h1>
              <p className="text-muted-foreground">
                Simulate real interview tests and track your performance
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ClipboardCheck className="h-4 w-4" />
              <span>{mockTests.length} Tests Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Timed Tests</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              <span>Performance Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => (
            <Card key={test.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${test.color}`}>
                    <test.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                    {test.difficulty}
                  </Badge>
                </div>
                <CardTitle className="mt-4">{test.title}</CardTitle>
                <CardDescription>{test.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{test.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClipboardCheck className="h-4 w-4" />
                    <span>{test.questions} questions</span>
                  </div>
                </div>
                <Button className="w-full group-hover:bg-primary" asChild>
                  <Link to={`/mock-tests/${test.id}`}>
                    <Play className="mr-2 h-4 w-4" />
                    Start Test
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container pb-12">
        <Card>
          <CardHeader>
            <CardTitle>How Mock Tests Work</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: 1, title: 'Choose a Test', description: 'Select from aptitude, technical, or company-specific tests' },
                { step: 2, title: 'Start Timer', description: 'Tests are timed to simulate real exam conditions' },
                { step: 3, title: 'Submit Answers', description: 'Complete all questions within the time limit' },
                { step: 4, title: 'View Results', description: 'Get detailed analytics and explanations' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
}
