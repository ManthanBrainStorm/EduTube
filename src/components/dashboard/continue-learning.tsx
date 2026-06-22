import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PlaylistCourse } from "@/data/courses";
import { ROUTES } from "@/lib/constants";

type ContinueLearningProps = {
  course: PlaylistCourse;
};

export function ContinueLearning({ course }: ContinueLearningProps) {
  const currentLesson = course.lessons.find((l) => l.current);

  if (!currentLesson) return null;

  return (
    <div className="relative overflow-hidden rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-indigo-500/5 to-transparent p-6 glow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
            Continue learning
          </p>
          <h2 className="mt-1 text-lg font-semibold">{course.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Up next: {currentLesson.title}
          </p>
          <div className="mt-3 h-1.5 w-48 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        <Button asChild>
          <Link href={ROUTES.course(course.id)}>
            <Play className="mr-2 h-4 w-4" />
            Resume
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
