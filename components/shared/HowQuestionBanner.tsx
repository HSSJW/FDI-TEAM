import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function HowQuestionBanner({ children }: Props) {
  return (
    <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
      <div className="font-display text-2xl mb-1 text-blue-300">
        &quot;그런데 어떻게?&quot;
      </div>
      <p className="text-slate-200 text-base leading-relaxed">{children}</p>
    </div>
  );
}
