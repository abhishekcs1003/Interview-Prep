import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Users, 
  MessageSquare, 
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  ChevronRight
} from 'lucide-react';

const hrQuestions = [
  {
    id: '1',
    question: 'Tell me about yourself',
    category: 'Introduction',
    sampleAnswer: 'I am a final year Computer Science student at XYZ University with a strong foundation in programming and problem-solving. I have hands-on experience with Java, Python, and web development through various academic projects. I am passionate about creating efficient solutions and continuously learning new technologies. Outside of academics, I enjoy participating in coding competitions and have won several hackathons.',
    tips: [
      'Keep it professional and relevant to the job',
      'Follow the Present-Past-Future formula',
      'Limit your answer to 2-3 minutes',
      'Highlight key achievements and skills',
    ],
  },
  {
    id: '2',
    question: 'Why do you want to work for our company?',
    category: 'Company Fit',
    sampleAnswer: 'I have been following your company\'s innovative work in [specific area] and am impressed by your commitment to [value/mission]. The opportunity to work with cutting-edge technologies and contribute to impactful projects excites me. Additionally, your company\'s focus on employee growth and learning aligns perfectly with my career goals.',
    tips: [
      'Research the company thoroughly beforehand',
      'Mention specific products, projects, or values',
      'Connect your skills to their needs',
      'Show genuine enthusiasm',
    ],
  },
  {
    id: '3',
    question: 'What are your strengths and weaknesses?',
    category: 'Self-Assessment',
    sampleAnswer: 'My key strengths include strong analytical skills, adaptability, and attention to detail. I enjoy breaking down complex problems into manageable parts. As for weaknesses, I sometimes tend to be overly detail-oriented, which can slow me down. However, I\'ve been working on this by setting time limits for tasks and prioritizing key deliverables.',
    tips: [
      'Be honest but strategic',
      'Choose weaknesses that aren\'t critical to the role',
      'Always mention how you\'re improving your weaknesses',
      'Back strengths with examples',
    ],
  },
  {
    id: '4',
    question: 'Where do you see yourself in 5 years?',
    category: 'Career Goals',
    sampleAnswer: 'In 5 years, I see myself as a skilled software engineer who has mastered the technologies relevant to your company and contributed to significant projects. I aim to take on more responsibilities, possibly leading a small team, while continuing to grow technically. I believe your company provides the perfect environment for this growth.',
    tips: [
      'Show ambition but be realistic',
      'Align your goals with the company\'s growth',
      'Focus on skills and responsibilities, not titles',
      'Express commitment to learning',
    ],
  },
  {
    id: '5',
    question: 'Tell me about a time you faced a challenge and how you overcame it',
    category: 'Behavioral',
    sampleAnswer: 'During my final year project, we faced a critical issue with our database performance just a week before the deadline. I took the initiative to research optimization techniques, implemented indexing, and refactored inefficient queries. I also coordinated with my team to redistribute tasks. We successfully delivered the project on time with improved performance.',
    tips: [
      'Use the STAR method (Situation, Task, Action, Result)',
      'Choose a relevant and impactful example',
      'Focus on your specific contributions',
      'Highlight the positive outcome',
    ],
  },
  {
    id: '6',
    question: 'Why should we hire you?',
    category: 'Value Proposition',
    sampleAnswer: 'You should hire me because I bring a combination of strong technical skills, a quick learning ability, and genuine enthusiasm for this role. My experience in [relevant skills/projects] has prepared me well for the challenges of this position. I am a team player who is committed to delivering quality work and contributing to the company\'s success.',
    tips: [
      'Summarize your key qualifications',
      'Address their specific needs',
      'Be confident but not arrogant',
      'End with enthusiasm for the role',
    ],
  },
  {
    id: '7',
    question: 'Do you have any questions for us?',
    category: 'Closing',
    sampleAnswer: 'Yes, I do! I\'d like to know more about the team structure I\'d be working with. Also, what does a typical career progression look like for someone in this role? Finally, what are the main challenges the team is currently working on?',
    tips: [
      'Always have 2-3 questions prepared',
      'Ask about team, culture, or growth opportunities',
      'Avoid asking about salary in the first round',
      'Show genuine interest in the role',
    ],
  },
];

const categories = [...new Set(hrQuestions.map(q => q.category))];

export default function HRInterview() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredQuestions = selectedCategory
    ? hrQuestions.filter(q => q.category === selectedCategory)
    : hrQuestions;

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-warning/5 to-background border-b">
        <div className="container py-12 lg:py-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">HR Interview Preparation</h1>
              <p className="text-muted-foreground">
                Master behavioral questions and make a great impression
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === null ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(null)}
                >
                  All Questions
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'secondary' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tips Card */}
            <Card className="bg-warning/5 border-warning/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-warning" />
                  Quick Tips for HR Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 md:grid-cols-2">
                  {[
                    'Research the company thoroughly',
                    'Practice common questions aloud',
                    'Use the STAR method for behavioral questions',
                    'Be honest and authentic',
                    'Maintain positive body language',
                    'Ask thoughtful questions at the end',
                  ].map((tip, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="h-4 w-4 text-warning flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Questions */}
            <Accordion type="single" collapsible className="space-y-4">
              {filteredQuestions.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.question}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4 text-success" />
                        Sample Answer
                      </h4>
                      <p className="text-muted-foreground bg-muted/50 p-4 rounded-lg text-sm">
                        {item.sampleAnswer}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-warning" />
                        Tips
                      </h4>
                      <ul className="space-y-1">
                        {item.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
