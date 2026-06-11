import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { stats, alumniData, videosData, doubtsData } from "@/data/mockData";
import { Users, GraduationCap, Video, AlertCircle, CheckCircle2, TrendingUp, Activity, Shield, MoreHorizontal } from "lucide-react";

const Admin = () => {
  const pending = [
    { name: "Aditya Varma", type: "Alumni", action: "New profile — Dept of EEE", time: "5m ago" },
    { name: "Sai Charan Gowtham", type: "Mentor", action: "Video upload (32 MB) — CSE", time: "12m ago" },
    { name: "Rama Krishna Prasad", type: "Student", action: "Profile edit — Mech Engg", time: "18m ago" },
    { name: "Padmavathi Anjali", type: "Alumni", action: "New profile — School of Mgmt", time: "1h ago" },
  ];

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Admin Console</span>
          </div>
          <h1 className="font-serif text-5xl font-bold text-primary mt-2">Operations Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back. Here's what needs your attention today.</p>
        </div>
        <Badge className="bg-gold-gradient text-primary border-0 px-3 py-1.5 font-semibold">
          <Activity className="h-3.5 w-3.5 mr-1.5" /> All systems healthy
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <StatCard icon={Users} label="Total Alumni" value={stats.alumni} trend="↑ 124 this week" accent />
        <StatCard icon={GraduationCap} label="Active Students" value={stats.students} trend="↑ 38 this week" />
        <StatCard icon={Video} label="Mentor Videos" value={stats.videos} trend="↑ 12 this week" />
        <StatCard icon={AlertCircle} label="Pending Approvals" value={4} trend="2 urgent" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {/* Pending */}
        <Card className="lg:col-span-2 p-6 bg-card border-border/60 shadow-soft">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-2xl font-bold text-primary">Pending Approvals</h2>
            <Badge variant="secondary">{pending.length}</Badge>
          </div>
          <div className="divide-y divide-border/60">
            {pending.map((p) => (
              <div key={p.name} className="py-4 flex items-center gap-4 first:pt-0 last:pb-0">
                <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-primary font-serif font-bold text-sm shrink-0">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-foreground truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.action}</div>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">{p.type}</Badge>
                <span className="text-xs text-muted-foreground hidden md:block">{p.time}</span>
                <div className="flex gap-1.5">
                  <Button size="sm" variant="hero">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                  </Button>
                  <Button size="icon" variant="ghost" className="h-9 w-9">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Engagement chart */}
        <Card className="p-6 bg-primary text-primary-foreground border-0 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-gold-gradient opacity-20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold">
              <TrendingUp className="h-3.5 w-3.5" /> Weekly Engagement
            </div>
            <div className="font-serif text-5xl font-bold mt-3">+18.4%</div>
            <p className="text-primary-foreground/70 text-sm mt-1">vs. previous week</p>

            <div className="flex items-end gap-1.5 h-32 mt-8">
              {[40, 55, 38, 70, 62, 88, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t bg-gold-gradient transition-smooth hover:opacity-80" style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-primary-foreground/60">{["M","T","W","T","F","S","S"][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Recent activity */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <Card className="p-6 bg-card border-border/60 shadow-soft">
          <h2 className="font-serif text-xl font-bold text-primary mb-4">Top Alumni This Month</h2>
          <div className="space-y-3">
            {alumniData.slice(0, 5).map((a, i) => (
              <div key={a.id} className="flex items-center gap-3">
                <div className="font-serif font-bold text-accent text-lg w-6">{i + 1}</div>
                <img src={a.avatar} alt={a.name} className="h-9 w-9 rounded-full bg-secondary" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{a.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{a.role} · {a.company}</div>
                </div>
                <Badge variant="secondary" className="text-xs">{Math.floor(Math.random() * 90 + 20)} views</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-card border-border/60 shadow-soft">
          <h2 className="font-serif text-xl font-bold text-primary mb-4">Recent Doubts</h2>
          <div className="space-y-4">
            {doubtsData.slice(0, 4).map((d) => (
              <div key={d.id} className="text-sm">
                <p className="text-foreground line-clamp-1">{d.question}</p>
                <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                  <span>{d.student}</span>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">{d.topic}</Badge>
                  <span>{d.postedAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
