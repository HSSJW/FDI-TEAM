import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import AutoImageCarousel from "@/components/shared/AutoImageCarousel";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";
import type { PageId } from "@/lib/pages";
import type { CarouselImage } from "@/lib/types";

type Props = {
  highlightedId: string | null;
  onNavigate: (pageId: PageId) => void;
  onAskQuestion: (question: string) => void;
};

const sitePhotos: CarouselImage[] = [
  {
    src: "/site-photos/1.png",
    alt: "FDI 2026 Symposium 타이틀 - Sustainable AI Transformation",
  },
  {
    src: "/site-photos/2.jpg",
    alt: "Fasoo CEO Sustainable AI Transformation 기조 발표",
  },
  {
    src: "/site-photos/3.jpg",
    alt: "AI Data Infrastructure 구축 전략 발표 장면",
  },
  {
    src: "/site-photos/4.jpg",
    alt: "Wrapsody Business-Ready AI Agents 3종 소개 슬라이드",
  },
  {
    src: "/site-photos/5.jpg",
    alt: "Wrapsody K-Assistant 시연 장면",
  },
  {
    src: "/site-photos/6.jpg",
    alt: "Wrapsody Librarian 시연 장면",
  },
];

export default function IntroPage({
  highlightedId,
  onNavigate,
  onAskQuestion,
}: Props) {
  return (
    <div>
      <div className="relative -mx-12 -mt-12 px-12 pt-12 pb-10 mb-6 grid-bg">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-8">
            <Sparkles className="w-3 h-3" />
            FDI 2026 Symposium · Track 5
          </div>
          <h1 className="font-display text-7xl font-medium text-slate-900 tracking-tight leading-[1.05] mb-6">
            Building
            <br />
            <span className="text-blue-600">AI Data Infrastructure</span>
          </h1>
          <p className="text-2xl font-display text-slate-700 leading-snug max-w-2xl mb-10 italic">
            &quot;ChatGPT는 똑똑한데,
            <br />왜 우리 회사 일은 못 도와줄까?&quot;
          </p>
          <button
            onClick={() => onNavigate("challenge")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
          >
            학습 시작하기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="mb-16">
        <AutoImageCarousel
          images={sitePhotos}
          intervalMs={4000}
          ariaLabel="FDI 2026 Symposium 현장 사진"
        />
      </div>

      <SectionWrapper id="chat-tutorial" highlightedId={highlightedId}>
        <div className="bg-blue-50/40 border border-blue-100 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-medium text-slate-900 mb-2">
                AI 가이드에게 물어보세요
              </h3>
              <div className="text-slate-700 leading-relaxed space-y-2">
                <p>우측 하단의 챗봇을 클릭해 자유롭게 질문할 수 있습니다.</p>
                <p>
                  AI 가이드는{" "}
                  <span className="font-medium text-blue-700">
                    관련 페이지로 자동 이동
                  </span>
                  시켜 주고,
                  <span className="font-medium text-blue-700">
                    {" "}
                    핵심 부분을 강조
                  </span>
                  해 안내합니다.
                </p>
                <p className="text-sm text-slate-500">
                  원하는 주제만 빠르게 학습하거나, 궁금한 점이 생기면 언제든
                  질문해 보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-2 ml-14">
            <div className="text-xs font-mono text-blue-600 mb-1">예시 질문</div>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => onAskQuestion(q)}
                className="text-left px-4 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all flex items-center justify-between group"
              >
                <span className="text-sm text-slate-700">{q}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="session-info"
        highlightedId={highlightedId}
        className="mt-12"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="relative mx-auto w-full max-w-[220px] shrink-0 lg:mx-0">
              <div
                className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-blue-100/70 via-blue-50/40 to-transparent blur-xl"
                aria-hidden
              />
              <div className="relative">
                <Image
                  src="/images/kim-yonggil-speaker.png"
                  alt="T05 Building AI Data Infrastructure — 발표자 김용길 본부장"
                  width={1292}
                  height={1879}
                  className="h-auto w-full object-contain drop-shadow-[0_16px_32px_rgba(15,23,42,0.15)]"
                  sizes="(max-width: 1024px) 60vw, 220px"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-6">
                <p className="mb-1 font-mono text-xs uppercase tracking-widest text-blue-600">
                  발표자
                </p>
                <h3 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                  김용길 본부장
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Fasoo FDI 2026 · Track 5 ·{" "}
                  <span className="text-blue-700">
                    Building AI Data Infrastructure
                  </span>
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="border-l-2 border-blue-500/60 pl-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-400">
                    세션
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    Track 5
                  </div>
                </div>
                <div className="border-l-2 border-blue-500/60 pl-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-400">
                    행사
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    Fasoo FDI 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
