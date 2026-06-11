import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { studentsData } from "@/data/mockData";
import { Github, Linkedin, Search, Plus, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

const Students = () => {
  const [q, setQ] = useState("");
  const filtered = studentsData.filter((s) =>
    !q || [s.name, s.major, s.lookingFor, ...s.skills].join(" ").toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="container py-12">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Current Students</div>
          <h1 className="font-serif text-5xl font-bold text-primary mt-2">Student Profiles</h1>
          <p className="text-muted-foreground mt-3 text-lg">Showcase your work — link your LinkedIn & GitHub, share what you're building.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="hero" size="lg"><Plus className="h-4 w-4" /> Post Your Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Create your student profile</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full name</label>
                <Input placeholder="Your name" className="mt-1.5" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Major</label>
                  <Input placeholder="Computer Science" className="mt-1.5" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Year</label>
                  <Input placeholder="Final Year" className="mt-1.5" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn URL
                </label>
                <Input placeholder="https://linkedin.com/in/..." className="mt-1.5" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Github className="h-3.5 w-3.5" /> GitHub URL
                </label>
                <Input placeholder="https://github.com/..." className="mt-1.5" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Short bio</label>
                <Textarea placeholder="What are you building? What excites you?" rows={3} className="mt-1.5" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="hero" onClick={() => toast.success("Profile submitted successfully!")}>
                <Sparkles className="h-4 w-4" /> Publish profile
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-10 relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search students by skill, major..." className="pl-10 h-11" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map((s) => (
          <Card key={s.id} className="p-6 bg-card-gradient border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth group">
            <div className="flex items-start gap-4">
              <img src={s.avatar} alt={s.name} className="h-14 w-14 rounded-full bg-secondary ring-2 ring-accent/30" />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-primary leading-tight">{s.name}</h3>
                <div className="text-sm text-muted-foreground">{s.year} • {s.major}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mt-4 leading-relaxed">{s.bio}</p>

            <div className="mt-4 p-3 rounded-lg bg-accent-soft/50 border border-accent/20">
              <div className="text-[10px] uppercase tracking-wider text-accent font-bold">Looking for</div>
              <div className="text-sm font-medium text-primary mt-0.5">{s.lookingFor}</div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {s.skills.map((sk) => (
                <Badge key={sk} variant="secondary" className="bg-secondary text-secondary-foreground border-0 text-xs">{sk}</Badge>
              ))}
            </div>

            <div className="flex gap-2 mt-5 pt-4 border-t border-border/60">
              <Button variant="outline" size="sm" className="flex-1">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Github className="h-4 w-4" /> GitHub
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Students;
