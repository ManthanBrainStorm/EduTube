import { howItWorksSteps } from "@/data/nav-links";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-violet-400">How it works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            From playlist to course in seconds
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three steps. No setup. No browser extensions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {howItWorksSteps.map((item) => (
            <div key={item.step} className="group relative">
              <div className="surface p-6 transition-colors hover:border-violet-500/20">
                <span className="font-mono text-sm text-violet-400">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
