import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const showcaseItems = [
  {
    title: "AI Trade Bot V2",
    creator: "Prateep Kumar Mandal",
    type: "Project Writeup",
    image: "/showcase-1.jpg",
    link: "#",
  },
  {
    title: "Ethics in Tech Poster",
    creator: "Evan Wright",
    type: "Presentation",
    image: "/showcase-2.jpg",
    link: "#",
  },
  {
    title: "Hackathon Winning App: MedVision",
    creator: "CAIVO Team",
    type: "App Demo",
    image: "/showcase-3.jpg",
    link: "#",
  },
  {
    title: "LLM Fine-Tuning Guide",
    creator: "Member Contributor",
    type: "Tutorial",
    image: "/showcase-4.jpg",
    link: "#",
  }
];

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Member Work Showcase</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          A gallery of the incredible things our members have built, designed, and presented. From posters to full-stack applications, see what CAIVO is creating.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showcaseItems.map((item, index) => (
          <Card key={index} className="overflow-hidden bg-card border-border border group">
            <Link href={item.link} className="block relative aspect-video bg-muted border-b border-border">
              {/* Note: In development, Next.js Image component will throw an error if the image doesn't exist.
                  We'll use a standard img tag with an error fallback or just let it show the broken image icon
                  to fulfill the requirement of referencing non-existent pictures in the public folder. */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted z-0">
                <span>[Placeholder: {item.image}]</span>
              </div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </Link>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {item.type}
                  </div>
                  <h3 className="font-bold text-xl leading-tight mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
                <Link href={item.link} className="text-foreground/50 hover:text-accent transition-colors mt-1">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-foreground/70 mt-2">
                Created by {item.creator}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
