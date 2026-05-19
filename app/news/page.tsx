import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Upcoming Workshop: Intro to Neural Networks",
    date: "June 12, 2025",
    time: "4:00 PM EST",
    location: "Virtual (Discord)",
    type: "Event",
    content: "Join us for a beginner-friendly deep dive into how neural networks function under the hood. We'll be using Python and PyTorch. No prior experience required!",
  },
  {
    id: 2,
    title: "New Volunteer Opportunities Available",
    date: "June 5, 2025",
    time: null,
    location: null,
    type: "Announcement",
    content: "We are officially accepting applications for Vice President and Director of Outreach. If you're passionate about AI and want to help shape CAIVO's future, apply through our contact page.",
  },
  {
    id: 3,
    title: "CAIVO Official Launch",
    date: "May 20, 2025",
    time: null,
    location: null,
    type: "Announcement",
    content: "Welcome to the official launch of the Charlotte AI and Vanguard Organization! We're excited to start this journey exploring the world of AI with students across Charlotte.",
  }
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">News & Updates</h1>
        <p className="text-lg text-foreground/80">
          Stay up to date with the latest CAIVO announcements, upcoming workshops, and event schedules.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {newsItems.map((item, index) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 text-accent">
              <Calendar className="w-4 h-4" />
            </div>
            
            {/* Card */}
            <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-card border-border border">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.type}</span>
                  <span className="text-xs text-foreground/50">{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                
                {(item.time || item.location) && (
                  <CardDescription className="flex items-center gap-4 mt-2">
                    {item.time && (
                      <span className="flex items-center gap-1 text-xs">
                        <Clock className="h-3 w-3" /> {item.time}
                      </span>
                    )}
                    {item.location && (
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="h-3 w-3" /> {item.location}
                      </span>
                    )}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
