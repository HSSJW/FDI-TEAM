import { Lock, Users, Brain } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SubHeading from "@/components/shared/SubHeading";
import HowQuestionBanner from "@/components/shared/HowQuestionBanner";
import ApproachComparisonTable from "@/components/shared/ApproachComparisonTable";

type Props = {
  highlightedId: string | null;
};

export default function SecurityPage({ highlightedId }: Props) {
  return (
    <div>
      <PageHeader
        num={5}
        group="STEP 2 · 분석"
        title="두 번째 과제: 접근 권한"
        subtitle="권한 없는 사용자가 AI를 통해 기밀 정보에 우회 접근하는 것을 막아야 합니다."
      />

      <div className="space-y-8 mb-10">
        <SectionWrapper id="access-need" highlightedId={highlightedId}>
          <SubHeading accent="sky">부서별·직급별 접근 통제</SubHeading>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p>
              전사 데이터를 통합할 경우, 부서·직급별 보안 레벨에 따른 접근
              권한 통제가 필수적입니다.
            </p>
            <p>
              권한 체계가 없다면 모든 직원이 모든 문서의 내용을 AI를 통해
              열람할 수 있게 됩니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="leak-scenario" highlightedId={highlightedId}>
          <SubHeading accent="sky">보안 사고 시나리오</SubHeading>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p>
              인사 정보나 연봉 정보가 포함된 데이터가, 권한 없는 타 부서
              직원에게 AI 결과물 형태로 제공될 수 있습니다.
            </p>
            <p>
              사용자가 직접 해당 문서를 열람하지 않아도, AI의 요약·답변을 통해
              내용이 유출되는 방식입니다.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="traditional-limit" highlightedId={highlightedId}>
          <SubHeading accent="sky">일반 문서 형식의 한계</SubHeading>
          <div className="text-slate-700 leading-relaxed space-y-2">
            <p>
              Word, PPT, PDF 등 일반 문서 파일은 파일 자체에 정교한 권한 체계를
              내장하지 못합니다.
            </p>
            <p>
              결과적으로 AI 시스템이 질의 시점마다 각 사용자의 권한을 검증할
              수단이 부족합니다.
            </p>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper
        id="security-breakdown"
        highlightedId={highlightedId}
        className="mb-12"
      >
        <SubHeading accent="slate">세부 과제 분석</SubHeading>
        <ApproachComparisonTable
          accent="sky"
          rows={[
            {
              icon: Lock,
              area: "동적 권한 체계",
              issue: "사용자가 소속·직급이 바뀔 때마다 접근 범위가 달라짐",
              reason: "정적으로 문서마다 권한을 관리하면 변경 반영이 불가능",
            },
            {
              icon: Users,
              area: "문서 공유 추적",
              issue: "문서가 공유될 때마다 허용된 열람자가 늘어남",
              reason: "원본 외부에서 사본이 돌아다니면 통제력을 상실",
            },
            {
              icon: Brain,
              area: "AI 경유 우회 노출",
              issue: "문서를 직접 안 열어도 AI 답변으로 내용이 흘러감",
              reason: "AI가 참조 단계에서 권한을 검증하지 않으면 방어 불가",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper id="key-question" highlightedId={highlightedId}>
        <HowQuestionBanner>
          어떻게 권한 없는 사용자가 AI를 경유해 기밀에 접근하는 것을 막을
          것인가?
        </HowQuestionBanner>
      </SectionWrapper>
    </div>
  );
}
