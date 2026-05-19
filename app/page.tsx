import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Code, Globe, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="flex flex-col items-start gap-6 md:gap-8 max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
          <span>Student-Led Initiative</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
          Exploring the future of AI in <span className="text-accent">Charlotte</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          The Charlotte AI and Vanguard Organization (CAIVO) is a student-led initiative exploring the world of AI through debate, discussion, and virtual learning. Founded in 2025 by Evan Wright and Prateep Kumar Mandal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Button asChild size="lg" className="h-12 px-8 text-base bg-accent text-white hover:bg-accent/90">
            <Link href="/about">
              Meet the Officers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
            <Link href="/contact">
              Join Us
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
            <Bot className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">AI Lessons & Workshops</h3>
          <p className="text-foreground/70">
            We host interactive AI lessons and coding workshops focused on real-world applications across STEM and finance.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Responsible AI Ethics</h3>
          <p className="text-foreground/70">
            We believe in using AI responsibly. We debate and discuss AI ethics, shaping the next generation of critical thinkers.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Virtual Learning</h3>
          <p className="text-foreground/70">
            Participate in virtual events and discussions from anywhere. Open to all students interested in innovation.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-border">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
            <Code className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Student Innovators</h3>
          <p className="text-foreground/70">
            A vibrant community of students building projects, publishing research, and showcasing their work.
          </p>
        </div>
      </div>
    </div>
  );
}
