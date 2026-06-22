import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCourseById } from "@/data/courses";
import { ROUTES } from "@/lib/constants";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);

  return {
    title: course?.title ?? "Course",
    description: course?.description,
  };
}

const dummyLessons = [
  { id: "1", title: "Getting Started", duration: "12 min", completed: true },
  { id: "2", title: "Core Concepts", duration: "18 min", completed: true },
  { id: "3", title: "Hands-on Practice", duration: "25 min", completed: false },
  { id: "4", title: "Advanced Topics", duration: "30 min", completed: false },
  { id: "5", title: "Final Project", duration: "45 min", completed: false },
];

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Button variant="ghost" size="sm" asChild>
        <Link href={ROUTES.dashboard}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      <div>
        <div className="mb-2 inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
          {course.category}
        </div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {course.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{course.description}</p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {course.instructor}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {course.lessons} lessons
          </span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>
            You&apos;ve completed {course.progress}% of this course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Lessons</h2>
        <div className="rounded-xl border">
          {dummyLessons.map((lesson, index) => (
            <div key={lesson.id}>
              <div className="flex items-center justify-between px-4 py-4 md:px-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                      lesson.completed
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-medium">{lesson.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {lesson.duration}
                    </p>
                  </div>
                </div>
                <Button variant={lesson.completed ? "outline" : "default"} size="sm">
                  {lesson.completed ? "Review" : "Start"}
                </Button>
              </div>
              {index < dummyLessons.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
