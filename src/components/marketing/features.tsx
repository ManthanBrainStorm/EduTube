import { features } from "@/data/nav-links";

export function Features() {
  return (
    <section id="features" className="border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-violet-400">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Built for how you actually learn
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not another LMS. A focused tool for YouTube learners.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="surface group p-6 transition-colors hover:border-violet-500/20"
            >
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
