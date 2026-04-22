import {
  Bot,
  Shield,
  AlertCircle,
  Users,
  DollarSign,
  Package,
  ClipboardList,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";

type Props = {
  highlightedId: string | null;
};

export default function ChallengePage({ highlightedId }: Props) {
  const agents = [
    { name: "HR Agent", icon: Users, data: ["인사 규정", "채용 이력"] },
    { name: "재무 Agent", icon: DollarSign, data: ["예산 자료", "결산 보고서"] },
    { name: "영업 Agent", icon: Package, data: ["고객 정보", "제안서"] },
    { name: "품질 Agent", icon: ClipboardList, data: ["품질 지침", "테스트 리포트"] },
  ];
  return (
    <div>
      <PageHeader
        num={2}
        group="문제 제기"
        title="기업 AI 도입의 현실"
        subtitle="AI 시스템을 단순히 도입하는 것만으로는 기업 환경에서 효과적으로 사용할 수 없습니다."
      />

      <SectionWrapper
        id="public-vs-enterprise"
        highlightedId={highlightedId}
        className="mb-16"
      >
        <SubHeading accent="blue">퍼블릭 AI vs 기업용 AI</SubHeading>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-slate-600/50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-5 h-5 text-slate-400" />
              <span className="text-sm font-medium text-slate-500">퍼블릭 도메인</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">
              ChatGPT 같은 서비스
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">
              공공 도메인의 정보를 검색해 답변을 제공합니다.
            </p>
            <p className="text-slate-300 leading-relaxed text-base mt-2">
              인터넷에 공개된 모든 지식이 학습 대상이 됩니다.
            </p>
          </div>
          <div className="neo-slab--md">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="neo-icon h-5 w-5" />
              <span className="text-sm font-medium text-cyan-100/90">기업 환경</span>
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold">내부 데이터 기반 AI</h3>
            <p className="neo-on-slab text-base leading-relaxed">
              기업 내부의 기밀 및 고유 데이터를 기반으로 결과물을 도출해야 합니다.
            </p>
            <p className="mt-2 text-base leading-relaxed text-cyan-50/90">
              따라서 퍼블릭 AI를 그대로 사용하는 것은 불가능합니다.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="data-feeding"
        highlightedId={highlightedId}
        className="mb-16"
      >
        <div className="bg-slate-900/40 border border-slate-600/50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-xl font-bold text-slate-100 mb-3">
                데이터 피딩의 중요성
              </h3>
              <div className="text-slate-300 leading-relaxed space-y-2">
                <p>
                  AI 모델의 성능이 아무리 우수하더라도, 모델에 공급되는 데이터의
                  품질이 낮으면 기업 내에서 활용 가능한 결과물을 얻을 수
                  없습니다.
                </p>
                <p className="text-cyan-300 font-medium">
                  결국 &apos;어떤 모델을 쓰느냐&apos;보다 &apos;어떤 데이터를
                  주느냐&apos;가 더 중요합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="per-dept-problem" highlightedId={highlightedId}>
        <SubHeading accent="blue">부서별 개별 도입의 문제점</SubHeading>
        <div className="space-y-2 mb-6 text-slate-300 leading-relaxed">
          <p>
            인사·경영지원·재무 등 각 부서가 개별 AI 에이전트를 도입하면,
            에이전트마다 데이터셋을 별도로 작업해야 합니다.
          </p>
          <p>
            에이전트 수에 비례해 데이터 가공·투입 공수가 중복 발생하며,
            비효율이 극대화됩니다.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {agents.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.name}
                className="border border-slate-600/50 rounded-lg p-4 text-center"
              >
                <Icon className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-200 mb-2">
                  {agent.name}
                </div>
                <div className="space-y-0.5">
                  {agent.data.map((d) => (
                    <div key={d} className="text-xs text-slate-500">
                      · {d}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
