import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">InterviewPrep</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for cracking campus placements and job interviews with confidence.
            </p>
          </div>

          {/* Preparation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Preparation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/aptitude" className="hover:text-primary transition-colors">Aptitude</Link></li>
              <li><Link to="/technical" className="hover:text-primary transition-colors">Technical</Link></li>
              <li><Link to="/coding" className="hover:text-primary transition-colors">Coding Practice</Link></li>
              <li><Link to="/hr-interview" className="hover:text-primary transition-colors">HR Interview</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/mock-tests" className="hover:text-primary transition-colors">Mock Tests</Link></li>
              <li><Link to="/companies" className="hover:text-primary transition-colors">Company Prep</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resume Tips</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Communication</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Account</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/auth" className="hover:text-primary transition-colors">Sign In</Link></li>
              <li><Link to="/auth?mode=signup" className="hover:text-primary transition-colors">Create Account</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} InterviewPrep. Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
