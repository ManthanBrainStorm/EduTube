import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { CourseView } from "@/components/course/course-view";
import { Button } from "@/components/ui/button";
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
    description: `${course?.channelName} — ${course?.videoCount} videos`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="relative h-full">
      <div className="absolute left-4 top-4 z-10 lg:left-6 lg:top-4">
        <Button
          variant="outline"
          size="sm"
          className="border-border/60 bg-background/80 backdrop-blur-sm"
          asChild
        >
          <Link href={ROUTES.dashboard}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Library
          </Link>
        </Button>
      </div>
      <CourseView course={course} />
    </div>
  );
}
