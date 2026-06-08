import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, PlayCircle, Calendar } from "lucide-react";
import Link from "next/link";

const videos = [
  {
    id: "v1",
    title: "Introduction to CAIVO & Our Mission",
    description: "Welcome to CAIVO! In this inaugural meeting, we discuss our plans for AI education, our core values, and what you can expect from our future sessions.",
    date: "May 29, 2026",
    youtubeId: "y5WkAPggCQU",
  },
  {
    id: "v2",
    title: "Understanding Large Language Models",
    description: "A deep dive into how LLMs work, their architecture, and the ethical implications of using them in educational environments.",
    date: "May 29, 2026",
    youtubeId: "mFB-l5qJyBo",
  },
  {
    id: "v3",
    title: "AI in Finance: Trends and Predictions",
    description: "The Finance Division leads a discussion on how machine learning algorithms are revolutionizing trading and risk management.",
    date: "June 03, 2026",
    youtubeId: "JXP0uJI7GRg",
  },
  {
    id: "v4",
    title: "Activation functions in neural networks",
    description: "An exploration of different activation functions and their impact on neural network performance.",
    date: "June 04, 2026",
    youtubeId: "7xzGTs2n8LM",
  },
];

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent mb-6">
          <PlayCircle className="w-4 h-4 mr-2" />
          CAIVO YouTube Channel
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-6">Meetings & Recordings</h1>
        <p className="text-lg text-foreground/80 leading-relaxed">
            Browse our library of meeting recordings, technical deep-dives, and AI tutorials directly from our YouTube channel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden flex flex-col h-full bg-card border-border border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-muted border-b border-border">
              <iframe 
                className="absolute inset-0 w-full h-full object-cover" 
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`} 
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
              />
            </div>
            
            {/* Details */}
            <CardHeader className="pb-3 flex-grow">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-accent">
                  <Video className="w-3.5 h-3.5" />
                  Meeting
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {video.date}
                </span>
              </div>
              <CardTitle className="text-xl leading-tight mb-2 group-hover:text-accent transition-colors">
                {video.title}
              </CardTitle>
              <CardDescription className="text-foreground/70 text-sm leading-relaxed">
                {video.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6 mt-auto">
              <Link 
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-foreground/60 hover:text-accent transition-colors"
              >
                Watch on YouTube <PlayCircle className="w-4 h-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
