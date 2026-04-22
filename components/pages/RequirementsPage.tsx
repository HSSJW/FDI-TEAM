import { Layers, Award, Shield, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";

type Props = {
  highlightedId: string | null;
};

type PillarColor = "sky" | "amber" | "blue";

type Pillar = {
  icon: LucideIcon;
  label: string;
  desc: string;
  detail: string;
  color: PillarColor;
};

const pillars: Pillar[] = [
  {
    icon: Layers,
    label: "Quantity",
    desc: "기업 내의 유효한\n모든 데이터를",
    detail: "모든 부서의 데이터를\n업데이트 및 동기화하여\n통합 관리합니다.",
    color: "sky",
  },
  {
    icon: Award,
    label: "Quality",
    desc: "높은 수준의\n품질로",
    detail:
      "사용자가 도메인별 전문\n에이전트를 직접 커스텀하여\n고품질 결과물을 확보합니다.",
    color: "amber",
  },
  {
    icon: Shield,
    label: "Security",
    desc: "사용자의 권한에\n따라",
    detail:
      "사용자 권한 외부로,\nLLM 제공업체에도\n데이터가 유출되지 않습니다.",
    color: "blue",
  },
];

const colorMap: Record<PillarColor, string> = {
  sky: "border-cyan-500/30 bg-cyan-950/50 text-cyan-300",
  amber: "border-fuchsia-500/30 bg-fuchsia-950/45 text-fuchsia-200",
  blue: "border-cyan-500/35 bg-cyan-950/60 text-cyan-200",
};

export default function RequirementsPage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={7}
        group="분석 종합"
        title="AI Data Infrastructure의 세 가지 핵심 요건"
        subtitle="앞서 살펴본 세 과제는 결국 AI 데이터 인프라가 반드시 갖춰야 할 세 가지 요건으로 정리됩니다."
      />

      <SectionWrapper
        id="three-pillars"
        highlightedId={highlightedId}
        className="mb-16"
      >
        <div className="grid grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="border border-slate-600/50 rounded-2xl p-8 text-center float-hover bg-slate-900/50"
              >
                <div
                  className={`w-14 h-14 ${colorMap[p.color]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl font-bold text-slate-100 mb-3">
                  {p.label}
                </h3>
                <p className="text-slate-400 whitespace-pre-line leading-relaxed mb-4 text-sm">
                  {p.desc}
                </p>
                <div className="pt-4 border-t border-cyan-500/15">
                  <p className="text-slate-300 whitespace-pre-line leading-relaxed text-sm">
                    {p.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="synthesis" highlightedId={highlightedId}>
        <div className="neo-slab--lg text-center">
          <div className="neo-kicker mb-4">Synthesis</div>
          <h3 className="mb-4 font-display text-4xl font-bold tracking-tight">
            &quot;통합된 데이터를, 안전하게 제공하고 통제&quot;
          </h3>
          <p className="mx-auto max-w-2xl leading-relaxed text-cyan-100/90">
            세 요건은 따로 떨어진 것이 아니라 하나의 시스템에서 동시에
            만족되어야 합니다.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
