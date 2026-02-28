import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { getGuide, guideOrder, guideLabels, type GuideSlug, buildGuideSchema } from "@/lib/seo-guides";

interface GuidePageProps {
  slug: GuideSlug;
}

export function GuidePage({ slug }: GuidePageProps) {
  const guide = getGuide(slug);
  const relatedLinks = guideOrder.filter((item) => item !== slug);

  return (
    <main className="pt-20">
      {buildGuideSchema(guide).map((schema, index) => (
        <script
          key={`${guide.slug}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Section>
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-4">Guide</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-foreground leading-tight max-w-4xl">
          {guide.h1}
        </h1>
      </Section>

      <Section background="muted">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">What is the quick answer?</h2>
        <div className="mt-6 space-y-4 max-w-4xl">
          {guide.quickAnswer.map((paragraph) => (
            <p key={paragraph} className="text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-6 rounded-xl border border-border bg-surface-elevated/70 p-4 text-sm text-muted leading-relaxed max-w-4xl">
          {guide.entitySentence}
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl space-y-12">
          {guide.sections.map((section) => (
            <article key={section.question}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
                {section.question}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <article>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">
              How can you do this manually on Mac?
            </h2>
            <ol className="mt-5 space-y-3 text-muted list-decimal list-inside">
              {guide.manualMethod.map((item) => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ol>
          </article>

          <article>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">
              What are the manual method limitations?
            </h2>
            <ul className="mt-5 space-y-3 text-muted list-disc list-inside">
              {guide.manualLimitations.map((item) => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          How does Photiva help in practice?
        </h2>
        <ul className="mt-6 max-w-4xl space-y-3 text-muted list-disc list-inside">
          {guide.howPhotivaHelps.map((item) => (
            <li key={item} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </Section>

      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          <article>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">What are the pros?</h2>
            <ul className="mt-5 space-y-3 text-muted list-disc list-inside">
              {guide.pros.map((item) => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-foreground">What are the cons?</h2>
            <ul className="mt-5 space-y-3 text-muted list-disc list-inside">
              {guide.cons.map((item) => (
                <li key={item} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          What else do people ask about this topic?
        </h2>
        <div className="mt-6 max-w-4xl space-y-6">
          {guide.faqs.map((faq) => (
            <article key={faq.question} className="border-b border-border pb-6">
              <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-foreground">
                {faq.question}
              </h3>
              <p className="mt-2 text-muted leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">
          Which related Photiva guides should you read next?
        </h2>
        <ul className="mt-5 text-muted list-disc list-inside space-y-2">
          {relatedLinks.map((item) => (
            <li key={item}>
              <Link className="text-accent hover:underline" href={`/${item}`}>
                {guideLabels[item]}
              </Link>
            </li>
          ))}
          <li>
            <Link className="text-accent hover:underline" href="/">
              Photiva homepage and feature overview
            </Link>
          </li>
        </ul>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-surface/70 p-8 sm:p-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            Ready to clean up your Mac safely?
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Photiva finds exact duplicates and visually similar photos in minutes with rollback protection and no cloud uploads.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button as="a" href="/#pricing" size="lg">Try Photiva Free</Button>
            <Button as="a" href="/#how-it-works" size="lg" variant="secondary">See How It Works</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
