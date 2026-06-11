import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin, Mail, Award } from "lucide-react";
import type { Alumni } from "@/data/mockData";

export const AlumniCard = ({ a }: { a: Alumni }) => (
  <Card className="p-6 bg-card-gradient border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth group relative overflow-hidden">
    <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-gradient opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-smooth" />
    <div className="flex items-start gap-4 relative">
      <div className="relative shrink-0">
        <img src={a.avatar} alt={a.name} className="h-16 w-16 rounded-full bg-secondary ring-2 ring-accent/30" />
        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-gold-gradient flex items-center justify-center text-[10px] font-bold text-primary border-2 border-card">
          {String(a.batch).slice(2)}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-lg font-semibold text-primary leading-tight">{a.name}</h3>
        <div className="text-sm text-foreground/80 font-medium mt-0.5">{a.role}</div>
        <div className="text-sm text-accent font-semibold">{a.company}</div>
      </div>
    </div>

    <p className="text-sm text-muted-foreground mt-4 line-clamp-2 leading-relaxed">{a.bio}</p>

    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{a.location}</span>
      <span>•</span>
      <span>{a.degree}</span>
    </div>

    <div className="flex flex-wrap gap-1.5 mt-4">
      {a.skills.slice(0, 3).map((s) => (
        <Badge key={s} variant="secondary" className="bg-accent-soft text-accent-foreground border-0 text-xs font-medium">
          {s}
        </Badge>
      ))}
    </div>

    {a.achievements && (
      <div className="flex items-center gap-1.5 mt-3 text-xs text-accent">
        <Award className="h-3.5 w-3.5" />
        <span className="font-medium">{a.achievements[0]}</span>
      </div>
    )}

    <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/60">
      <Button size="sm" variant="hero" className="flex-1">Connect</Button>
      <Button size="icon" variant="outline" className="h-9 w-9" aria-label="LinkedIn">
        <Linkedin className="h-4 w-4" />
      </Button>
      {a.github && (
        <Button size="icon" variant="outline" className="h-9 w-9" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </Button>
      )}
      <Button size="icon" variant="outline" className="h-9 w-9" aria-label="Email">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  </Card>
);
