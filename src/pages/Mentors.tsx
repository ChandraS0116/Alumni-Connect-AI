import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VideoCard } from "@/components/dashboard/VideoCard";
import { videosData, doubtsData, topics } from "@/data/mockData";
import { Upload, MessageCircle, CheckCircle2, Clock, Video as VideoIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import mentorImg from "@/assets/mentor-video.jpg";
import { toast } from "sonner";

const Mentors = () => {
  const [topic, setTopic] = useState("All");
  const filtered = topic === "All" ? videosData : videosData.filter((v) => v.topic === topic);

  return (
    <>
      {/* Header banner */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img src={mentorImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" width={1200} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40" />
        <div className="container relative py-16 md:py-20">
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Mentor Hub</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mt-3 max-w-2xl">Lessons from those who walked the path.</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl text-lg">Bite-sized video answers to the questions students actually ask.</p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="hero" size="lg" className="mt-8">
                <Upload className="h-4 w-4" /> Upload a Lesson
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle className="font-serif text-2xl">Share a mentor video</DialogTitle></DialogHeader>
              <div className="space-y-4 py-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Title</label>
                  <Input placeholder="e.g. How I prepped for FAANG interviews" className="mt-1.5" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Topic</label>
                  <Input placeholder="Engineering, Finance, Career..." className="mt-1.5" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</label>
                  <Textarea placeholder="What will students learn?" rows={3} className="mt-1.5" />
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-secondary/40">
                  <VideoIcon className="h-10 w-10 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground mt-2">Drop video file here or click to browse</p>
                  <p className="text-xs text-muted-foreground mt-1">MP4, MOV — up to 500MB</p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="hero" onClick={() => toast.success("Video uploaded successfully!")}>
                  <Upload className="h-4 w-4" /> Publish lesson
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <div className="container py-12">
        {/* Topic chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {topics.map((t) => (
            <button key={t} onClick={() => setTopic(t)}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-smooth border ${
                topic === t ? "bg-primary text-primary-foreground border-primary shadow-soft" : "bg-card border-border text-foreground/70 hover:border-accent"
              }`}>{t}</button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">{topic === "All" ? "All lessons" : topic}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((v) => <VideoCard key={v.id} v={v} />)}
            </div>
          </div>

          <aside>
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">Doubt Board</h2>
            <Card className="bg-card border-border/60 shadow-soft overflow-hidden">
              {doubtsData.map((d, i) => (
                <div key={d.id} className={`p-4 ${i !== doubtsData.length - 1 ? "border-b border-border/60" : ""} hover:bg-secondary/40 transition-smooth cursor-pointer`}>
                  <div className="flex gap-3">
                    <img src={d.studentAvatar} alt={d.student} className="h-9 w-9 rounded-full bg-secondary shrink-0 ring-1 ring-accent/20" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{d.student}</span>
                        <span>•</span>
                        <span>{d.postedAgo}</span>
                      </div>
                      <p className="text-sm text-foreground mt-1 leading-snug">{d.question}</p>
                      <div className="flex items-center gap-3 mt-2.5 flex-wrap">
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{d.topic}</Badge>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />{d.replies}
                        </span>
                        <span className={`text-[11px] flex items-center gap-1 font-medium ${d.status === "answered" ? "text-accent" : "text-muted-foreground"}`}>
                          {d.status === "answered" ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                          {d.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
            <Button variant="outline" className="w-full mt-4">Ask a doubt</Button>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Mentors;
