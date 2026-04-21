import {
  RefreshCw,
  Lock,
  Award,
  BookOpen,
  ExternalLink,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { PageId } from "@/lib/pages";

type Props = {
  highlightedId: string | null;
  onNavigate: (pageId: PageId) => void;
  onOpenChat: () => void;
};

const summary: { label: string; icon: LucideIcon }[] = [
  { label: "데이터 최신화", icon: RefreshCw },
  { label: "접근 통제", icon: Lock },
  { label: "품질 관리", icon: Award },
];

export default function ConclusionPage({
  highlightedId,
  onNavigate,
  onOpenChat,
}: Props) {
  return (
    <div>
      <PageHeader num={12} group="결론" title="왜 Wrapsody인가" />

      <SectionWrapper
        id="summary"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="grid grid-cols-3 gap-4">
          {summary.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white border border-slate-200 rounded-xl p-5 text-center float-hover"
              >
                <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-900">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">자동화</div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="one-and-only"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <div className="font-display text-7xl font-light mb-4">1</div>
          <div className="text-xs font-mono text-blue-200 uppercase tracking-widest mb-3">
            One &amp; Only Solution
          </div>
          <h3 className="font-display text-3xl font-medium mb-4">
            AI Data Infrastructure + Business-Ready Agent
          </h3>
          <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
            여러 시스템의 복잡한 연동이나 인력에 의존하는 수동 관리 없이,
            <br />
            데이터 최신화·접근 통제·품질 관리를 솔루션 하나에서 완벽하게
            자동화합니다.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="cta" highlightedId={highlightedId}>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => onNavigate("intro")}
            className="border border-slate-200 rounded-xl p-6 text-left transition-all float-hover bg-white"
          >
            <BookOpen className="w-5 h-5 text-blue-600 mb-3" />
            <div className="font-medium text-slate-900 mb-1">
              처음부터 다시 보기
            </div>
            <div className="text-sm text-slate-500">학습 여정을 다시 시작</div>
          </button>
          <a
            href="https://www.fasoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-200 rounded-xl p-6 text-left transition-all float-hover bg-white block"
          >
            <ExternalLink className="w-5 h-5 text-blue-600 mb-3" />
            <div className="font-medium text-slate-900 mb-1">
              Fasoo 자료 살펴보기
            </div>
            <div className="text-sm text-slate-500">
              공식 제품 페이지로 이동
            </div>
          </a>
          <button
            onClick={onOpenChat}
            className="border border-slate-200 rounded-xl p-6 text-left transition-all float-hover bg-white"
          >
            <MessageCircle className="w-5 h-5 text-blue-600 mb-3" />
            <div className="font-medium text-slate-900 mb-1">
              AI에게 더 물어보기
            </div>
            <div className="text-sm text-slate-500">남은 궁금증 해소하기</div>
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
