import { Github, Linkedin, Mail, MapPin, Award, TrendingUp } from "lucide-react";

export type Alumni = {
  id: string;
  name: string;
  avatar: string;
  batch: number;
  degree: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  linkedin: string;
  github?: string;
  bio: string;
  skills: string[];
  achievements?: string[];
  email: string;
};

export type Student = {
  id: string;
  name: string;
  avatar: string;
  year: string;
  major: string;
  linkedin: string;
  github: string;
  bio: string;
  skills: string[];
  lookingFor: string;
};

export type MentorVideo = {
  id: string;
  title: string;
  thumbnail: string;
  mentor: string;
  mentorAvatar: string;
  duration: string;
  views: number;
  topic: string;
  postedAgo: string;
  description: string;
};

export type Doubt = {
  id: string;
  student: string;
  studentAvatar: string;
  question: string;
  topic: string;
  replies: number;
  status: "open" | "answered";
  postedAgo: string;
};

const av = (seed: string) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=c0aede,d1d4f9,b6e3f4,ffd5dc,ffdfbf`;

const thumb = (id: number) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=340&fit=crop`;

export const alumniData: Alumni[] = [
  { id: "1", name: "Venkata Sai Krishna", avatar: av("venkata"), batch: 2018, degree: "B.Tech CSE — AUCE", role: "Senior Software Engineer", company: "Google", location: "Hyderabad, IN", industry: "Technology", linkedin: "#", github: "#", bio: "Building large-scale distributed systems. Mentoring AU juniors every weekend.", skills: ["Go", "Kubernetes", "System Design"], achievements: ["AU Gold Medal 2018"], email: "venkata@andhrauniv.edu.in" },
  { id: "2", name: "Lakshmi Priya Devi", avatar: av("lakshmi"), batch: 2019, degree: "MBA Finance — AU School of Mgmt", role: "Investment Analyst", company: "Goldman Sachs", location: "London, UK", industry: "Finance", linkedin: "#", bio: "Equity research on emerging markets. Bharatanatyam dancer.", skills: ["Valuation", "M&A", "Excel"], email: "lakshmi@andhrauniv.edu.in" },
  { id: "3", name: "Rajesh Naidu", avatar: av("rajesh"), batch: 2017, degree: "B.Tech ECE — AUCE", role: "Founder & CEO", company: "Lumenite Labs", location: "Bengaluru, IN", industry: "Startup", linkedin: "#", github: "#", bio: "Hardware-software bridge. YC W22 alum.", skills: ["IoT", "Leadership", "Product"], achievements: ["Forbes 30u30 Asia"], email: "rajesh@andhrauniv.edu.in" },
  { id: "4", name: "Sridevi Subrahmanyam", avatar: av("sridevi"), batch: 2020, degree: "M.Sc Data Science — Dept of CS", role: "ML Research Scientist", company: "Microsoft Research", location: "Bengaluru, IN", industry: "Technology", linkedin: "#", github: "#", bio: "LLM alignment & evaluation research.", skills: ["PyTorch", "NLP", "Research"], email: "sridevi@andhrauniv.edu.in" },
  { id: "5", name: "Kishore Varma", avatar: av("kishore"), batch: 2016, degree: "B.Arch — College of Architecture", role: "Principal Architect", company: "Hafeez Contractor", location: "Mumbai, IN", industry: "Architecture", linkedin: "#", bio: "Sustainable urban design. Featured in Architectural Digest India.", skills: ["Revit", "Sustainability", "Urban Planning"], email: "kishore@andhrauniv.edu.in" },
  { id: "6", name: "Meghana Reddy", avatar: av("meghana"), batch: 2021, degree: "M.Sc Biotechnology — AU College of Sci", role: "Research Associate", company: "Biocon", location: "Bengaluru, IN", industry: "Healthcare", linkedin: "#", bio: "CRISPR-based gene therapy. Filter coffee enthusiast.", skills: ["Lab Tech", "Bioinformatics"], email: "meghana@andhrauniv.edu.in" },
  { id: "7", name: "Suresh Babu Chowdary", avatar: av("suresh"), batch: 2015, degree: "MBA — AU School of Mgmt", role: "VP Strategy", company: "McKinsey", location: "Singapore", industry: "Consulting", linkedin: "#", bio: "Helping Fortune 500s navigate digital transformation.", skills: ["Strategy", "Leadership"], achievements: ["Partner-track 2024"], email: "suresh@andhrauniv.edu.in" },
  { id: "8", name: "Ananya Lakshmi Iyer", avatar: av("ananya"), batch: 2019, degree: "B.Des — Dept of Fine Arts", role: "Lead Product Designer", company: "Figma", location: "Remote", industry: "Design", linkedin: "#", bio: "Crafting tools that designers love.", skills: ["Figma", "UX Research", "Prototyping"], email: "ananya@andhrauniv.edu.in" },
  { id: "9", name: "Manikanta Pavan Kumar", avatar: av("manikanta"), batch: 2018, degree: "B.Tech CSE — AUCE", role: "Staff Engineer", company: "Stripe", location: "Dublin, IE", industry: "Fintech", linkedin: "#", github: "#", bio: "Payments infrastructure at scale.", skills: ["Ruby", "Distributed Systems"], email: "manikanta@andhrauniv.edu.in" },
];

