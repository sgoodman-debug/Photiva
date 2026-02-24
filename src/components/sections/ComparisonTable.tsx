"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { comparisonRows } from "@/lib/constants";

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </span>
    );
  }
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function ComparisonTable() {
  return (
    <Section id="comparison" background="muted">
      <div className="text-center mb-14">
        <FadeIn>
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            Compare
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Photiva vs. the rest
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-left font-medium text-muted">Feature</th>
                <th className="py-4 px-4 text-center font-semibold text-accent">
                  Photiva
                </th>
                <th className="py-4 px-4 text-center font-medium text-muted">
                  Subscription Apps
                </th>
                <th className="py-4 pl-4 text-center font-medium text-muted">
                  Free Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-3.5 pr-4 text-foreground">{row.feature}</td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.photiva} />
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.subscriptionApps} />
                    </div>
                  </td>
                  <td className="py-3.5 pl-4 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.freeTools} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Section>
  );
}
