import type { Metadata } from "next";

import { ContinueLearning } from "@/components/dashboard/continue-learning";
import { ImportBar } from "@/components/dashboard/import-bar";
import { PlaylistCard } from "@/components/dashboard/playlist-card";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  dashboardStats,
  getContinueLearningCourse,
  playlistCourses,
} from "@/data/courses";

export const metadata: Metadata = {
  title: "Library",
  description: "Your imported YouTube playlists.",
};

export default function DashboardPage() {
  const continueCourse = getContinueLearningCourse();

  return (
    <div className="mx-auto max-w-6xl space-y-8 p-4 md:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Library</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Imported playlists and learning progress
        </p>
      </div>

      <ImportBar />

      {continueCourse && <ContinueLearning course={continueCourse} />}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-sm font-medium text-muted-foreground">
          All Playlists
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {playlistCourses.map((course) => (
            <PlaylistCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
