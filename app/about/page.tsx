import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Officer {
  name: string;
  title: string;
  bio: string;
  picture?: string;
}

const officers: Officer[] = [
  {
    name: "Evan Wright",
    title: "President",
    bio: "Passionate about AI ethics and responsible technology development. Leads the strategic vision for CAIVO.",
    picture: "/pfps/evan_wright.png",
  },
  {
    name: "Prateep Kumar Mandal",
    title: "Co-President",
    bio: "Focused on technical implementation and AI research. Organizes coding workshops and virtual learning events.",
  },
  {
    name: "Vidush",
    title: "Secretary / Communications",
    bio: "Generic bio of a secretary, I'm tired of creating descriptions.",
  },
  {
    name: "Iskander Madikhan",
    title: "Executive Director of STEM Division",
    bio: "Smart, passionate, and handsome young man.",
    picture: "/pfps/iskander_madikhan.jpg",
  },
  {
    name: "Yin",
    title: "Executive Director of Finance Division",
    bio: "Good guy, nothing else to say.",
  },
  {
    name: "Mukund",
    title: "Executive Researcher of STEM Division",
    bio: "Good guy, nothing else to say.",
  },
  {
    name: "Anwitha",
    title: "STEM Assistant of STEM Division",
    bio: "Good person, nothing else to say.",
  },
  {
    name: "Tejas",
    title: "Executive Researcher of Finance Division",
    bio: "Good guy, nothing else to say.",
  },
  {
    name: "Haris",
    title: "Finance Assistant of Finance Division",
    bio: "Good guy, nothing else to say.",
  },
  {
    name: "Open Position",
    title: "Vice President",
    bio: "We are currently looking for a Vice President to help organize events and outreach. Join us today!",
  },
  {
    name: "Open Position",
    title: "Director of Outreach",
    bio: "We are currently looking for a Director of Outreach to help expand our network. Join us today!",
  },
];

export default function AboutPage() {
  const presidents = officers.filter(
    (o) => o.title.includes("President") && o.name !== "Open Position",
  );
  const executives = officers.filter(
    (o) =>
      o.title.includes("Executive Director") || o.title.includes("Secretary"),
  );
  const assistants = officers.filter(
    (o) => o.title.includes("Researcher") || o.title.includes("Assistant"),
  );
  const openPositions = officers.filter((o) => o.name === "Open Position");

  const OfficerCard = ({ officer }: { officer: Officer }) => (
    <Card className="overflow-hidden bg-card border-border border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full max-w-[280px]">
      <div className="aspect-square relative w-full bg-muted border-b border-border">
        <Image
          src={officer.picture || "/pfps/placeholder.png"}
          alt={officer.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-5 text-center">
        <h3 className="font-semibold text-lg">{officer.name}</h3>
        <p className="text-sm font-medium text-accent mb-3">{officer.title}</p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          {officer.bio}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <div className="max-w-3xl mb-20 mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About CAIVO</h1>
        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
          CAIVO (Charlotte AI and Vanguard Organization) is a student-led
          initiative founded in 2025 by Evan Wright and Prateep Kumar Mandal. We
          explore the world of AI through debate, discussion, and virtual
          learning.
        </p>
        <p className="text-lg text-foreground/80 leading-relaxed">
          We believe in using AI responsibly, and we&apos;re shaping the next
          generation of student innovators and critical thinkers in the
          Charlotte community. Our goal is to make AI education accessible and
          engaging for all students.
        </p>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          Our Leadership
        </h2>
        <p className="text-foreground/70">
          The dedicated team behind CAIVO&apos;s vision and operations.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-12 md:space-y-16">
        {/* Top Tier: Presidents */}
        <div className="w-full flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent mb-8">
            Presidents
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
            {presidents.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </div>
        </div>

        {/* Mid Tier: Directors */}
        <div className="w-full flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-bold text-foreground/70 mb-8">
            Directors
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
            {executives.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </div>
        </div>

        {/* Bottom Tier: Researchers & Assistants */}
        <div className="w-full flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-bold text-foreground/70 mb-8">
            Researchers and Assistants
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
            {assistants.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </div>
        </div>
      </div>

      {openPositions.length > 0 && (
        <div className="mt-24 pt-16 border-t border-border">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              Open Positions
            </h2>
            <p className="text-foreground/70">
              Join our leadership team and help shape the future of CAIVO.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full opacity-80">
            {openPositions.map((officer, index) => (
              <OfficerCard key={index} officer={officer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