export const studentsData: Student[] = [
  { id: "s1", name: "Arjun Vasanth Rao", avatar: av("arjun"), year: "Final Year", major: "Computer Science Engineering", linkedin: "#", github: "#", bio: "Aspiring SDE. Open-source contributor at Apache. AU CSE Dept.", skills: ["React", "Node", "Python"], lookingFor: "SDE Internship" },
  { id: "s2", name: "Hari Chandana", avatar: av("hari"), year: "3rd Year", major: "Electronics & Communication", linkedin: "#", github: "#", bio: "Embedded systems hobbyist. Building a smart greenhouse.", skills: ["C++", "Arduino", "PCB Design"], lookingFor: "Hardware mentor" },
  { id: "s3", name: "Karthikeya Reddy", avatar: av("karthikeya"), year: "2nd Year", major: "Mechanical Engineering", linkedin: "#", github: "#", bio: "AU Formula Student team lead.", skills: ["CAD", "CFD", "Leadership"], lookingFor: "Auto industry referral" },
  { id: "s4", name: "Naga Lakshmi Sailaja", avatar: av("naga"), year: "Final Year", major: "Data Science (M.Sc)", linkedin: "#", github: "#", bio: "ML engineer in the making. Kaggle Expert.", skills: ["TensorFlow", "SQL", "Statistics"], lookingFor: "ML role at startup" },
  { id: "s5", name: "Vamsi Krishna Patnaik", avatar: av("vamsi"), year: "3rd Year", major: "Business Administration (BBA)", linkedin: "#", github: "#", bio: "Co-founded a campus delivery startup at AU.", skills: ["Sales", "Strategy", "Excel"], lookingFor: "VC mentorship" },
  { id: "s6", name: "Tejaswini Bhavani", avatar: av("tejaswini"), year: "Final Year", major: "Architecture (B.Arch)", linkedin: "#", github: "#", bio: "Sustainable design enthusiast. Loves Vizag's coastline as muse.", skills: ["Rhino", "Grasshopper"], lookingFor: "Design firm internship" },
];

export const videosData: MentorVideo[] = [
  { id: "v1", title: "System Design Interview: Scaling to 1M users", thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=340&fit=crop", mentor: "Venkata Sai Krishna", mentorAvatar: av("venkata"), duration: "24:18", views: 4820, topic: "Engineering", postedAgo: "2 days ago", description: "Walking through the design of a URL shortener — covering load balancing, sharding, and caching strategies." },
  { id: "v2", title: "How I broke into Investment Banking from AU", thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=340&fit=crop", mentor: "Lakshmi Priya Devi", mentorAvatar: av("lakshmi"), duration: "18:42", views: 2103, topic: "Finance", postedAgo: "5 days ago", description: "From AU School of Management to Goldman — the prep, the interviews, the mistakes I made." },
  { id: "v3", title: "Building & Funding Your First Startup", thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=340&fit=crop", mentor: "Rajesh Naidu", mentorAvatar: av("rajesh"), duration: "31:05", views: 7211, topic: "Entrepreneurship", postedAgo: "1 week ago", description: "From AU hostel room to Y Combinator — the unfiltered version of my first 18 months." },
  { id: "v4", title: "Demystifying ML Research Roles", thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop", mentor: "Sridevi Subrahmanyam", mentorAvatar: av("sridevi"), duration: "22:30", views: 3408, topic: "AI/ML", postedAgo: "3 days ago", description: "What does an ML research scientist actually do day-to-day? Plus: how to get there." },
  { id: "v5", title: "Product Design Portfolio Review", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&h=340&fit=crop", mentor: "Ananya Lakshmi Iyer", mentorAvatar: av("ananya"), duration: "27:12", views: 1899, topic: "Design", postedAgo: "1 day ago", description: "Live review of three AU student portfolios — what works, what doesn't." },
  { id: "v6", title: "Resume Tips That Actually Work", thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=340&fit=crop", mentor: "Suresh Babu Chowdary", mentorAvatar: av("suresh"), duration: "15:48", views: 9402, topic: "Career", postedAgo: "4 days ago", description: "After reviewing 1000+ resumes, here's what consistently lands interviews." },
];

export const doubtsData: Doubt[] = [
  { id: "d1", student: "Arjun Vasanth Rao", studentAvatar: av("arjun"), question: "How important is competitive programming for SDE interviews at FAANG?", topic: "Engineering", replies: 7, status: "answered", postedAgo: "1h ago" },
  { id: "d2", student: "Naga Lakshmi Sailaja", studentAvatar: av("naga"), question: "What's a realistic path from data analyst to ML engineer in 2 years?", topic: "AI/ML", replies: 4, status: "answered", postedAgo: "3h ago" },
  { id: "d3", student: "Vamsi Krishna Patnaik", studentAvatar: av("vamsi"), question: "Should I do an MBA right after BBA or work for 3 years first?", topic: "Career", replies: 12, status: "answered", postedAgo: "1d ago" },
  { id: "d4", student: "Hari Chandana", studentAvatar: av("hari"), question: "Best resources to learn embedded Linux from scratch?", topic: "Engineering", replies: 0, status: "open", postedAgo: "5h ago" },
  { id: "d5", student: "Tejaswini Bhavani", studentAvatar: av("tejaswini"), question: "How do I build a competitive architecture portfolio with limited project experience?", topic: "Design", replies: 2, status: "open", postedAgo: "2d ago" },
];

export const stats = {
  alumni: 12480,
  students: 3265,
  mentors: 412,
  videos: 1847,
  countries: 64,
  companies: 2103,
};

export const industries = ["All", "Technology", "Finance", "Startup", "Healthcare", "Consulting", "Design", "Architecture", "Fintech"];
export const batches = ["All", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];
export const topics = ["All", "Engineering", "Finance", "AI/ML", "Design", "Career", "Entrepreneurship"];

export const icons = { Github, Linkedin, Mail, MapPin, Award, TrendingUp };
