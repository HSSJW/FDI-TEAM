export const PAGES = [
  { id: "intro", num: 1, title: "인트로", group: "진입" },
  { id: "challenge", num: 2, title: "기업 AI 도입의 현실", group: "문제" },
  { id: "vision", num: 3, title: "통합 인프라의 필요성", group: "문제" },
  { id: "quantity", num: 4, title: "데이터 취합", group: "분석" },
  { id: "security", num: 5, title: "접근 권한", group: "분석" },
  { id: "quality", num: 6, title: "결과 품질", group: "분석" },
  { id: "requirements", num: 7, title: "세 가지 핵심 요건", group: "분석" },
  { id: "existing-approaches", num: 8, title: "기존 방식의 한계", group: "해결" },
  { id: "wrapsody", num: 9, title: "Wrapsody 솔루션", group: "해결" },
  { id: "agents", num: 10, title: "Business-Ready Agents", group: "해결" },
  { id: "fireside", num: 11, title: "Fireside", group: "해결" },
  { id: "conclusion", num: 12, title: "왜 Wrapsody인가", group: "결론" },
] as const;

export type PageId = (typeof PAGES)[number]["id"];

export const PAGE_IDS: PageId[] = PAGES.map((p) => p.id) as PageId[];

export function getPage(pageId: PageId) {
  return PAGES.find((p) => p.id === pageId)!;
}

/**
 * 페이지별 상세 메타데이터.
 *
 * LLM이 사용자의 자연어 질문을 페이지로 라우팅할 때 사용합니다.
 *
 * - summary: 2~3문장으로 페이지가 다루는 범위를 설명
 * - topics: 질문 매칭에 쓰일 키워드·동의어 풀 (가능한 넓게)
 * - handles: 이 페이지로 이동해야 할 대표적인 사용자 질문 예시
 *   (LLM에 "이런 질문이 오면 이 페이지" 라는 샘플로 제공됨)
 */
export type PageDetail = {
  summary: string;
  topics: string[];
  handles: string[];
};

