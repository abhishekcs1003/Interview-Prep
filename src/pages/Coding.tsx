import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Search, 
  Filter,
  CheckCircle,
  Circle,
  ArrowRight
} from 'lucide-react';

// Sample coding problems
const codingProblems = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['Array', 'Hash Table'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    solved: false,
  },
  {
    id: '2',
    title: 'Reverse Linked List',
    difficulty: 'easy',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Facebook'],
    solved: false,
  },
  {
    id: '3',
    title: 'Valid Parentheses',
    difficulty: 'easy',
    tags: ['Stack', 'String'],
    companies: ['Amazon', 'Google', 'Bloomberg'],
    solved: false,
  },
  {
    id: '4',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    tags: ['Hash Table', 'Sliding Window', 'String'],
    companies: ['Amazon', 'Microsoft', 'Adobe'],
    solved: false,
  },
  {
    id: '5',
    title: 'Binary Tree Level Order Traversal',
    difficulty: 'medium',
    tags: ['Tree', 'BFS'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    solved: false,
  },
  {
    id: '6',
    title: 'Merge Intervals',
    difficulty: 'medium',
    tags: ['Array', 'Sorting'],
    companies: ['Google', 'Facebook', 'Microsoft'],
    solved: false,
  },
  {
    id: '7',
    title: 'Trapping Rain Water',
    difficulty: 'hard',
    tags: ['Array', 'Two Pointers', 'Dynamic Programming'],
    companies: ['Amazon', 'Google', 'Apple'],
    solved: false,
  },
  {
    id: '8',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'hard',
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    solved: false,
  },
  {
    id: '9',
    title: 'N-Queens',
    difficulty: 'hard',
    tags: ['Backtracking'],
    companies: ['Amazon', 'Microsoft'],
    solved: false,
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

export default function Coding() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredProblems = codingProblems.filter((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Coding Practice</h1>
              <p className="text-muted-foreground">
                Solve problems to sharpen your coding skills
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-easy">{codingProblems.filter(p => p.difficulty === 'easy').length}</div>
              <div className="text-sm text-muted-foreground">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-medium">{codingProblems.filter(p => p.difficulty === 'medium').length}</div>
              <div className="text-sm text-muted-foreground">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-hard">{codingProblems.filter(p => p.difficulty === 'hard').length}</div>
              <div className="text-sm text-muted-foreground">Hard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="container py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search problems or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Tabs value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="easy">Easy</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="hard">Hard</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Problems Table */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {filteredProblems.map((problem) => (
                <div
                  key={problem.id}
                  className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    {problem.solved ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium">{problem.title}</span>
                      <Badge variant="outline" className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                    {problem.companies.slice(0, 2).map((company) => (
                      <span key={company}>{company}</span>
                    ))}
                    {problem.companies.length > 2 && (
                      <span>+{problem.companies.length - 2}</span>
                    )}
                  </div>
                  <Button size="sm" variant="ghost">
                    Solve
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No problems found matching your criteria.
          </div>
        )}
      </section>
    </MainLayout>
  );
}
