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
  sky: "bg-sky-50 text-sky-900 border-sky-200",
  amber: "bg-amber-50 text-amber-900 border-amber-200",
  blue: "bg-blue-50 text-blue-900 border-blue-200",
};

export default function ApproachComparisonTable({ rows, accent = "sky" }: Props) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div
        className={`grid grid-cols-3 ${headerColors[accent]} border-b ${headerColors[accent]}`}
      >
        <div className="px-5 py-3 text-sm font-semibold">과제 영역</div>
        <div className="px-5 py-3 text-sm font-semibold border-l border-slate-200">
          핵심 이슈
        </div>
        <div className="px-5 py-3 text-sm font-semibold border-l border-slate-200">
          왜 어려운가
        </div>
      </div>
      {rows.map((row, i) => {
        const Icon = row.icon;
        return (
          <div
            key={i}
            className={`grid grid-cols-3 ${
              i !== rows.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <div className="px-5 py-4 flex items-start gap-2">
              <Icon className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-slate-800">
                {row.area}
              </span>
            </div>
            <div className="px-5 py-4 text-sm text-slate-700 leading-relaxed border-l border-slate-200">
              {row.issue}
            </div>
            <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed border-l border-slate-200">
              {row.reason}
            </div>
          </div>
        );
      })}
    </div>
  );
}
