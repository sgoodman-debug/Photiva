"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/animations/FadeIn";
import { comparisonRows } from "@/lib/constants";

function CellValue({ value, emphasize = false }: { value: "Yes" | "Partial" | "No"; emphasize?: boolean }) {
  if (value === "Yes") {
    return (
      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${emphasize ? "bg-accent/15 text-accent" : "bg-emerald-500/10 text-emerald-400"}`}>
        Yes
      </span>
    );
  }
  if (value === "Partial") {
    return (
      <span className="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold bg-amber-500/10 text-amber-400">
        Partial
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold bg-muted-foreground/10 text-muted-foreground">
      No
    </span>
  );
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
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] text-foreground">
            Photiva vs Subscription Apps and Free Tools
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
                      <CellValue value={row.photiva} emphasize />
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
