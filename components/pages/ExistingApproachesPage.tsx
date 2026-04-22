import {
  FileText,
  Database,
  ArrowRight,
  HardDrive,
  Brain,
  Layers,
  X,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";

type Props = {
  highlightedId: string | null;
};

export default function ExistingApproachesPage({ highlightedId }: Props) {
  const gaps = [
    { label: "신규 데이터 수집", desc: "실시간 자동 반영 체계 부재" },
    { label: "데이터 Security", desc: "권한 기반 필터링 체계 부재" },
    { label: "다양한 메타데이터 취합", desc: "자동 분류·태그 체계 부재" },
    { label: "구축 체계의 복잡성", desc: "통합 운영을 위한 공수 과다" },
  ];
  return (
    <div>
      <PageHeader
        num={8}
        group="해결 모색"
        title="기존 방식의 한계"
        subtitle="시중의 일반적 접근법은 데이터 취합에는 도움이 되지만, 보안·메타데이터·복잡성 문제는 해결하지 못합니다."
      />

      <div className="grid grid-cols-2 gap-6 mb-10">
        <SectionWrapper id="centralization" highlightedId={highlightedId}>
          <div className="border border-slate-600/50 rounded-xl p-8 h-full float-hover bg-slate-900/50">
            <div className="neo-label-cyan mb-2 font-mono text-[11px]">
              Centralized Storage &amp; ECM
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">
              문서 중앙화 방식
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              모든 직원과 시스템의 파일을 단일 중앙 저장소에 물리적으로 강제
              이관해 모아둔 후 AI에 학습시키는 방식
            </p>
            <div className="bg-slate-900/40 rounded-lg p-4 border border-slate-600/50">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="rounded border border-cyan-500/15 bg-slate-900/50 p-2 text-center">
                  <FileText className="neo-schematic-icon mx-auto mb-1 h-4 w-4" />
                  <div className="text-[10px] text-slate-400">직원 A 문서</div>
                </div>
                <div className="rounded border border-cyan-500/15 bg-slate-900/50 p-2 text-center">
                  <FileText className="neo-schematic-icon mx-auto mb-1 h-4 w-4" />
                  <div className="text-[10px] text-slate-400">직원 B 문서</div>
                </div>
                <div className="rounded border border-cyan-500/15 bg-slate-900/50 p-2 text-center">
                  <FileText className="neo-schematic-icon mx-auto mb-1 h-4 w-4" />
                  <div className="text-[10px] text-slate-400">부서 폴더</div>
                </div>
              </div>
              <div className="mb-2 flex justify-center">
                <ArrowRight className="h-4 w-4 rotate-90 text-cyan-500/40" />
              </div>
              <div className="neo-slab--sm mb-2 text-cyan-200">
                <HardDrive className="mx-auto mb-1 h-4 w-4 text-cyan-400" />
                <div className="text-[10px] font-medium text-cyan-200/90">
                  중앙 통합 서버
                </div>
              </div>
              <div className="mb-2 flex justify-center">
                <ArrowRight className="h-4 w-4 rotate-90 text-cyan-500/40" />
              </div>
              <div className="neo-slab--sm border-cyan-500/35 bg-cyan-950/50 text-cyan-100">
                <Brain className="mx-auto mb-1 h-4 w-4 text-cyan-300" />
                <div className="text-[10px] font-medium text-cyan-200">
                  LLM / AI 엔진
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="data-lake" highlightedId={highlightedId}>
          <div className="border border-slate-600/50 rounded-xl p-8 h-full float-hover bg-slate-900/50">
            <div className="neo-label-fuchsia mb-2 font-mono text-[11px]">
              Data Lake &amp; Object Storage
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-4">
              데이터 레이크 방식
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              정형·반정형·비정형 등 모든 형태의 데이터를 가공하지 않은
              원시(Raw) 상태로 한 곳에 저장해 AI가 활용하는 방식
            </p>
            <div className="bg-slate-900/40 rounded-lg p-4 border border-slate-600/50">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="rounded border border-fuchsia-500/20 bg-slate-900/50 p-2 text-center">
                  <Database className="mx-auto mb-1 h-4 w-4 text-fuchsia-400/60" />
                  <div className="text-[10px] text-slate-400">정형 DB</div>
                </div>
                <div className="rounded border border-fuchsia-500/20 bg-slate-900/50 p-2 text-center">
                  <FileText className="mx-auto mb-1 h-4 w-4 text-fuchsia-400/60" />
                  <div className="text-[10px] text-slate-400">반정형</div>
                </div>
                <div className="rounded border border-fuchsia-500/20 bg-slate-900/50 p-2 text-center">
                  <FileText className="mx-auto mb-1 h-4 w-4 text-fuchsia-400/60" />
                  <div className="text-[10px] text-slate-400">비정형</div>
                </div>
              </div>
              <div className="mb-2 flex justify-center">
                <ArrowRight className="h-4 w-4 rotate-90 text-fuchsia-500/40" />
              </div>
              <div className="neo-slab--accent mb-2 text-fuchsia-200">
                <Layers className="mx-auto mb-1 h-4 w-4 text-fuchsia-300" />
                <div className="text-[10px] font-medium text-fuchsia-200/90">
                  데이터 레이크
                </div>
              </div>
              <div className="mb-2 flex justify-center">
                <ArrowRight className="h-4 w-4 rotate-90 text-fuchsia-500/40" />
              </div>
              <div className="neo-slab--accent border-fuchsia-500/40 bg-fuchsia-950/50">
                <Brain className="mx-auto mb-1 h-4 w-4 text-fuchsia-300" />
                <div className="text-[10px] font-medium text-fuchsia-100">
                  LLM / AI 엔진
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper id="gap-analysis" highlightedId={highlightedId}>
        <div className="neo-warning-panel">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-fuchsia-300/90">
              But,
            </span>
          </div>
          <h3 className="mb-2 font-display text-2xl font-bold text-slate-100">
            이 문제들은 어떻게 해결할 것인가?
          </h3>
          <p className="mb-6 text-sm text-slate-400">
            두 방식 모두 데이터 취합과 최신화에 집중할 뿐, 다음 영역은 공백으로
            남겨둡니다.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {gaps.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-fuchsia-500/25 bg-slate-900/60 p-4"
              >
                <div className="mb-1 flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400/80" />
                  <div className="text-sm font-medium text-slate-100">
                    {item.label}
                  </div>
                </div>
                <div className="text-xs text-slate-400 ml-6">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
