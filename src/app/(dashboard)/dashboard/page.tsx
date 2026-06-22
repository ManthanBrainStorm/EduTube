import type { Metadata } from "next";

import { CourseCard } from "@/components/dashboard/course-card";
import { StatsCard } from "@/components/dashboard/stats-card";
import { dashboardStats, dummyCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your learning dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Welcome back, Jane
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of your learning progress.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">My Courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {dummyCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
