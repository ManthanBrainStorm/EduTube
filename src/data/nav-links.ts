import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const marketingNavLinks = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "About", href: "#about" },
];

export const dashboardNavLinks: NavLink[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Courses", href: "/dashboard", icon: BookOpen },
  { title: "Certificates", href: "/dashboard", icon: GraduationCap },
  { title: "Settings", href: "/dashboard", icon: Settings },
];
