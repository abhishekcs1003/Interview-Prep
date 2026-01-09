import { Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Cpu, 
  Network, 
  Layers,
  ArrowRight,
  FileCode,
  BookOpen
} from 'lucide-react';

const technicalModules = [
  {
    icon: Code2,
    title: 'Data Structures & Algorithms',
    slug: 'dsa',
    description: 'Master arrays, linked lists, trees, graphs, sorting, searching, and more.',
    topics: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Sorting', 'Searching', 'Dynamic Programming'],
    questionCount: 120,
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Layers,
    title: 'Object-Oriented Programming',
    slug: 'oops',
    description: 'Learn OOP concepts like classes, inheritance, polymorphism, and design patterns.',
    topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Design Patterns'],
    questionCount: 60,
    color: 'text-accent bg-accent/10',
  },
  {
    icon: Database,
    title: 'Database Management Systems',
    slug: 'dbms',
    description: 'Understand RDBMS, SQL queries, normalization, transactions, and indexing.',
    topics: ['SQL Queries', 'Normalization', 'Transactions', 'Indexing', 'ER Diagrams', 'Joins', 'ACID Properties'],
    questionCount: 50,
    color: 'text-warning bg-warning/10',
  },
  {
    icon: Cpu,
    title: 'Operating Systems',
    slug: 'os',
    description: 'Learn process management, memory management, file systems, and synchronization.',
    topics: ['Process Management', 'Memory Management', 'File Systems', 'Deadlocks', 'CPU Scheduling', 'Virtual Memory'],
    questionCount: 55,
    color: 'text-destructive bg-destructive/10',
  },
  {
    icon: Network,
    title: 'Computer Networks',
    slug: 'cn',
    description: 'Understand OSI model, TCP/IP, protocols, routing, and network security.',
    topics: ['OSI Model', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'Routing', 'Network Security', 'Subnetting'],
    questionCount: 45,
    color: 'text-info bg-info/10',
  },
  {
    icon: FileCode,
    title: 'Programming Languages',
    slug: 'programming',
    description: 'Language-specific concepts for Java, C++, JavaScript, and Python.',
    topics: ['Java', 'C++', 'JavaScript', 'Python', 'Language Features', 'Memory Management'],
    questionCount: 80,
    color: 'text-success bg-success/10',
  },
];

export default function Technical() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Technical Interview Preparation</h1>
              <p className="text-muted-foreground">
                Deep dive into core CS concepts asked in technical rounds
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>6 Core Subjects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 className="h-4 w-4" />
              <span>400+ Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalModules.map((module) => (
            <Card key={module.slug} className="group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${module.color}`}>
                  <module.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {module.topics.slice(0, 4).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {module.topics.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{module.topics.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {module.questionCount} questions
                  </span>
                  <Button size="sm" variant="ghost" className="group-hover:text-primary">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="container pb-12">
        <Card>
          <CardHeader>
            <CardTitle>Tips for Technical Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                'Understand concepts deeply, not just memorize',
                'Practice writing code on paper/whiteboard',
                'Explain your thought process while solving',
                'Start with brute force, then optimize',
                'Ask clarifying questions before coding',
                'Test your code with edge cases',
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
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
