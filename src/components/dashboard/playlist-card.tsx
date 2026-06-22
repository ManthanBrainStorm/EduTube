import Link from "next/link";
import { Clock, Play, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PlaylistCourse } from "@/data/courses";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlaylistCardProps = {
  course: PlaylistCourse;
};

export function PlaylistCard({ course }: PlaylistCardProps) {
  const currentLesson = course.lessons.find((l) => l.current);
  const isComplete = course.progress === 100;

  return (
    <div className="group surface overflow-hidden transition-colors hover:border-violet-500/20">
      <div className="flex items-start gap-4 p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-indigo-500/20 font-mono text-sm font-bold text-violet-300">
          {course.thumbnail}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">{course.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {course.channelName}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Video className="h-3 w-3" />
              {course.videoCount} videos
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {course.totalDuration}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 px-5 py-4">
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {isComplete ? "Completed" : `${course.progress}% complete`}
          </span>
          <span className="text-muted-foreground">{course.lastWatchedAt}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
          <div
            className={cn(
              "h-full rounded-full transition-all",
              isComplete
                ? "bg-emerald-500"
                : "bg-gradient-to-r from-violet-500 to-indigo-500"
            )}
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <Button
          variant={isComplete ? "outline" : "default"}
          size="sm"
          className="mt-4 w-full"
          asChild
        >
          <Link href={ROUTES.course(course.id)}>
            <Play className="mr-2 h-3.5 w-3.5" />
            {isComplete
              ? "Review Course"
              : currentLesson
                ? "Resume Learning"
                : "Start Course"}
          </Link>
        </Button>
      </div>
    </div>
  );
}
