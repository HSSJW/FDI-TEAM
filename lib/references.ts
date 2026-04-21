import type { Reference } from "./types";

/**
 * Fasoo · Sparrow 공식 자료 참고 DB.
 *
 * TODO(기획자): 아래 배열을 실제 자료로 채워주세요.
 * 작성 예시를 주석으로 1개 남겨둡니다. 비어있는 상태에서도
 * API 경로는 정상 동작합니다 (단지 빈 배열을 반환합니다).
 *
 * 예시:
 * {
 *   id: "wrapsody-overview",
 *   title: "Wrapsody 제품 소개",
 *   url: "https://www.fasoo.com/products/wrapsody",
 *   description: "AI 시대를 위한 통합 데이터 인프라 솔루션 공식 페이지",
 *   source: "fasoo",
 *   category: ["overview", "product"],
 *   keywords: ["wrapsody", "데이터 인프라", "AI", "문서 관리", "ACL"],
 * }
 */
export const references: Reference[] = [];

/**
 * 간단한 키워드 스코어 기반 매칭.
 * - keywords 매치: +3점
 * - title 매치: +2점
 * - description/내용 매치: +1점
 * - Fasoo/Sparrow 공식 자료는 가산점 +1점
 */
export function findMatchingReferences(
  query: string,
  maxResults: number,
): Reference[] {
  if (!query) return [];
  const q = query.toLowerCase();
  const tokens = q.split(/[\s,./]+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored = references.map((r) => {
    let score = 0;
    const hay = (
      r.title +
      " " +
      r.description +
      " " +
      r.keywords.join(" ")
    ).toLowerCase();
    for (const t of tokens) {
      if (r.keywords.some((k) => k.toLowerCase().includes(t))) score += 3;
      if (r.title.toLowerCase().includes(t)) score += 2;
      else if (hay.includes(t)) score += 1;
    }
    if (r.source === "fasoo" || r.source === "sparrow") score += 1;
    return { r, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ r }) => r);
}
