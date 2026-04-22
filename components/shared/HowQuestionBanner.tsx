import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function HowQuestionBanner({ children }: Props) {
  return (
    <div className="rounded-xl border border-fuchsia-500/30 bg-slate-900/80 p-8 text-center text-white shadow-neon-fuchsia">
      <div className="mb-1 font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
        &quot;그런데 어떻게?&quot;
      </div>
      <p className="text-base leading-relaxed text-slate-300">{children}</p>
    </div>
  );
}
