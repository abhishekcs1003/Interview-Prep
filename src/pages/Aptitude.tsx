import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Brain, 
  BookOpen, 
  ArrowRight,
  BarChart3,
  Clock,
  Percent,
  Users,
  Scale,
  Lightbulb
} from 'lucide-react';

const aptitudeTopics = [
  {
    category: 'Quantitative Aptitude',
    icon: Calculator,
    description: 'Master numerical and mathematical problems',
    topics: [
      { name: 'Percentages', questions: 25, difficulty: 'easy' },
      { name: 'Profit & Loss', questions: 20, difficulty: 'medium' },
      { name: 'Time & Work', questions: 30, difficulty: 'medium' },
      { name: 'Time, Speed & Distance', questions: 28, difficulty: 'medium' },
      { name: 'Averages', questions: 15, difficulty: 'easy' },
      { name: 'Ratio & Proportion', questions: 22, difficulty: 'easy' },
      { name: 'Simple & Compound Interest', questions: 18, difficulty: 'medium' },
      { name: 'Number Series', questions: 35, difficulty: 'hard' },
      { name: 'Probability', questions: 20, difficulty: 'hard' },
      { name: 'Permutations & Combinations', questions: 25, difficulty: 'hard' },
    ],
  },
  {
    category: 'Logical Reasoning',
    icon: Brain,
    description: 'Develop analytical and logical thinking skills',
    topics: [
      { name: 'Blood Relations', questions: 20, difficulty: 'easy' },
      { name: 'Coding-Decoding', questions: 25, difficulty: 'medium' },
      { name: 'Syllogisms', questions: 30, difficulty: 'medium' },
      { name: 'Seating Arrangement', questions: 35, difficulty: 'hard' },
      { name: 'Puzzles', questions: 40, difficulty: 'hard' },
      { name: 'Direction Sense', questions: 18, difficulty: 'easy' },
      { name: 'Logical Sequence', questions: 22, difficulty: 'medium' },
      { name: 'Data Sufficiency', questions: 25, difficulty: 'hard' },
    ],
  },
  {
    category: 'Verbal Ability',
    icon: BookOpen,
    description: 'Enhance English language and comprehension skills',
    topics: [
      { name: 'Reading Comprehension', questions: 30, difficulty: 'medium' },
      { name: 'Sentence Correction', questions: 25, difficulty: 'easy' },
      { name: 'Para Jumbles', questions: 20, difficulty: 'medium' },
      { name: 'Vocabulary', questions: 35, difficulty: 'easy' },
      { name: 'Fill in the Blanks', questions: 25, difficulty: 'medium' },
      { name: 'Synonyms & Antonyms', questions: 30, difficulty: 'easy' },
      { name: 'Error Spotting', questions: 28, difficulty: 'medium' },
      { name: 'Cloze Test', questions: 20, difficulty: 'hard' },
    ],
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

export default function Aptitude() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-info/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-info/10 text-info">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Aptitude Preparation</h1>
              <p className="text-muted-foreground">
                Master quantitative, logical, and verbal skills for placements
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              <span>500+ Questions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>All difficulty levels</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lightbulb className="h-4 w-4" />
              <span>Detailed explanations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="container py-12">
        <div className="space-y-12">
          {aptitudeTopics.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{category.category}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.topics.map((topic) => (
                  <Card key={topic.name} className="group hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base">{topic.name}</CardTitle>
                        <Badge variant="outline" className={getDifficultyColor(topic.difficulty)}>
                          {topic.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {topic.questions} questions
                        </span>
                        <Button size="sm" variant="ghost" className="group-hover:text-primary">
                          Practice
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-12">
        <Card className="bg-info/5 border-info/20">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
            <div>
              <h3 className="font-semibold text-lg">Ready to test your aptitude skills?</h3>
              <p className="text-muted-foreground">Take a comprehensive mock test covering all topics</p>
            </div>
            <Button asChild>
              <Link to="/mock-tests">
                Take Aptitude Mock Test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
}
