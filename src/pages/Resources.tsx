import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  MessageSquare, 
  Users,
  CheckCircle,
  XCircle,
  Lightbulb
} from 'lucide-react';

const resumeTips = [
  { title: 'Keep it to One Page', description: 'For freshers, a single-page resume is ideal. Recruiters spend only 6-7 seconds on initial screening.' },
  { title: 'Clear Contact Information', description: 'Include your name, phone, email, and LinkedIn profile at the top.' },
  { title: 'Strong Summary Statement', description: 'Write 2-3 lines highlighting your key skills and career objective.' },
  { title: 'Education Section', description: 'List your degree, institution, graduation year, and CGPA/percentage prominently.' },
  { title: 'Relevant Projects', description: 'Include 2-3 projects with technologies used and your specific contributions.' },
  { title: 'Skills Section', description: 'List technical skills (languages, frameworks) and soft skills separately.' },
  { title: 'Action Verbs', description: 'Start bullet points with action verbs like "Developed", "Implemented", "Designed".' },
  { title: 'Quantify Achievements', description: 'Use numbers where possible (e.g., "Improved performance by 30%").' },
];

const gdTips = {
  dos: [
    'Listen actively to other participants',
    'Support your points with facts and examples',
    'Maintain eye contact with the group',
    'Be respectful of differing opinions',
    'Summarize key points when appropriate',
    'Stay calm and composed throughout',
  ],
  donts: [
    'Don\'t interrupt other speakers',
    'Don\'t dominate the discussion',
    'Don\'t get personal or aggressive',
    'Don\'t deviate from the topic',
    'Don\'t sit silently throughout',
    'Don\'t use slang or informal language',
  ],
};

const communicationTips = [
  { 
    title: 'Practice Speaking Clearly', 
    description: 'Record yourself and analyze your speaking pace, clarity, and filler words like "um" and "uh".',
    icon: MessageSquare,
  },
  { 
    title: 'Improve Vocabulary', 
    description: 'Read newspapers and articles daily. Learn 5 new words each day and use them in sentences.',
    icon: FileText,
  },
  { 
    title: 'Body Language Matters', 
    description: 'Maintain good posture, make eye contact, and use appropriate hand gestures while speaking.',
    icon: Users,
  },
  { 
    title: 'Active Listening', 
    description: 'Pay full attention when others speak. It helps you respond more thoughtfully.',
    icon: Lightbulb,
  },
];

export default function Resources() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-success/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Resources & Tips</h1>
              <p className="text-muted-foreground">
                Build your resume, improve communication, and ace group discussions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="container py-8">
        <Tabs defaultValue="resume" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="resume" className="gap-2">
              <FileText className="h-4 w-4" />
              Resume Tips
            </TabsTrigger>
            <TabsTrigger value="gd" className="gap-2">
              <Users className="h-4 w-4" />
              Group Discussion
            </TabsTrigger>
            <TabsTrigger value="communication" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Communication
            </TabsTrigger>
          </TabsList>

          {/* Resume Tips */}
          <TabsContent value="resume" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resume Building Tips</CardTitle>
                <CardDescription>
                  Create a professional resume that gets you shortlisted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {resumeTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success/10 text-success text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-medium">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Resume Structure */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Resume Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { section: 'Header', content: 'Name, Contact Info, LinkedIn, GitHub' },
                    { section: 'Summary', content: 'Brief 2-3 line professional summary' },
                    { section: 'Education', content: 'Degree, Institution, Year, CGPA' },
                    { section: 'Skills', content: 'Technical skills and soft skills' },
                    { section: 'Projects', content: '2-3 relevant projects with tech stack' },
                    { section: 'Experience', content: 'Internships or part-time work (if any)' },
                    { section: 'Achievements', content: 'Certifications, competitions, awards' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <span className="font-medium w-28 text-primary">{item.section}</span>
                      <span className="text-muted-foreground">{item.content}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GD Tips */}
          <TabsContent value="gd" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-success">
                    <CheckCircle className="h-5 w-5" />
                    Do's in Group Discussion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {gdTips.dos.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <XCircle className="h-5 w-5" />
                    Don'ts in Group Discussion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {gdTips.donts.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Common GD Topics</CardTitle>
                <CardDescription>Practice with these frequently asked topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Artificial Intelligence: Boon or Bane?',
                    'Work from Home vs Office',
                    'Social Media: Impact on Society',
                    'Climate Change and Youth',
                    'India\'s Digital Transformation',
                    'Education vs Skill Development',
                    'Entrepreneurship vs Job',
                    'Role of Technology in Education',
                  ].map((topic, index) => (
                    <span key={index} className="px-3 py-1.5 bg-muted rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communication Tips */}
          <TabsContent value="communication" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {communicationTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <tip.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Daily Practice Routine</CardTitle>
                <CardDescription>Follow this routine to improve your communication skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { time: 'Morning', activity: 'Read an article aloud for 10 minutes' },
                    { time: 'Afternoon', activity: 'Practice one HR question with a timer' },
                    { time: 'Evening', activity: 'Record yourself speaking for 5 minutes' },
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg text-center">
                      <h4 className="font-medium text-primary">{item.time}</h4>
                      <p className="text-sm text-muted-foreground mt-2">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </MainLayout>
  );
}
