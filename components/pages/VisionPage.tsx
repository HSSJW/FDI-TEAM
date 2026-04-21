import {
  Database,
  ArrowRight,
  Layers,
  Zap,
  Users,
  DollarSign,
  Package,
  ClipboardList,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";

type Props = {
  highlightedId: string | null;
};

export default function VisionPage({ highlightedId }: Props) {
  const dbs = [
    { name: "HR DB", data: ["인사 규정 · 채용 이력"] },
    { name: "재무 DB", data: ["예산 자료 · 결산 보고서"] },
    { name: "영업 DB", data: ["고객 정보 · 제안서"] },
    { name: "품질 DB", data: ["품질 지침 · 테스트 리포트"] },
  ];
  const agents = [
    { name: "HR Agent", icon: Users },
    { name: "재무 Agent", icon: DollarSign },
    { name: "영업 Agent", icon: Package },
    { name: "품질 Agent", icon: ClipboardList },
  ];
  const benefits = [
    { icon: Zap, label: "속도", desc: "API 연계만으로 즉시 도입" },
    { icon: Database, label: "비용", desc: "중복 데이터셋 구축 불필요" },
    { icon: Layers, label: "확장성", desc: "신규 에이전트 무제한 추가" },
  ];
  return (
    <div>
      <PageHeader
        num={3}
        group="문제 정의"
        title="통합 인프라의 필요성"
        subtitle="한 번 잘 구축한 데이터 인프라 위에 어떤 AI 에이전트든 즉시 연결할 수 있어야 합니다."
      />

      <SectionWrapper
        id="as-is"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="border border-slate-200 rounded-xl p-8 bg-[#fafaf9]">
          <div className="text-xs text-slate-400 mb-1 tracking-wide">AS-IS</div>
          <h3 className="font-display text-2xl text-slate-900 mb-8">
            개별 데이터셋 구축
          </h3>

          <div className="grid grid-cols-4 gap-3 mb-2">
            {dbs.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm"
              >
                <Database className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-slate-800 mb-1">
                  {item.name}
                </div>
                {item.data.map((d) => (
                  <div key={d} className="text-xs text-slate-500">
                    {d}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3 mb-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-px h-8 border-l-2 border-dashed border-slate-300" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.name}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm"
                >
                  <Icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-slate-800">
                    {agent.name}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-sm text-slate-500 text-center font-medium">
            중복 투자 및 도입 시간 지연
          </p>
        </div>
      </SectionWrapper>

      <div className="flex justify-center mb-12">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <ArrowRight className="w-5 h-5 text-white rotate-90" />
        </div>
      </div>

      <SectionWrapper
        id="to-be"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="bg-blue-600 text-white rounded-xl p-8">
          <div className="text-xs font-mono text-blue-200 mb-2">TO-BE</div>
          <h3 className="font-display text-2xl mb-6">
            통합 AI Data Infrastructure
          </h3>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6 text-center">
            <Layers className="w-8 h-8 text-blue-100 mx-auto mb-2" />
            <div className="text-sm font-medium">전사 AI Data Infrastructure</div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.name}
                  className="bg-white/10 backdrop-blur rounded-lg p-3 text-center"
                >
                  <Icon className="w-6 h-6 text-blue-100 mx-auto mb-1" />
                  <div className="text-xs text-blue-50">{agent.name}</div>
                </div>
              );
            })}
          </div>
          <p className="text-sm text-blue-100 text-center">
            어떤 AI라도 즉각적인 맞춤형 도입
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="transition-benefit" highlightedId={highlightedId}>
        <div className="grid grid-cols-3 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="border border-slate-200 rounded-lg p-6 float-hover"
              >
                <Icon className="w-5 h-5 text-blue-600 mb-3" />
                <div className="font-medium text-slate-900 mb-1">{item.label}</div>
                <div className="text-sm text-slate-600">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
