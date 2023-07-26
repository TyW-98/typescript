import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
}

export default function Section({
  children,
  title = "Section title",
}: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
