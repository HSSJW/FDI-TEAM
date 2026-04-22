import { FileText, RefreshCw, FileWarning } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";
import HowQuestionBanner from "@/components/shared/HowQuestionBanner";
import ApproachComparisonTable from "@/components/shared/ApproachComparisonTable";

type Props = {
  highlightedId: string | null;
};

export default function QuantityPage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={4}
        group="STEP 1 · 분석"
        title="첫 번째 과제: 데이터 취합"
        subtitle="비정형 데이터를 모으는 것까지는 가능하나, 지속적인 최신화는 수동으로 해결할 수 없습니다."
      />

      <div className="space-y-8 mb-10">
        <SectionWrapper
          id="unstructured-importance"
          highlightedId={highlightedId}
        >
          <SubHeading accent="sky">비정형 데이터</SubHeading>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p>기업 데이터는 정형(DB)과 비정형(문서)으로 나뉩니다.</p>
            <p>
              LLM이 비정형 데이터를 잘 사용하기 위해서는 내용 기반 분류, 태깅이
              필요합니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="update-sync" highlightedId={highlightedId}>
          <SubHeading accent="sky">데이터 업데이트 및 동기화</SubHeading>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p>
              초기 데이터 취합 후 새로 생성되는 문서나 기존 문서의 수정 사항을
              실시간으로 반영하는 것은 매우 중요합니다.
            </p>
            <p>
              부서별로 데이터를 수동 업데이트할 경우, 시간적·금전적 유지보수
              비용이 크게 발생합니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="lifecycle-issue" highlightedId={highlightedId}>
          <SubHeading accent="sky">데이터 생애 주기</SubHeading>
          <div className="text-slate-700 leading-relaxed">
            <p>
              더 이상 유효하지 않은 폐기 데이터가 AI 검색 및 생성에 활용되는
              것을 차단해야 합니다.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        id="quantity-breakdown"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <SubHeading accent="slate">세부 과제 분석</SubHeading>
        <ApproachComparisonTable
          accent="sky"
          rows={[
            {
              icon: FileText,
              area: "비정형 데이터 수집",
              issue: "부서마다 파일이 로컬·공유 드라이브에 흩어져 있음",
              reason: "중앙 저장 강제 이관은 직원 저항과 워크플로우 단절을 야기",
            },
            {
              icon: RefreshCw,
              area: "실시간 최신화",
              issue: "신규 문서 등록과 기존 문서 수정이 매일 발생",
              reason: "수동 업데이트로는 반영 속도를 따라잡을 수 없음",
            },
            {
              icon: FileWarning,
              area: "폐기 데이터 차단",
              issue: "구버전이나 폐기된 문서가 AI 답변에 혼입",
              reason: "문서 상태(유효/폐기)를 판별할 메타데이터 체계가 없음",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper id="key-question" highlightedId={highlightedId}>
        <HowQuestionBanner>
          어떻게 수동 작업 없이 모든 문서를 항상 최신 상태로 유지할 것인가?
        </HowQuestionBanner>
      </SectionWrapper>
    </div>
  );
}
