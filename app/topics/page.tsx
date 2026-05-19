import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Folder, ArrowRight } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    id: "ai-ethics",
    title: "AI Ethics",
    description: "Discussions on bias, transparency, and the societal impact of large language models.",
    articleCount: 12,
  },
  {
    id: "ai-finance",
    title: "AI in Finance",
    description: "How machine learning and predictive analytics are reshaping trading and banking.",
    articleCount: 8,
  },
  {
    id: "ai-healthcare",
    title: "AI in Healthcare",
    description: "The application of computer vision and pattern recognition in medical diagnostics.",
    articleCount: 5,
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    description: "The intersection of physical engineering and deep learning algorithms.",
    articleCount: 7,
  },
  {
    id: "edge-computing",
    title: "Edge AI",
    description: "Running powerful models on low-power, decentralized devices.",
    articleCount: 4,
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Exploring the capabilities of text, image, and video generation models.",
    articleCount: 15,
  }
];

export default function TopicsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">STEM Topics</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Browse our library of writeups and summaries organized by core STEM and AI topic areas. Select a topic to read related articles from our members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/topics/${topic.id}`} className="block group">
            <Card className="h-full bg-card border-border border transition-colors hover:border-accent/50 hover:shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center h-8 w-8 rounded bg-accent/10 text-accent">
                    <Folder className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                    {topic.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/70">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>{topic.articleCount} articles</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
