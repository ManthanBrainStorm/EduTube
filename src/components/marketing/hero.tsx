import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:px-6 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Learn anything,{" "}
          <span className="text-muted-foreground">anywhere</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          A modern learning platform to discover courses, track progress, and
          achieve your goals — built for learners and educators alike.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href={ROUTES.signup}>
              Start Learning Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={ROUTES.dashboard}>View Demo Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
