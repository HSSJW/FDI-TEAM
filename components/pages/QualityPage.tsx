import { FileWarning, Layers3, Search } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";
import HowQuestionBanner from "@/components/shared/HowQuestionBanner";
import ApproachComparisonTable from "@/components/shared/ApproachComparisonTable";

type Props = {
  highlightedId: string | null;
};

export default function QualityPage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={6}
        group="STEP 3 · 분석"
        title="세 번째 과제: 결과 품질"
        subtitle="데이터가 많다고 좋은 것이 아니라, 적절한 데이터만 골라 전달해야 품질이 보장됩니다."
      />

      <div className="space-y-8 mb-10">
        <SectionWrapper id="hallucination-cause" highlightedId={highlightedId}>
          <SubHeading accent="sky">할루시네이션의 발생 원인</SubHeading>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p>
              방대한 데이터 중 불필요하거나 중복된 데이터를 참고할 경우, AI가
              거짓 정보를 생성하는 할루시네이션 현상이 발생합니다.
            </p>
            <p>
              특히 구버전과 최신본이 섞여 있을 때, AI는 어느 것이 &apos;진짜&apos;인지
              판단하지 못합니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="metadata-role" highlightedId={highlightedId}>
          <SubHeading accent="sky">메타데이터의 역할</SubHeading>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p>
              문서의 생성자·시점·부서·열람 기록 등 풍부한 메타데이터를
              조합하면, 질의에 가장 적합한 최신 데이터만을 선별할 수 있습니다.
            </p>
            <p>
              메타데이터는 &apos;어떤 데이터를 AI에 전달할지&apos;를 결정하는 판단
              근거가 됩니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="filtering-need" highlightedId={highlightedId}>
          <SubHeading accent="sky">사전 필터링의 중요성</SubHeading>
          <div className="text-slate-300 leading-relaxed space-y-2">
            <p>
              메타데이터 기반의 사전 필터링을 거친 데이터만 AI 생성 모델에
              전달해야 결과 품질이 보장됩니다.
            </p>
            <p>
              입력 품질이 낮으면, 아무리 뛰어난 모델이라도 신뢰할 수 있는 답을
              만들 수 없습니다.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        id="quality-breakdown"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <SubHeading accent="slate">세부 과제 분석</SubHeading>
        <ApproachComparisonTable
          accent="sky"
          rows={[
            {
              icon: FileWarning,
              area: "버전 혼재 방지",
              issue: "같은 주제의 문서가 여러 버전으로 존재",
              reason: "최신본 식별 기준이 없으면 AI가 구버전을 인용",
            },
            {
              icon: Layers3,
              area: "메타데이터 자동화",
              issue: "사람이 직접 태그·분류를 부여하는 것은 지속 불가능",
              reason: "딥러닝 기반 자동 부여 체계가 필요",
            },
            {
              icon: Search,
              area: "질의 의도 매칭",
              issue: "같은 키워드라도 부서·시점에 따라 의미가 다름",
              reason: "메타데이터로 컨텍스트를 좁혀야 정답을 찾을 수 있음",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper id="key-question" highlightedId={highlightedId}>
        <HowQuestionBanner>
          어떻게 적합한 데이터만 골라 AI에 전달해 신뢰할 수 있는 결과를 만들
          것인가?
        </HowQuestionBanner>
      </SectionWrapper>
    </div>
  );
}
