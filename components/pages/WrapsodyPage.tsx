import { CheckCircle2, Download, ExternalLink } from "lucide-react";
import ProductBanner from "@/components/shared/ProductBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ImageCarousel from "@/components/shared/ImageCarousel";
import { wrapsodyCaptures } from "@/lib/captures";

type Props = {
  highlightedId: string | null;
};

type TechBlock = {
  id: string;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
};

const techs: TechBlock[] = [
  {
    id: "tech-freshness",
    label: "기술 01",
    title: "데이터 최신화",
    desc: "고유 ID 기반의 버전 관리로 항상 최신 문서가 AI에 전달됩니다.",
    bullets: [
      "문서 생성·수정 즉시 백그라운드 동기화",
      "전 문서 고유 버전 부여 및 체계적 이력 관리",
      "검증된 최신 데이터만 AI 검색에 활용",
    ],
  },
  {
    id: "tech-access",
    label: "기술 02",
    title: "접근 통제",
    desc: "자동 ACL 생성으로 권한 없는 사용자의 우회 접근을 원천 차단합니다.",
    bullets: [
      "문서 생성·공유 시 접근 권한 자동 부여",
      "질의 사용자의 현재 권한 실시간 검증",
      "인가된 안전한 데이터만 AI 모델에 전달",
    ],
  },
  {
    id: "tech-quality",
    label: "기술 03",
    title: "품질 향상",
    desc: "메타데이터·태그 자동 생성으로 AI 검색 정확도를 극대화합니다.",
    bullets: [
      "문서 저장 시 AI 활용 가능 속성 자동 부여",
      "딥러닝 기반 핵심 문맥 및 키워드 태그 추출",
      "생애주기 추적으로 구형 데이터 오남용 방지",
    ],
  },
];

export default function WrapsodyPage({ highlightedId }: Props) {
  return (
    <div>
      <ProductBanner
        chapter={9}
        group="해결 제시"
        logoSrc="/logos/wrapsody-logo.png"
        logoAlt="Wrapsody"
        logoWidth={826}
        logoHeight={227}
        subtitle="Wrapsody는 데이터 최신화·접근 통제·품질 관리를 인프라 차원에서 자동 해결합니다."
        gradient="from-emerald-500 via-emerald-600 to-teal-700"
      />

      <SectionWrapper
        id="overview"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="bg-blue-50/40 border border-blue-100 rounded-xl p-8 float-hover">
          <div className="font-display text-2xl text-slate-900 mb-3">
            AI Challenge를 해결하는 기업 AI Data Infrastructure 솔루션
          </div>
          <p className="text-slate-700 leading-relaxed">
            Quantity, Quality, Security 세 가지 요건을 단일 솔루션에서
            자동화합니다.
          </p>
        </div>
      </SectionWrapper>

      <div className="space-y-8 mb-12">
        {techs.map((t) => (
          <SectionWrapper key={t.id} id={t.id} highlightedId={highlightedId}>
            <div className="grid grid-cols-3 gap-8 p-6 rounded-xl float-hover bg-white border border-slate-200">
              <div className="col-span-1">
                <div className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-3">
                  {t.label}
                </div>
                <h3 className="font-display text-2xl text-slate-900 mb-3">
                  {t.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">{t.desc}</p>
              </div>
              <div className="col-span-2 bg-slate-50 border border-slate-100 rounded-xl p-6">
                <div className="space-y-3 text-sm">
                  {t.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      <SectionWrapper
        id="live-demo"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <div className="max-w-3xl">
          <ImageCarousel
            images={wrapsodyCaptures}
            ariaLabel="Wrapsody 실행 화면"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="wrapsody-resources" highlightedId={highlightedId}>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="/brochures/Brochure_Wrapsody.pdf"
            download
            className="border border-slate-200 rounded-xl p-6 text-left transition-all float-hover bg-white block"
          >
            <Download className="w-5 h-5 text-blue-600 mb-3" />
            <div className="font-medium text-slate-900 mb-1">
              브로슈어 다운로드
            </div>
            <div className="text-sm text-slate-500">
              Wrapsody 공식 브로슈어 (PDF)
            </div>
          </a>
          <a
            href="https://www.fasoo.ai/products/wrapsody"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-200 rounded-xl p-6 text-left transition-all float-hover bg-white block"
          >
            <ExternalLink className="w-5 h-5 text-blue-600 mb-3" />
            <div className="font-medium text-slate-900 mb-1">
              Wrapsody 제품 페이지
            </div>
            <div className="text-sm text-slate-500">
              fasoo.ai/products/wrapsody 로 이동
            </div>
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
