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
          <div className="border border-slate-200 rounded-xl p-8 h-full float-hover bg-white">
            <div className="text-xs font-mono text-emerald-600 mb-2">
              Centralized Storage &amp; ECM
            </div>
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              문서 중앙화 방식
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              모든 직원과 시스템의 파일을 단일 중앙 저장소에 물리적으로 강제
              이관해 모아둔 후 AI에 학습시키는 방식
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <FileText className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">직원 A 문서</div>
                </div>
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <FileText className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">직원 B 문서</div>
                </div>
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <FileText className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">부서 폴더</div>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded p-2 text-center mb-2">
                <HardDrive className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <div className="text-[10px] text-emerald-700 font-medium">
                  중앙 통합 서버
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
              </div>
              <div className="bg-emerald-100 border border-emerald-300 rounded p-2 text-center">
                <Brain className="w-4 h-4 text-emerald-700 mx-auto mb-1" />
                <div className="text-[10px] text-emerald-800 font-medium">
                  LLM / AI 엔진
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="data-lake" highlightedId={highlightedId}>
          <div className="border border-slate-200 rounded-xl p-8 h-full float-hover bg-white">
            <div className="text-xs font-mono text-indigo-600 mb-2">
              Data Lake &amp; Object Storage
            </div>
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              데이터 레이크 방식
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              정형·반정형·비정형 등 모든 형태의 데이터를 가공하지 않은
              원시(Raw) 상태로 한 곳에 저장해 AI가 활용하는 방식
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <Database className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">정형 DB</div>
                </div>
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <FileText className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">반정형</div>
                </div>
                <div className="bg-white border border-slate-200 rounded p-2 text-center">
                  <FileText className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                  <div className="text-[10px] text-slate-600">비정형</div>
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded p-2 text-center mb-2">
                <Layers className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                <div className="text-[10px] text-indigo-700 font-medium">
                  데이터 레이크
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
              </div>
              <div className="bg-indigo-100 border border-indigo-300 rounded p-2 text-center">
                <Brain className="w-4 h-4 text-indigo-700 mx-auto mb-1" />
                <div className="text-[10px] text-indigo-800 font-medium">
                  LLM / AI 엔진
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper id="gap-analysis" highlightedId={highlightedId}>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-amber-700 uppercase tracking-widest">
              But,
            </span>
          </div>
          <h3 className="font-display text-2xl text-slate-900 mb-2">
            이 문제들은 어떻게 해결할 것인가?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            두 방식 모두 데이터 취합과 최신화에 집중할 뿐, 다음 영역은 공백으로
            남겨둡니다.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {gaps.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-amber-200 rounded-lg p-4"
              >
                <div className="flex items-start gap-2 mb-1">
                  <X className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm font-medium text-slate-900">
                    {item.label}
                  </div>
                </div>
                <div className="text-xs text-slate-600 ml-6">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
