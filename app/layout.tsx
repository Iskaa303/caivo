import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAIVO",
  description: "Charlotte AI and Vanguard Organization (CAIVO) is a student-led initiative exploring the world of AI through debate, discussion, and virtual learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-background ${nunito.className}`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
