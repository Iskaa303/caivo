import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const publications = [
  {
    title: "Ethical Considerations in Large Language Models",
    author: "Evan Wright",
    date: "May 2025",
    abstract: "An analysis of bias and ethical guardrails in modern LLM architectures, focusing on student use-cases.",
    topic: "AI Ethics",
    link: "#",
  },
  {
    title: "Optimizing Neural Networks for Low-Power Devices",
    author: "Prateep Kumar Mandal",
    date: "April 2025",
    abstract: "Exploring quantization and pruning techniques to run AI models on edge devices efficiently.",
    topic: "Edge Computing",
    link: "#",
  },
  {
    title: "The Future of AI in Quantitative Finance",
    author: "CAIVO Research Team",
    date: "March 2025",
    abstract: "A survey of predictive modeling techniques used in modern algorithmic trading.",
    topic: "Finance",
    link: "#",
  }
];

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Research & Publications</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Explore our open-access research papers, articles, and reports. All content is written by CAIVO members and is free for anyone to read.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {publications.map((pub, index) => (
          <Card key={index} className="bg-card border-border border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground/70 mb-3">
                    {pub.topic}
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{pub.title}</CardTitle>
                  <CardDescription className="text-foreground/60">
                    By {pub.author} • {pub.date}
                  </CardDescription>
                </div>
                <Link href={pub.link} className="hidden sm:flex items-center justify-center rounded-md border border-border bg-background hover:bg-accent/10 hover:text-accent hover:border-accent/20 h-10 w-10 transition-colors">
                  <Download className="h-4 w-4" />
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                {pub.abstract}
              </p>
              <Link href={pub.link} className="sm:hidden mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline">
                <FileText className="mr-2 h-4 w-4" />
                Read Paper
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
