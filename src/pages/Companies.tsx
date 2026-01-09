import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  ArrowRight,
  Users,
  Clock,
  Briefcase,
  IndianRupee
} from 'lucide-react';

const companies = [
  {
    id: '1',
    name: 'TCS',
    fullName: 'Tata Consultancy Services',
    description: 'India\'s largest IT services company with global presence.',
    rounds: ['Online Test (NQT)', 'Technical Interview', 'HR Interview'],
    avgPackage: '3.5 - 7 LPA',
    difficulty: 'medium',
    questionsCount: 150,
  },
  {
    id: '2',
    name: 'Infosys',
    fullName: 'Infosys Limited',
    description: 'Global leader in next-generation digital services and consulting.',
    rounds: ['InfyTQ Online Test', 'Technical Interview', 'HR Interview'],
    avgPackage: '3.6 - 8 LPA',
    difficulty: 'medium',
    questionsCount: 120,
  },
  {
    id: '3',
    name: 'Wipro',
    fullName: 'Wipro Limited',
    description: 'Leading global IT, consulting and business process services company.',
    rounds: ['Online Assessment', 'Technical Round', 'HR Round'],
    avgPackage: '3.5 - 6 LPA',
    difficulty: 'easy',
    questionsCount: 100,
  },
  {
    id: '4',
    name: 'Accenture',
    fullName: 'Accenture',
    description: 'Global professional services company with consulting and technology services.',
    rounds: ['Cognitive Assessment', 'Technical Interview', 'HR Interview'],
    avgPackage: '4.5 - 8 LPA',
    difficulty: 'medium',
    questionsCount: 130,
  },
  {
    id: '5',
    name: 'Tech Mahindra',
    fullName: 'Tech Mahindra',
    description: 'IT services and consulting company specializing in digital transformation.',
    rounds: ['Online Test', 'Technical Interview', 'HR Round'],
    avgPackage: '3.25 - 6 LPA',
    difficulty: 'easy',
    questionsCount: 90,
  },
  {
    id: '6',
    name: 'Zensar',
    fullName: 'Zensar Technologies',
    description: 'Digital solutions and technology services company.',
    rounds: ['Online Assessment', 'Technical Round', 'HR Interview'],
    avgPackage: '3.5 - 5 LPA',
    difficulty: 'easy',
    questionsCount: 75,
  },
  {
    id: '7',
    name: 'Cognizant',
    fullName: 'Cognizant Technology Solutions',
    description: 'IT services, consulting and business process outsourcing company.',
    rounds: ['GenC Online Test', 'Technical Interview', 'HR Round'],
    avgPackage: '4 - 7 LPA',
    difficulty: 'medium',
    questionsCount: 110,
  },
  {
    id: '8',
    name: 'Capgemini',
    fullName: 'Capgemini',
    description: 'Global leader in consulting, technology services and digital transformation.',
    rounds: ['Game-Based Assessment', 'Technical Round', 'HR Interview'],
    avgPackage: '3.8 - 7 LPA',
    difficulty: 'medium',
    questionsCount: 95,
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
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export default function Companies() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-destructive/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Company-Wise Preparation</h1>
              <p className="text-muted-foreground">
                Tailored preparation guides for top hiring companies
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{companies.length} Companies</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Interview Patterns</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>Previous Year Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {companies.map((company) => (
            <Card key={company.id} className="group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{company.name}</CardTitle>
                    <CardDescription>{company.fullName}</CardDescription>
                  </div>
                  <Badge variant="outline" className={getDifficultyColor(company.difficulty)}>
                    {company.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {company.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Interview Rounds */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Interview Process
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.rounds.map((round, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {index + 1}. {round}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <IndianRupee className="h-4 w-4" />
                      <span>{company.avgPackage}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{company.questionsCount} questions</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full" variant="outline" asChild>
                    <Link to={`/companies/${company.id}`}>
                      Start Preparation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="container pb-12">
        <Card className="bg-destructive/5 border-destructive/20">
          <CardHeader>
            <CardTitle>Company-Specific Preparation Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                'Research the company\'s recent projects and news',
                'Understand their specific hiring test pattern',
                'Practice previous year questions extensively',
                'Prepare for both technical and HR rounds',
                'Learn about the company culture and values',
                'Prepare questions to ask the interviewer',
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
}
