import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const officers = [
  {
    name: "Evan Wright",
    title: "Co-Founder",
    bio: "Passionate about AI ethics and responsible technology development. Leads the strategic vision for CAIVO.",
    image: "/officer_placeholder.png",
  },
  {
    name: "Prateep Kumar Mandal",
    title: "Co-Founder",
    bio: "Focused on technical implementation and AI research. Organizes coding workshops and virtual learning events.",
    image: "/officer_placeholder.png",
  },
  {
    name: "Open Position",
    title: "Vice President",
    bio: "We are currently looking for a Vice President to help organize events and outreach. Join us today!",
    image: "/officer_placeholder.png",
  },
  {
    name: "Open Position",
    title: "Director of Outreach",
    bio: "We are currently looking for a Director of Outreach to help expand our network. Join us today!",
    image: "/officer_placeholder.png",
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About CAIVO</h1>
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          CAIVO (Charlotte AI and Vanguard Organization) is a student-led initiative founded in 2025 by Evan Wright and Prateep Kumar Mandal. We explore the world of AI through debate, discussion, and virtual learning.
        </p>
        <p className="text-lg text-foreground/80 leading-relaxed">
          We believe in using AI responsibly, and we're shaping the next generation of student innovators and critical thinkers in the Charlotte community. Our goal is to make AI education accessible and engaging for all students.
        </p>
      </div>

      <h2 className="text-2xl font-bold tracking-tight mb-8">Meet the Officers</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {officers.map((officer, index) => (
          <Card key={index} className="overflow-hidden bg-card border-border border">
            <div className="aspect-square relative w-full bg-muted border-b border-border">
              <Image 
                src={officer.image} 
                alt={officer.name} 
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-5">
              <h3 className="font-semibold text-lg">{officer.name}</h3>
              <p className="text-sm font-medium text-accent mb-3">{officer.title}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {officer.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
