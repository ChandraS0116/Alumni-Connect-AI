import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlumniCard } from "@/components/dashboard/AlumniCard";
import { alumniData, industries, batches } from "@/data/mockData";
import { Search, SlidersHorizontal } from "lucide-react";

const Alumni = () => {
  const [q, setQ] = useState("");
  const [industry, setIndustry] = useState("All");
  const [batch, setBatch] = useState("All");

  const filtered = useMemo(() => alumniData.filter((a) => {
    const m = q.toLowerCase();
    const matchQ = !q || [a.name, a.role, a.company, a.location, a.bio, ...a.skills].join(" ").toLowerCase().includes(m);
    const matchI = industry === "All" || a.industry === industry;
    const matchB = batch === "All" || String(a.batch) === batch;
    return matchQ && matchI && matchB;
  }), [q, industry, batch]);

  return (
    <div className="container py-12">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Directory</div>
        <h1 className="font-serif text-5xl font-bold text-primary mt-2">Alumni Network</h1>
        <p className="text-muted-foreground mt-3 text-lg">Explore {alumniData.length}+ graduates across industries, batches, and continents.</p>
      </div>

      {/* Search bar */}
      <div className="mt-10 bg-card-gradient border border-border/60 rounded-xl p-4 shadow-soft">
        <div className="flex gap-3 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, role, skill..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10 h-11 bg-background border-border"
            />
          </div>
          <Button variant="hero" size="lg" className="hidden sm:flex">
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </Button>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-1">Industry</span>
            {industries.map((i) => (
              <button key={i} onClick={() => setIndustry(i)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-smooth border ${
                  industry === i ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-background border-border text-foreground/70 hover:border-accent"
                }`}>{i}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mr-1">Batch</span>
            {batches.map((b) => (
              <button key={b} onClick={() => setBatch(b)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-smooth border ${
                  batch === b ? "bg-accent text-accent-foreground border-accent shadow-gold" : "bg-background border-border text-foreground/70 hover:border-accent"
                }`}>{b}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {alumniData.length} alumni
        </p>
        {(industry !== "All" || batch !== "All" || q) && (
          <Button variant="ghost" size="sm" onClick={() => { setQ(""); setIndustry("All"); setBatch("All"); }}>Clear filters</Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Badge variant="secondary" className="mb-4">No matches</Badge>
          <p className="text-muted-foreground">Try widening your filters.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a) => <AlumniCard key={a.id} a={a} />)}
        </div>
      )}
    </div>
  );
};

export default Alumni;
