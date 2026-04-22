import type { LucideIcon } from "lucide-react";

type Accent = "sky" | "amber" | "blue";

type Row = {
  area: string;
  issue: string;
  reason: string;
  icon: LucideIcon;
};

type Props = {
  rows: Row[];
  accent?: Accent;
};

const headerColors: Record<Accent, string> = {
  sky: "border-cyan-500/25 bg-cyan-950/50 text-cyan-200",
  amber: "border-fuchsia-500/30 bg-fuchsia-950/40 text-fuchsia-200",
  blue: "border-cyan-500/35 bg-cyan-950/50 text-cyan-200",
};

export default function ApproachComparisonTable({ rows, accent = "sky" }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-cyan-500/20">
      <div
        className={`grid grid-cols-3 border-b border-cyan-500/20 ${headerColors[accent]}`}
      >
        <div className="px-5 py-3 text-sm font-semibold">과제 영역</div>
        <div className="border-l border-cyan-500/20 px-5 py-3 text-sm font-semibold">
          핵심 이슈
        </div>
        <div className="border-l border-cyan-500/20 px-5 py-3 text-sm font-semibold">
          왜 어려운가
        </div>
      </div>
      {rows.map((row, i) => {
        const Icon = row.icon;
        return (
          <div
            key={i}
            className={`grid grid-cols-3 bg-slate-900/20 ${
              i !== rows.length - 1 ? "border-b border-cyan-500/15" : ""
            }`}
          >
            <div className="flex items-start gap-2 px-5 py-4">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500/60" />
              <span className="text-sm font-medium text-slate-200">
                {row.area}
              </span>
            </div>
            <div className="border-l border-cyan-500/15 px-5 py-4 text-sm leading-relaxed text-slate-300">
              {row.issue}
            </div>
            <div className="border-l border-cyan-500/15 px-5 py-4 text-sm leading-relaxed text-slate-400">
              {row.reason}
            </div>
          </div>
        );
      })}
    </div>
  );
}
