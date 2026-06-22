import type { Metadata } from "next";

import { FAQ } from "@/components/marketing/faq";
import { Features } from "@/components/marketing/features";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";

export const metadata: Metadata = {
  title: "Turn YouTube Playlists into Courses",
  description:
    "Paste any YouTube playlist URL and get a structured course with progress tracking.",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
    </>
  );
}
