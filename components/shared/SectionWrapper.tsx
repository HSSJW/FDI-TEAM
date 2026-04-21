import type { ReactNode } from "react";

type Props = {
  id: string;
  highlightedId: string | null;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  highlightedId,
  children,
  className = "",
}: Props) {
  const isHighlighted = highlightedId === id;
  return (
    <section
      id={`section-${id}`}
      data-section-id={id}
      className={`scroll-mt-24 transition-all rounded-r ${
        isHighlighted ? "highlight-active border-blue-600" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
