import {
  Smartphone,
  Zap,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";

type Props = {
  highlightedId: string | null;
};

type HubBlock = {
  icon: typeof RefreshCw;
  title: string;
  desc: string;
};

const hubBlocks: HubBlock[] = [
  {
    icon: RefreshCw,
    title: "데이터 최신화",
    desc: "Wrapsody가 자동 동기화한 최신 문서에 그대로 접근",
  },
  {
    icon: ShieldCheck,
    title: "접근 통제",
    desc: "ACL 기반 권한 검증으로 인가된 데이터만 노출",
  },
  {
    icon: Sparkles,
    title: "품질 향상",
    desc: "메타데이터·태그로 질의에 맞는 답변 품질 보장",
  },
  {
    icon: MessageCircle,
    title: "메신저",
    desc: "비즈니스 메신저 인터페이스로 언제 어디서나 질의",
  },
];

export default function FiresidePage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={11}
        group="해결 확장"
        title="Fireside"
        subtitle="Wrapsody의 모든 기능을 메신저 인터페이스로 품어, 사무실 밖에서도 동일한 AI 경험을 제공합니다."
      />

      <SectionWrapper
        id="concept"
        highlightedId={highlightedId}
        className="mb-8"
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <SubHeading accent="blue">개념</SubHeading>
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              비즈니스 메신저 + AI 메시징 허브
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-2">
              <p>Fireside는 비즈니스 메신저인 동시에 AI 메시징 허브입니다.</p>
              <p>
                Wrapsody의 모든 AI 에이전트 기능을 모바일 인터페이스로 그대로
                가져와, 외부 활동 중에도 스마트폰으로 질의할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 flex items-center justify-center">
            <Smartphone className="w-16 h-16 text-blue-600" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="integrated-hub"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <SubHeading accent="blue">통합 구조</SubHeading>
        <p className="text-slate-700 leading-relaxed mb-4">
          Fireside는 Wrapsody의 3대 기술(데이터 최신화·접근 통제·품질 향상)을
          그대로 품은 채 메신저 인터페이스를 더해 완성된 하나의 경험을
          제공합니다.
        </p>
        <div className="relative rounded-2xl border-2 border-blue-300 bg-blue-50/40 p-6 pt-10">
          <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full">
            Fireside
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hubBlocks.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white border border-blue-200 rounded-xl p-5 float-hover"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-display text-lg text-slate-900">
                      {b.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="mobile-extension"
        highlightedId={highlightedId}
        className="mb-8"
      >
        <div className="border border-slate-200 rounded-xl p-6 float-hover bg-white">
          <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-blue-600" />
            모바일 영역으로의 인터페이스 확장
          </h4>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                K-Assistant 등 기존 Wrapsody Agent를 메신저 환경으로 완벽 연계
              </span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>장소 제약 없이 언제 어디서나 AI 지식에 접근 가능</span>
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="open-api" highlightedId={highlightedId}>
        <div className="border border-slate-200 rounded-xl p-6 float-hover bg-white">
          <h4 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            개방형 API 연결 및 범용성
          </h4>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                기본 Agent 외 서드파티 AI Agent와도 채팅 인터페이스 연동 가능
              </span>
            </li>
            <li className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600 mt-1.5">•</span>
              <span>
                기업 내 모든 AI 시스템을 하나의 메신저로 연결하는 단일 창구
              </span>
            </li>
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
}
