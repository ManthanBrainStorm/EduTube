import { LayoutDashboard, Library, type LucideIcon } from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const marketingNavLinks = [
  { title: "How it works", href: "#how-it-works" },
  { title: "Features", href: "#features" },
  { title: "FAQ", href: "#faq" },
];

export const dashboardNavLinks: NavLink[] = [
  { title: "Library", href: "/dashboard", icon: Library },
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Paste a playlist URL",
    description:
      "Drop any public YouTube playlist link into EduTube. No extensions, no downloads.",
  },
  {
    step: "02",
    title: "We structure it for you",
    description:
      "Videos become ordered lessons with durations, progress tracking, and a clean sidebar.",
  },
  {
    step: "03",
    title: "Learn and resume anytime",
    description:
      "Pick up exactly where you left off. Your progress syncs across every session.",
  },
];

export const features = [
  {
    title: "Playlist → Course",
    description:
      "Transform chaotic YouTube playlists into structured, sequential learning paths.",
  },
  {
    title: "Progress Tracking",
    description:
      "Mark lessons complete, see overall progress, and know exactly where you stopped.",
  },
  {
    title: "Resume Learning",
    description:
      "One click back to your current lesson. No scrubbing through watch history.",
  },
  {
    title: "Clean Player View",
    description:
      "Focused video player with a lesson sidebar — no algorithm distractions.",
  },
];

export const faqs = [
  {
    question: "Does EduTube download YouTube videos?",
    answer:
      "No. EduTube structures your playlist and tracks progress while you watch on YouTube. Videos always play from the source.",
  },
  {
    question: "Can I import private playlists?",
    answer:
      "Only public YouTube playlists are supported. Paste the playlist URL and we handle the rest.",
  },
  {
    question: "Is my progress saved?",
    answer:
      "Yes. Every lesson you complete is tracked so you can resume exactly where you left off.",
  },
  {
    question: "How is this different from YouTube's built-in playlist?",
    answer:
      "YouTube playlists lack progress tracking, lesson completion, and a focused learning view. EduTube adds the structure self-learners actually need.",
  },
];
