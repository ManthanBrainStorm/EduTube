import type { Metadata } from "next";

import { Features } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Learn anything, anywhere — a modern learning platform.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <section id="pricing" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight">Simple Pricing</h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade when you&apos;re ready.
          </p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div className="rounded-xl border p-8">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="mt-2 text-3xl font-bold">$0</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Access to basic courses and community features.
              </p>
            </div>
            <div className="rounded-xl border border-primary p-8 shadow-sm">
              <h3 className="text-lg font-semibold">Pro</h3>
              <p className="mt-2 text-3xl font-bold">$19/mo</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Unlimited courses, certificates, and priority support.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="border-t bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold tracking-tight">About EduTube</h2>
          <p className="mt-4 text-muted-foreground">
            EduTube is a SaaS starter built with Next.js 15, TypeScript, and
            shadcn/ui. It provides a clean foundation for building modern
            learning platforms.
          </p>
        </div>
      </section>
    </>
  );
}
