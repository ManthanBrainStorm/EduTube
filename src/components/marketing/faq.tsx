import { faqs } from "@/data/nav-links";

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-sm font-medium text-violet-400">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group surface [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-medium">
                {faq.question}
                <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-border/40 px-5 pb-5 pt-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
