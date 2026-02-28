interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "accent";
}

const bgClasses = {
  default: "",
  muted: "bg-surface",
  accent: "bg-accent/5",
};

export function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 md:py-20 ${bgClasses[background]} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">{children}</div>
    </section>
  );
}
