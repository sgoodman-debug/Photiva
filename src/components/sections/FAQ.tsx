"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { faqs } from "@/lib/constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer group"
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span className="text-base font-medium text-foreground group-hover:text-pink transition-colors pr-4">
          {question}
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="shrink-0 text-muted"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>
      <motion.div
        id={answerId}
        initial={false}
        animate={{
          maxHeight: open ? 240 : 0,
          opacity: open ? 1 : 0.72,
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
        aria-hidden={!open}
      >
        <p className="pb-5 text-sm text-muted leading-relaxed pr-8">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <Section id="faq">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            FAQ
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            Frequently asked questions
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mx-auto max-w-2xl">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
