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
  sky: "text-sky-600 bg-sky-50",
  amber: "text-amber-600 bg-amber-50",
  blue: "text-blue-600 bg-blue-50",
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="border border-slate-200 rounded-2xl p-6 sm:p-8 text-center float-hover bg-white"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${colorMap[p.color]} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-slate-900 mb-3">
                  {p.label}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm whitespace-normal sm:whitespace-pre-line">
                  {p.desc}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-slate-700 leading-relaxed text-sm whitespace-normal sm:whitespace-pre-line">
                    {p.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="synthesis" highlightedId={highlightedId}>
        <div className="bg-blue-600 text-white rounded-2xl p-6 sm:p-10 lg:p-12 text-center">
          <div className="text-xs font-mono text-blue-200 uppercase tracking-widest mb-4">
            Synthesis
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4 break-keep">
            &quot;통합된 데이터를, 안전하게 제공하고 통제&quot;
          </h3>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto break-keep">
            세 요건은 따로 떨어진 것이 아니라 하나의 시스템에서 동시에
            만족되어야 합니다.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
