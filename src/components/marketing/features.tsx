import { BookOpen, Users, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Courses",
    description:
      "Browse a library of expertly crafted courses across development, design, and more.",
  },
  {
    icon: Zap,
    title: "Track Progress",
    description:
      "Monitor your learning journey with intuitive dashboards and progress indicators.",
  },
  {
    icon: Users,
    title: "Learn Together",
    description:
      "Join a community of learners and share knowledge with peers worldwide.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to learn
          </h2>
          <p className="mt-4 text-muted-foreground">
            Powerful features designed to make your learning experience seamless
            and enjoyable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-xl border bg-background p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
