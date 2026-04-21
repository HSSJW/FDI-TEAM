import type { ReactNode } from "react";

type Accent = "blue" | "sky" | "amber" | "slate";

type Props = {
  children: ReactNode;
  accent?: Accent;
};

const colors: Record<Accent, string> = {
  blue: "bg-blue-50 text-blue-900 border-blue-200",
  sky: "bg-sky-50 text-sky-900 border-sky-200",
  amber: "bg-amber-50 text-amber-900 border-amber-200",
  slate: "bg-slate-100 text-slate-900 border-slate-200",
};

export default function SubHeading({ children, accent = "blue" }: Props) {
  return (
    <div
      className={`inline-block px-4 py-2 rounded-lg border ${colors[accent]} mb-5`}
    >
      <h2 className="font-display text-xl font-semibold tracking-tight">
        {children}
      </h2>
    </div>
  );
}
