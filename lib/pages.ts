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
  { id: "fireside", num: 11, title: "Fireside 모바일 허브", group: "해결" },
  { id: "conclusion", num: 12, title: "왜 Wrapsody인가", group: "결론" },
] as const;

export type PageId = (typeof PAGES)[number]["id"];

export const PAGE_IDS: PageId[] = PAGES.map((p) => p.id) as PageId[];

export function getPage(pageId: PageId) {
  return PAGES.find((p) => p.id === pageId)!;
}

export const PAGE_SUMMARY: Record<PageId, string> = {
  intro: "세션 전체 흐름을 소개하고 AI 가이드 챗봇 사용법을 안내하는 진입 페이지",
  challenge: "퍼블릭 AI와 기업용 AI의 근본적 차이, 데이터 피딩의 중요성을 설명",
  vision: "각 부서별 에이전트 중복 구축 문제(AS-IS)와 통합 인프라(TO-BE)의 필요성",
  quantity: "기업 내 비정형 데이터 취합·최신화·생애주기 관리 문제",
  security: "사용자 권한에 따른 AI 응답 데이터 통제와 ACL의 필요성",
  quality: "할루시네이션과 메타데이터 기반 필터링으로 답변 품질을 확보하는 법",
  requirements: "Quantity·Quality·Security 세 기둥이 동시에 필요한 이유",
  "existing-approaches": "문서 중앙화·RAG·하이브리드 방식의 한계와 통합 공백",
  wrapsody: "Wrapsody 솔루션의 세 가지 핵심 기술(최신화·접근통제·품질)과 라이브 데모",
  agents: "Wrapsody 위에서 동작하는 K-Assistant·Librarian·Domain Master 에이전트 소개",
  fireside: "모바일 메신저 허브 Fireside와 개방형 API 연계",
  conclusion: "왜 Wrapsody인가에 대한 결론과 CTA",
};