export const PAGE_DETAILS: Record<PageId, PageDetail> = {
  intro: {
    summary:
      "FDI 2026 Symposium Track 5 세션 『Building AI Data Infrastructure』 전체 흐름을 소개하는 진입 페이지입니다. AI 가이드 챗봇 사용법과 발표자(김용길 본부장, Fasoo) 정보를 함께 안내합니다.",
    topics: [
      "세션 개요",
      "발표 소개",
      "발표자",
      "Track 5",
      "FDI 2026",
      "챗봇 사용법",
      "AI 가이드",
      "예시 질문",
      "시작",
      "introduction",
      "소개",
    ],
    handles: [
      "이 세션 주제가 뭐야?",
      "이 사이트 어떻게 써?",
      "챗봇 사용법 알려줘",
      "발표자가 누구야?",
      "FDI 2026 Track 5가 뭐지?",
      "처음인데 뭐부터 보면 돼?",
    ],
  },
  challenge: {
    summary:
      "ChatGPT 같은 퍼블릭 AI를 기업 업무에 그대로 쓸 수 없는 이유, 즉 데이터 피딩(어떤 데이터를 먹이느냐)이 모델 성능보다 더 결정적이라는 점을 설명합니다. 부서별로 제각기 에이전트를 만드는 현실과 그 한계도 함께 다룹니다.",
    topics: [
      "ChatGPT",
      "퍼블릭 AI",
      "공용 AI",
      "기업 AI",
      "엔터프라이즈 AI",
      "왜 그대로 못 써",
      "데이터 피딩",
      "data feeding",
      "모델 vs 데이터",
      "부서별 AI",
      "부서별 에이전트",
      "실정",
      "현실",
      "도입의 어려움",
    ],
    handles: [
      "ChatGPT는 왜 회사 일에 그대로 쓸 수 없어?",
      "퍼블릭 AI랑 기업 AI는 뭐가 달라?",
      "AI 도입에서 진짜 중요한 건 뭐야?",
      "데이터 피딩이 뭔데 중요해?",
      "모델 성능만 좋으면 되는 거 아냐?",
    ],
  },
  vision: {
    summary:
      "부서별로 각자 에이전트를 만드는 AS-IS 구조의 중복·관리 비용 문제를 보여주고, 그 해답으로 전사 차원의 통합 AI 데이터 인프라(TO-BE)를 먼저 구축해야 한다는 방향성을 제시합니다.",
    topics: [
      "AS-IS",
      "TO-BE",
      "통합 인프라",
      "통합 데이터 인프라",
      "전사 차원",
      "중복 구축",
      "운영 비용",
      "관리 복잡도",
      "인프라 선구축",
      "데이터 인프라 설계",
      "비전",
    ],
    handles: [
      "왜 통합 인프라가 필요해?",
      "AS-IS랑 TO-BE 차이가 뭐야?",
      "부서마다 따로 AI 만들면 뭐가 문제야?",
      "데이터 인프라를 왜 먼저 구축해야 해?",
      "전사 차원 접근이 왜 더 나아?",
    ],
  },
  quantity: {
    summary:
      "데이터 취합 허들(Quantity)을 다룹니다. 비정형 문서를 많이 모으는 것 자체보다 지속적인 최신화와 수명이 다한 데이터의 폐기 관리가 더 어렵다는 점을 강조합니다.",
    topics: [
      "데이터 취합",
      "수집",
      "비정형 데이터",
      "unstructured",
      "문서 수집",
      "최신화",
      "update",
      "동기화",
      "폐기",
      "lifecycle",
      "생애주기",
      "Quantity",
      "많이 모으기",
      "데이터 양",
    ],
    handles: [
      "데이터는 어떻게 모아야 해?",
      "비정형 데이터가 왜 중요해?",
      "최신화가 왜 어려운 문제야?",
      "오래된 문서는 어떻게 관리해?",
      "Quantity 허들이 뭐야?",
    ],
  },
  security: {
    summary:
      "접근 권한 허들(Security)을 다룹니다. 인사·개인정보처럼 민감한 데이터가 AI 응답 형태로 권한 없는 사용자에게 노출되지 않도록, 문서 ACL을 AI 질의/응답 단계까지 반영해야 한다는 요구사항을 설명합니다.",
    topics: [
      "보안",
      "접근 권한",
      "ACL",
      "권한 통제",
      "데이터 유출",
      "인사 데이터",
      "개인정보",
      "기밀",
      "Security",
      "AI 응답 노출",
      "프롬프트 단계 보안",
    ],
    handles: [
      "보안은 어떻게 처리해?",
      "권한 없는 사람이 AI로 인사정보 볼 수 있어?",
      "ACL이 뭐야?",
      "문서 권한을 AI에도 적용할 수 있어?",
      "민감한 데이터 유출 걱정은?",
    ],
  },
  quality: {
    summary:
      "결과 품질 허들(Quality)을 다룹니다. 데이터를 많이 넣을수록 오히려 할루시네이션이 심해질 수 있다는 점을 지적하고, 작성자·부서·시점·열람 이력 같은 메타데이터 기반 필터링으로 필요한 문서만 선별해야 한다고 주장합니다.",
    topics: [
      "품질",
      "Quality",
      "할루시네이션",
      "hallucination",
      "Garbage In Garbage Out",
      "GIGO",
      "메타데이터",
      "metadata",
      "필터링",
      "선별",
      "답변 정확도",
      "불필요 데이터",
    ],
    handles: [
      "답변 품질을 어떻게 보장해?",
      "할루시네이션은 왜 생겨?",
      "메타데이터로 뭘 할 수 있어?",
      "데이터 많이 넣으면 오히려 답이 이상해진다고?",
      "필터링이 왜 필요해?",
    ],
  },
  requirements: {
    summary:
      "앞선 세 가지 허들을 Quantity·Quality·Security라는 세 기둥으로 정리하고, 어느 하나만으로는 기업 AI 인프라가 성립하지 않는다는 종합 메시지를 제시합니다.",
    topics: [
      "세 가지 요건",
      "3대 기둥",
      "three pillars",
      "Quantity",
      "Quality",
      "Security",
      "핵심 기준",
      "요건 정리",
      "종합",
      "synthesis",
    ],
    handles: [
      "기업 AI 인프라의 핵심 요건이 뭐야?",
      "세 가지 기둥이 뭐야?",
      "Quantity Quality Security 한번에 정리해줘",
      "이 세 개가 왜 다 필요해?",
    ],
  },
  "existing-approaches": {
    summary:
      "문서 중앙화와 데이터 레이크 같은 기존 접근 방식이 '데이터를 모으는' 문제는 풀지만, 최신화·문서별 보안·메타데이터 활용을 함께 풀지 못한다는 공백을 분석합니다.",
    topics: [
      "기존 방식",
      "문서 중앙화",
      "centralization",
      "데이터 레이크",
      "data lake",
      "레거시",
      "한계",
      "공백",
      "gap",
      "한계 분석",
      "RAG 이전",
    ],
    handles: [
      "지금까지는 어떻게 해결해 왔어?",
      "문서 중앙화 방식은 뭐가 부족해?",
      "데이터 레이크만으로는 왜 부족해?",
      "기존 접근의 공백이 뭐야?",
    ],
  },
  wrapsody: {
    summary:
      "Wrapsody(랩소디) 솔루션을 본격 소개하는 제품 페이지입니다. 문서 생성 시점 자동 업로드+유니크 ID 기반 최신화, 암호화+ACL 기반 접근 통제, 메타데이터 기반 품질 관리 세 가지 핵심 기술과 실행 캡쳐 데모를 보여줍니다.",
    topics: [
      "Wrapsody",
      "랩소디",
      "솔루션",
      "제품",
      "자동 최신화",
      "유니크 ID",
      "버전 관리",
      "리비전",
      "암호화",
      "ACL",
      "접근 통제",
      "메타데이터 관리",
      "실행 화면",
      "데모",
      "live demo",
    ],
    handles: [
      "Wrapsody가 뭐야?",
      "랩소디 동작 방식 설명해줘",
      "Wrapsody 핵심 기술 세 가지가 뭐야?",
      "랩소디는 보안을 어떻게 처리해?",
      "Wrapsody 실행 화면 보여줘",
      "리비전이랑 버전 관리는 어떻게 해?",
    ],
  },
  agents: {
    summary:
      "Wrapsody 위에서 동작하는 세 가지 Business-Ready 에이전트(K-Assistant·Librarian·Domain Knowledge Master)를 각각의 역할과 실행 캡쳐로 소개합니다. 문서 요약, 메타데이터 기반 탐색, 주제 한정 전문 AI 각각의 쓰임새를 다룹니다.",
    topics: [
      "에이전트",
      "Business-Ready Agents",
      "K-Assistant",
      "K 어시스턴트",
      "Librarian",
      "라이브러리안",
      "Domain Knowledge Master",
      "도메인 마스터",
      "NotebookLM",
      "문서 요약",
      "답장 초안",
      "메타데이터 검색",
      "주제 한정 AI",
      "에이전트 3종",
    ],
    handles: [
      "K-Assistant가 뭐야?",
      "Librarian은 어떤 기능이야?",
      "Domain Master는 뭘 할 수 있어?",
      "에이전트 세 개 차이가 뭐야?",
      "랩소디 위에서 돌아가는 AI 기능 보여줘",
      "NotebookLM이랑 비슷한 기능 있어?",
    ],
  },
  fireside: {
    summary:
      "Wrapsody의 세 핵심 기능에 메신저를 결합한 통합 허브 Fireside를 소개하는 제품 페이지입니다. 모바일 확장, 개방형 API 연계까지 다루며, 외부에서도 Wrapsody 자산을 활용할 수 있는 창구 역할을 설명합니다.",
    topics: [
      "Fireside",
      "파이어사이드",
      "메신저",
      "통합 허브",
      "모바일",
      "mobile",
      "Open API",
      "API 연계",
      "외부 연동",
      "허브",
    ],
    handles: [
      "Fireside가 뭐야?",
      "파이어사이드는 Wrapsody랑 뭐가 달라?",
      "메신저랑 연계된다고?",
      "모바일에서도 쓸 수 있어?",
      "외부 시스템과 연동 가능해?",
      "Open API 지원해?",
    ],
  },
  conclusion: {
    summary:
      "세션의 마무리 페이지. Wrapsody가 왜 'One & Only' 솔루션인지 한 번 더 정리하고, 다음 행동(Call to Action)을 안내합니다.",
    topics: [
      "결론",
      "conclusion",
      "왜 Wrapsody",
      "why",
      "One and Only",
      "요약",
      "summary",
      "CTA",
      "Call to Action",
      "다음 단계",
    ],
    handles: [
      "결론 정리해줘",
      "왜 Wrapsody를 선택해야 해?",
      "One & Only가 무슨 뜻이야?",
      "세션 전체를 한 문장으로 요약해줘",
      "다음 단계로 뭐 하면 돼?",
    ],
  },
};

/**
 * @deprecated PAGE_DETAILS[id].summary 를 직접 참조하세요.
 * 기존 호출 지점 호환을 위해 파생 뷰로 유지합니다.
 */
export const PAGE_SUMMARY: Record<PageId, string> = Object.fromEntries(
  PAGE_IDS.map((id) => [id, PAGE_DETAILS[id].summary]),
) as Record<PageId, string>;
