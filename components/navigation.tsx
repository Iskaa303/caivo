"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Home, Users, FileText, Library, Sparkles, Newspaper, Mail, Video } from "lucide-react";
import { useState, useEffect } from "react";

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "Officers", icon: Users },
  { href: "/meetings", label: "Videos", icon: Video },
  { href: "/research", label: "Research", icon: FileText },
  { href: "/topics", label: "STEM Topics", icon: Library },
  { href: "/showcase", label: "Showcase", icon: Sparkles },
  { href: "/news", label: "News", icon: Newspaper },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
          scrolled || isOpen ? "bg-background/95 backdrop-blur shadow-sm border-b border-border" : "bg-background/50 border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
              <div className="relative overflow-hidden rounded-lg p-1 transition-transform group-hover:scale-105">
                <Image
                  src="/logo_expanded.png"
                  alt="CAIVO Logo"
                  width={140}
                  height={45}
                  className="h-10 w-auto object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center px-8">
            <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-full border border-border/50">
              {routes.map((route) => {
                const Icon = route.icon;
                const isActive = pathname === route.href;
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                      isActive
                        ? "bg-background text-accent shadow-sm border border-border"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className={cn("w-4 h-4", isActive ? "text-accent" : "text-foreground/50")} />
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA & Mobile Toggle - Right */}
          <div className="flex items-center justify-end gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg hover:-translate-y-0.5 h-10 px-6"
            >
              <Mail className="w-4 h-4 mr-2" />
              Join Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-full text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu className={cn("absolute h-6 w-6 transition-all duration-300", isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")} />
                <X className={cn("absolute h-6 w-6 transition-all duration-300", isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50")} />
              </div>
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out border-t border-border overflow-y-auto",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 space-y-2">
          {routes.map((route, i) => {
            const Icon = route.icon;
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${isOpen ? i * 50 : 0}ms` }}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-bold transition-all duration-300 transform",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0",
                  isActive
                    ? "bg-accent/10 text-accent border border-accent/20 shadow-sm"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                )}
              >
                <div className={cn("p-2 rounded-xl", isActive ? "bg-accent/20 text-accent" : "bg-muted text-foreground/60")}>
                  <Icon className="w-5 h-5" />
                </div>
                {route.label}
              </Link>
            );
          })}

          <div className="pt-6 mt-4 border-t border-border" style={{ transitionDelay: `${isOpen ? routes.length * 50 : 0}ms` }}>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-center gap-3 w-full rounded-2xl text-base font-bold transition-all duration-300 transform h-14",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                "bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg active:scale-95"
              )}
            >
              <Mail className="w-5 h-5" />
              Join Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to push content down since nav is fixed */}
      <div className="h-16" />
    </>
  );
}
