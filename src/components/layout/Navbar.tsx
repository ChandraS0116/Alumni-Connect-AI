import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Users, Video, Shield, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/alumni", label: "Alumni", icon: Users },
  { to: "/students", label: "Students", icon: GraduationCap },
  { to: "/mentors", label: "Mentors", icon: Video },
  { to: "/admin", label: "Admin", icon: Shield },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow-gold group-hover:scale-110 transition-smooth">
              <GraduationCap className="h-5 w-5 text-primary" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-serif font-bold text-lg text-primary">AU Alma<span className="text-gold">.</span>Net</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Andhra University</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-smooth",
                  active
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="hero" size="sm">Join Network</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <nav className="container py-3 flex flex-col gap-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-3",
                  pathname === to ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">Sign in</Button>
              <Button variant="hero" size="sm" className="flex-1">Join</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
