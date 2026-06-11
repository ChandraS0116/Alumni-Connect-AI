import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock } from "lucide-react";
import type { MentorVideo } from "@/data/mockData";

export const VideoCard = ({ v }: { v: MentorVideo }) => (
  <Card className="overflow-hidden bg-card border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth group cursor-pointer">
    <div className="relative aspect-video overflow-hidden bg-secondary">
      <img src={v.thumbnail} alt={v.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-smooth" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold scale-90 group-hover:scale-100 transition-smooth">
          <Play className="h-7 w-7 text-primary fill-primary ml-1" />
        </div>
      </div>
      <div className="absolute bottom-3 right-3 bg-primary/90 text-primary-foreground text-xs font-mono px-2 py-1 rounded flex items-center gap-1">
        <Clock className="h-3 w-3" />{v.duration}
      </div>
      <Badge className="absolute top-3 left-3 bg-gold-gradient text-primary border-0 font-semibold">{v.topic}</Badge>
    </div>
    <div className="p-5">
      <h3 className="font-serif text-base font-semibold text-primary line-clamp-2 leading-snug min-h-[2.8em]">{v.title}</h3>
      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{v.description}</p>
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/60">
        <img src={v.mentorAvatar} alt={v.mentor} className="h-8 w-8 rounded-full bg-secondary ring-1 ring-accent/30" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-foreground truncate">{v.mentor}</div>
          <div className="text-[11px] text-muted-foreground flex items-center gap-2">
            <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{v.views.toLocaleString()}</span>
            <span>•</span>
            <span>{v.postedAgo}</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
);
