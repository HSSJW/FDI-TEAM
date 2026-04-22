import type { ReactNode } from "react";

type Accent = "blue" | "sky" | "amber" | "slate";

type Props = {
  children: ReactNode;
  accent?: Accent;
};

const colors: Record<Accent, string> = {
  /* 시안(제목/강조) */
  blue: "border-cyan-500/40 bg-cyan-950/45 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.12)]",
  /* blue와 동일 톤 — sky도 같은 팔레트로 통일 */
  sky: "border-cyan-500/40 bg-cyan-950/45 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.12)]",
  /* 보조 강조는 퍼플 쪽만 사용 */
  amber: "border-fuchsia-500/40 bg-fuchsia-950/35 text-fuchsia-200",
  slate: "border-slate-600/50 bg-slate-900/50 text-slate-200",
};

export default function SubHeading({ children, accent = "blue" }: Props) {
  return (
    <div
      className={`inline-block px-4 py-2 rounded-lg border ${colors[accent]} mb-5`}
    >
      <h2 className="font-display text-xl font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}
