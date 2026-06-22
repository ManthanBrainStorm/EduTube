"use client";

import { ArrowRight, CheckCircle2, Link2, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_PLAYLIST_URL, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TransformState = "idle" | "loading" | "done";

export function Hero() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<TransformState>("idle");

  function handleGenerate() {
    if (state === "loading") return;
    setState("loading");
    setTimeout(() => setState("done"), 1800);
  }

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-violet-400" />
            Turn any YouTube playlist into a course
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.1]">
            <span className="text-gradient">YouTube playlists,</span>
            <br />
            <span className="text-gradient-accent">structured for learning</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Paste a playlist URL. Get a clean course with lessons, progress
            tracking, and resume — built for students, developers, and
            self-learners.
          </p>

          <div className="mx-auto mt-10 max-w-xl">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste YouTube playlist URL..."
                  className="h-11 border-border/60 bg-secondary/50 pl-10 backdrop-blur-sm"
                />
              </div>
              <Button
                size="lg"
                className="h-11 glow-sm"
                onClick={handleGenerate}
                disabled={state === "loading"}
              >
                {state === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Try:{" "}
              <button
                type="button"
                onClick={() => setUrl(DEMO_PLAYLIST_URL)}
                className="text-violet-400 underline-offset-2 hover:underline"
              >
                demo playlist URL
              </button>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <TransformationMockup state={state} />
        </div>
      </div>
    </section>
  );
}

function TransformationMockup({ state }: { state: TransformState }) {
  const isDone = state === "done";
  const isLoading = state === "loading";

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-violet-500/20 via-transparent to-transparent" />
      <div className="surface relative overflow-hidden p-1 glow-sm">
        <div className="grid gap-1 md:grid-cols-2">
          {/* Before: YouTube playlist */}
          <div
            className={cn(
              "rounded-lg bg-secondary/30 p-4 transition-all duration-700 md:p-5",
              isDone && "opacity-40 md:scale-[0.98]"
            )}
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                YouTube Playlist
              </span>
            </div>
            <div className="space-y-2">
              {["Intro to React Hooks", "useState Deep Dive", "useEffect Patterns", "Custom Hooks", "Context API"].map(
                (title, i) => (
                  <div
                    key={title}
                    className={cn(
                      "flex items-center gap-3 rounded-md border border-border/40 bg-background/50 px-3 py-2 transition-all",
                      isLoading && "animate-pulse"
                    )}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="h-8 w-12 shrink-0 rounded bg-muted" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">{title}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {["12:04", "18:32", "22:15", "16:48", "14:22"][i]}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* After: Structured course */}
          <div
            className={cn(
              "rounded-lg bg-secondary/30 p-4 transition-all duration-700 md:p-5",
              !isDone && !isLoading && "opacity-30",
              isLoading && "opacity-60",
              isDone && "animate-morph-in opacity-100"
            )}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  EduTube Course
                </span>
              </div>
              {isDone && (
                <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-400">
                  5 lessons
                </span>
              )}
            </div>

            {isDone ? (
              <div className="space-y-2">
                <div className="mb-3 rounded-md border border-border/40 bg-background/50 p-3">
                  <p className="text-sm font-medium">React Hooks Masterclass</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    2 of 5 completed
                  </p>
                </div>
                {[
                  { title: "Intro to React Hooks", done: true },
                  { title: "useState Deep Dive", done: true },
                  { title: "useEffect Patterns", done: false, current: true },
                  { title: "Custom Hooks", done: false },
                  { title: "Context API", done: false },
                ].map((lesson, i) => (
                  <div
                    key={lesson.title}
                    className={cn(
                      "flex items-center gap-3 rounded-md border px-3 py-2 animate-slide-up",
                      lesson.current
                        ? "border-violet-500/40 bg-violet-500/5"
                        : "border-border/40 bg-background/50"
                    )}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {lesson.done ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                    ) : (
                      <div
                        className={cn(
                          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px]",
                          lesson.current
                            ? "border-violet-400 text-violet-400"
                            : "border-muted-foreground/40 text-muted-foreground"
                        )}
                      >
                        {i + 1}
                      </div>
                    )}
                    <p className="truncate text-xs font-medium">{lesson.title}</p>
                  </div>
                ))}
                <Button size="sm" className="mt-2 w-full" asChild>
                  <Link href={ROUTES.dashboard}>Open in Dashboard</Link>
                </Button>
              </div>
            ) : (
              <div className="flex h-full min-h-[200px] items-center justify-center">
                {isLoading ? (
                  <div className="text-center">
                    <Loader2 className="mx-auto h-6 w-6 animate-spin text-violet-400" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Structuring playlist...
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Click Generate to preview the transformation
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
