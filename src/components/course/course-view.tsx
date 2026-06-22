"use client";

import { CheckCircle2, Play } from "lucide-react";

import type { Lesson, PlaylistCourse } from "@/data/courses";
import { cn } from "@/lib/utils";

type CourseViewProps = {
  course: PlaylistCourse;
};

export function CourseView({ course }: CourseViewProps) {
  const currentLesson =
    course.lessons.find((l) => l.current) ?? course.lessons[0];
  const completedCount = course.lessons.filter((l) => l.completed).length;

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Header bar */}
      <div className="shrink-0 border-b border-border/40 px-4 py-3 lg:px-6">
        <h1 className="truncate text-sm font-semibold">{course.title}</h1>
        <p className="text-xs text-muted-foreground">
          {course.channelName} · {completedCount}/{course.lessons.length} lessons
          · {course.progress}% complete
        </p>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* Video player */}
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="relative aspect-video w-full bg-black">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform hover:scale-105">
                <Play className="h-7 w-7 fill-white text-white" />
              </div>
              <p className="mt-4 max-w-md px-4 text-center text-sm text-zinc-400">
                {currentLesson.title}
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Video plays on YouTube — placeholder player
              </p>
            </div>
          </div>

          <div className="border-b border-border/40 p-4 lg:p-6">
            <h2 className="text-lg font-semibold">{currentLesson.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Lesson{" "}
              {course.lessons.findIndex((l) => l.id === currentLesson.id) + 1}{" "}
              of {course.lessons.length} · {currentLesson.duration}
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Lesson sidebar */}
        <aside className="flex w-full shrink-0 flex-col border-t border-border/40 lg:w-[340px] lg:border-l lg:border-t-0">
          <div className="shrink-0 border-b border-border/40 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Lessons
            </p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {course.lessons.map((lesson, index) => (
              <LessonItem key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function LessonItem({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center gap-3 border-b border-border/20 px-4 py-3 text-left transition-colors hover:bg-secondary/50",
        lesson.current && "bg-violet-500/5 border-l-2 border-l-violet-500"
      )}
    >
      {lesson.completed ? (
        <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
      ) : (
        <span
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-medium",
            lesson.current
              ? "bg-violet-500 text-white"
              : "bg-secondary text-muted-foreground"
          )}
        >
          {index + 1}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-sm",
            lesson.current ? "font-medium text-foreground" : "text-foreground/80"
          )}
        >
          {lesson.title}
        </p>
        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
      </div>
      {lesson.current && (
        <Play className="h-3.5 w-3.5 shrink-0 text-violet-400" />
      )}
    </button>
  );
}
