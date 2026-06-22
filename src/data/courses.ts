export type Lesson = {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  current?: boolean;
};

export type PlaylistCourse = {
  id: string;
  title: string;
  channelName: string;
  playlistUrl: string;
  thumbnail: string;
  videoCount: number;
  totalDuration: string;
  progress: number;
  lastWatchedAt: string;
  currentLessonId: string;
  lessons: Lesson[];
};

export const playlistCourses: PlaylistCourse[] = [
  {
    id: "nextjs-14",
    title: "Next.js 14 Full Course",
    channelName: "Traversy Media",
    playlistUrl: "https://youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMHjMZ",
    thumbnail: "NX",
    videoCount: 42,
    totalDuration: "8h 24m",
    progress: 68,
    lastWatchedAt: "2 hours ago",
    currentLessonId: "l-12",
    lessons: [
      { id: "l-1", title: "Introduction to Next.js 14", duration: "12:04", completed: true },
      { id: "l-2", title: "Project Setup & App Router", duration: "18:32", completed: true },
      { id: "l-3", title: "Server Components Explained", duration: "22:15", completed: true },
      { id: "l-4", title: "Data Fetching Patterns", duration: "16:48", completed: true },
      { id: "l-5", title: "Route Handlers & API Routes", duration: "14:22", completed: true },
      { id: "l-6", title: "Middleware & Auth", duration: "19:55", completed: true },
      { id: "l-7", title: "Static & Dynamic Rendering", duration: "11:30", completed: true },
      { id: "l-8", title: "Image & Font Optimization", duration: "9:44", completed: true },
      { id: "l-9", title: "Layouts & Templates", duration: "13:18", completed: true },
      { id: "l-10", title: "Loading & Error States", duration: "10:02", completed: true },
      { id: "l-11", title: "Streaming & Suspense", duration: "15:36", completed: true },
      { id: "l-12", title: "Building a Full-Stack App", duration: "28:41", completed: false, current: true },
      { id: "l-13", title: "Deployment to Vercel", duration: "8:15", completed: false },
      { id: "l-14", title: "Performance Optimization", duration: "17:22", completed: false },
    ],
  },
  {
    id: "typescript-deep-dive",
    title: "TypeScript Deep Dive",
    channelName: "Fireship",
    playlistUrl: "https://youtube.com/playlist?list=PLTS9",
    thumbnail: "TS",
    videoCount: 28,
    totalDuration: "5h 12m",
    progress: 34,
    lastWatchedAt: "Yesterday",
    currentLessonId: "l-10",
    lessons: [
      { id: "l-1", title: "Why TypeScript?", duration: "8:12", completed: true },
      { id: "l-2", title: "Basic Types", duration: "14:30", completed: true },
      { id: "l-3", title: "Interfaces vs Types", duration: "11:45", completed: true },
      { id: "l-4", title: "Generics Fundamentals", duration: "19:08", completed: true },
      { id: "l-5", title: "Utility Types", duration: "16:22", completed: true },
      { id: "l-6", title: "Type Guards & Narrowing", duration: "13:55", completed: true },
      { id: "l-7", title: "Mapped Types", duration: "10:18", completed: true },
      { id: "l-8", title: "Conditional Types", duration: "15:40", completed: true },
      { id: "l-9", title: "Template Literal Types", duration: "9:33", completed: true },
      { id: "l-10", title: "Advanced Patterns", duration: "21:07", completed: false, current: true },
      { id: "l-11", title: "TypeScript with React", duration: "18:24", completed: false },
      { id: "l-12", title: "Strict Mode Config", duration: "7:56", completed: false },
    ],
  },
  {
    id: "system-design",
    title: "System Design for Developers",
    channelName: "ByteByteGo",
    playlistUrl: "https://youtube.com/playlist?list=PLBBG",
    thumbnail: "SD",
    videoCount: 35,
    totalDuration: "6h 48m",
    progress: 12,
    lastWatchedAt: "3 days ago",
    currentLessonId: "l-5",
    lessons: [
      { id: "l-1", title: "What is System Design?", duration: "10:22", completed: true },
      { id: "l-2", title: "Load Balancers", duration: "14:15", completed: true },
      { id: "l-3", title: "Caching Strategies", duration: "16:40", completed: true },
      { id: "l-4", title: "Database Sharding", duration: "18:55", completed: true },
      { id: "l-5", title: "Message Queues", duration: "13:30", completed: false, current: true },
      { id: "l-6", title: "Microservices Architecture", duration: "22:18", completed: false },
      { id: "l-7", title: "Design a URL Shortener", duration: "25:44", completed: false },
    ],
  },
  {
    id: "react-patterns",
    title: "React Design Patterns",
    channelName: "Jack Herrington",
    playlistUrl: "https://youtube.com/playlist?list=PLJH",
    thumbnail: "RP",
    videoCount: 18,
    totalDuration: "3h 36m",
    progress: 100,
    lastWatchedAt: "1 week ago",
    currentLessonId: "l-18",
    lessons: [
      { id: "l-1", title: "Compound Components", duration: "15:20", completed: true },
      { id: "l-2", title: "Render Props Pattern", duration: "12:45", completed: true },
      { id: "l-3", title: "Custom Hooks", duration: "18:30", completed: true },
      { id: "l-4", title: "Context + Reducer", duration: "21:15", completed: true },
      { id: "l-5", title: "State Machines", duration: "16:48", completed: true },
    ],
  },
];

export const dashboardStats = [
  { label: "Playlists", value: "4" },
  { label: "Videos Watched", value: "47" },
  { label: "Hours Learned", value: "12.4" },
  { label: "Current Streak", value: "5 days" },
];

export function getCourseById(id: string): PlaylistCourse | undefined {
  return playlistCourses.find((course) => course.id === id);
}

export function getContinueLearningCourse(): PlaylistCourse | undefined {
  return playlistCourses.find((c) => c.progress > 0 && c.progress < 100);
}
