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
        <div className="rounded-xl border border-fuchsia-500/20 bg-slate-950/85 p-8 shadow-[inset_0_0_0_1px_rgba(192,38,211,0.12),0_0_40px_-20px_rgba(0,0,0,0.6)]">
          <div className="mb-1 font-mono text-xs uppercase tracking-widest text-fuchsia-300/80">
            AS-IS
          </div>
          <h3 className="mb-8 font-display text-2xl font-bold text-slate-100">
            개별 데이터셋 구축
          </h3>

          <div className="mb-2 grid grid-cols-4 gap-3">
            {dbs.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-cyan-500/15 bg-slate-900/50 p-4 text-center"
              >
                <Database className="neo-schematic-icon mx-auto mb-2 h-6 w-6" />
                <div className="mb-1 text-sm font-semibold text-slate-200">
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

          <div className="mb-2 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-8 w-px border-l-2 border-dashed border-fuchsia-500/30" />
              </div>
            ))}
          </div>

          <div className="mb-6 grid grid-cols-4 gap-3">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.name}
                  className="rounded-xl border border-fuchsia-500/20 bg-slate-900/50 p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 h-6 w-6 text-fuchsia-400/60" />
                  <div className="text-sm font-semibold text-slate-200">
                    {agent.name}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm font-medium text-fuchsia-200/60">
            중복 투자 및 도입 시간 지연
          </p>
        </div>
      </SectionWrapper>

      <div className="flex justify-center mb-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950/60 shadow-neon-cyan">
          <ArrowRight className="h-5 w-5 rotate-90 text-cyan-200" />
        </div>
      </div>

      <SectionWrapper
        id="to-be"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="neo-slab--md">
          <div className="neo-kicker mb-2">TO-BE</div>
          <h3 className="mb-6 font-display text-2xl font-bold">통합 AI Data Infrastructure</h3>
          <div className="mb-6 rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm">
            <Layers className="neo-icon mx-auto mb-2 h-8 w-8" />
            <div className="text-sm font-bold">전사 AI Data Infrastructure</div>
          </div>
          <div className="mb-4 grid grid-cols-4 gap-3">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <div
                  key={agent.name}
                  className="rounded-lg bg-white/5 p-3 text-center backdrop-blur-sm"
                >
                  <Icon className="neo-icon mx-auto mb-1 h-6 w-6" />
                  <div className="neo-on-slab text-xs">{agent.name}</div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-cyan-100/90">
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
                className="border border-slate-600/50 rounded-lg p-6 float-hover"
              >
                <Icon className="w-5 h-5 text-cyan-400 mb-3" />
                <div className="font-bold text-slate-100 mb-1">{item.label}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
