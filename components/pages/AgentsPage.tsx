import { Sparkles, Library, Cpu, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ImageCarousel from "@/components/shared/ImageCarousel";
import { carouselCaptures, type AgentId } from "@/lib/captures";

type Props = {
  highlightedId: string | null;
};

type Agent = {
  id: AgentId;
  icon: LucideIcon;
  name: string;
  subtitle: string;
  desc: string;
  bullets: string[];
};

const agents: Agent[] = [
  {
    id: "k-assistant",
    icon: Sparkles,
    name: "Wrapsody K-Assistant",
    subtitle: "전사 지식 기반 어시스턴트",
    desc: "기업이 보유한 방대한 핵심 지식 데이터에 실시간으로 접근하여 업무를 어시스트하는 AI 비서입니다.",
    bullets: [
      "기업 내 축적된 방대한 지식 데이터베이스를 근간으로 동작",
      "최신화된 실시간 데이터 연동을 통해 빠른 업무 처리 지원",
      "실무진의 반복 업무와 경영진의 의사결정을 동시에 보조",
    ],
  },
  {
    id: "librarian",
    icon: Library,
    name: "Wrapsody Librarian",
    subtitle: "지능형 문서 사서",
    desc: "흩어져 있는 사내 문서 라이브러리를 주제별로 체계화하고, 사용자의 의도에 맞춰 정확하게 문서를 찾아주는 지능형 사서입니다.",
    bullets: [
      "여러 시스템에 파편화된 사내 문서를 통합 검색",
      "주제·속성·메타데이터 기반으로 자동 분류",
      "사용자의 검색 의도를 정밀 파악해 최적의 문서를 즉시 제시",
    ],
  },
  {
    id: "domain-master",
    icon: Cpu,
    name: "Domain Knowledge Master",
    subtitle: "특화 지식 마스터",
    desc: "특정 부서나 프로젝트 등 도메인 특화 지식에 기반한 AI Agent를 제공합니다.",
    bullets: [
      "특정 도메인(특허·품질 등)에 정통한 전문가 봇을 직접 생성",
      "기반 지식의 최신화를 걱정할 필요 없음",
      "권한 없는 사용자의 사용 우려를 근본적으로 해결",
    ],
  },
];

export default function AgentsPage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={10}
        group="해결 적용"
        title="Business-Ready AI Agents"
        subtitle="Wrapsody 위에서 동작하는 세 가지 AI 에이전트로 다양한 업무를 자동화합니다."
      />

      <SectionWrapper
        id="agents-overview"
        highlightedId={highlightedId}
        className="mb-16"
      >
        <div className="grid grid-cols-3 gap-4">
          {agents.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.id}
                className="border border-slate-600/50 rounded-xl p-6 bg-slate-900/50 float-hover"
              >
                <Icon className="w-6 h-6 text-cyan-400 mb-3" />
                <div className="font-display text-lg font-bold text-slate-100 mb-1">
                  {a.name}
                </div>
                <div className="text-xs text-slate-500 mb-3">{a.subtitle}</div>
                <p className="text-sm text-slate-300 leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {agents.map((a) => {
        const Icon = a.icon;
        return (
          <div key={a.id} className="mb-16">
            <SectionWrapper
              id={a.id}
              highlightedId={highlightedId}
              className="mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-950/30 rounded-lg flex items-center justify-center border border-cyan-500/25">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-100">
                    {a.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-mono">
                    {a.subtitle}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mb-6 ml-1">
                {a.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-300 leading-relaxed"
                  >
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </SectionWrapper>
            <SectionWrapper id={`${a.id}-demo`} highlightedId={highlightedId}>
              <div className="max-w-2xl">
                <ImageCarousel
                  images={carouselCaptures[a.id]}
                  ariaLabel={`${a.name} 실행 캡쳐`}
                />
              </div>
            </SectionWrapper>
          </div>
        );
      })}

      <SectionWrapper id="real-cases" highlightedId={highlightedId}>
        <div className="bg-cyan-950/25 border border-cyan-500/20 rounded-xl p-8 float-hover">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            실제 사례
          </div>
          <div className="font-display text-3xl font-bold text-slate-100 mb-2">
            파수 사내에서 <span className="text-cyan-400">44개</span>의 에이전트
            운영 중
          </div>
          <p className="text-slate-300">
            영업 마스터, 제품 가이드 마스터 등 다양한 도메인에서 활발히 활용되고
            있습니다.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
