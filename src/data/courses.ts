export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  progress: number;
  category: string;
};

export const dummyCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
    instructor: "Sarah Chen",
    duration: "12 hours",
    lessons: 24,
    progress: 65,
    category: "Development",
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    description:
      "Master design principles, wireframing, and prototyping for delightful user experiences.",
    instructor: "Marcus Rivera",
    duration: "8 hours",
    lessons: 16,
    progress: 30,
    category: "Design",
  },
  {
    id: "3",
    title: "Data Science with Python",
    description:
      "Explore data analysis, visualization, and machine learning with Python libraries.",
    instructor: "Dr. Emily Watson",
    duration: "20 hours",
    lessons: 32,
    progress: 0,
    category: "Data Science",
  },
  {
    id: "4",
    title: "Digital Marketing Essentials",
    description:
      "Understand SEO, content strategy, and social media to grow your online presence.",
    instructor: "James Park",
    duration: "6 hours",
    lessons: 12,
    progress: 100,
    category: "Marketing",
  },
];

export const dashboardStats = [
  { label: "Courses Enrolled", value: "4" },
  { label: "Hours Learned", value: "28" },
  { label: "Certificates", value: "1" },
  { label: "Current Streak", value: "7 days" },
];

export function getCourseById(id: string): Course | undefined {
  return dummyCourses.find((course) => course.id === id);
}
