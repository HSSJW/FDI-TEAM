import { tool } from "ai";
import { z } from "zod";
import { PAGE_IDS } from "./pages";
import { findMatchingReferences } from "./references";

const pageIdEnum = z.enum(PAGE_IDS as [string, ...string[]]);

/**
 * 챗봇이 사용 가능한 3개의 툴:
 *
 * - navigate_to_page / highlight_section: 서버에 execute를 두지 않아
 *   클라이언트(브라우저)가 toolInvocation을 수신해 직접 UI 동작을 수행하고
 *   useChat의 onToolCall에서 결과 문자열을 리턴합니다.
 *
 * - find_references: 서버에서 동기적으로 JSON DB를 검색해 결과를 반환합니다.
 */
export const chatTools = {
  navigate_to_page: tool({
    description:
      "사용자를 12개 페이지 중 한 곳으로 이동시킨다. 답변이 그 페이지 주제와 직접 관련될 때만 호출할 것.",
    parameters: z.object({
      page_id: pageIdEnum.describe("이동할 페이지의 id"),
      reason: z
        .string()
        .describe("이 페이지로 이동하는 이유를 한국어 1문장으로 작성"),
    }),
  }),

  highlight_section: tool({
    description:
      "현재 페이지(또는 navigate 직후의 페이지) 내 특정 섹션을 시각적으로 강조한다. section_id는 시스템 프롬프트의 섹션 카탈로그에 있는 값만 사용할 것.",
    parameters: z.object({
      page_id: pageIdEnum.describe("섹션이 속한 페이지의 id"),
      section_id: z
        .string()
        .describe("해당 페이지의 섹션 id (카탈로그에 있는 값)"),
    }),
  }),

  find_references: tool({
    description:
      "Fasoo 및 Sparrow의 공식 자료 중 사용자 질문과 관련된 자료를 최대 5개까지 찾아 반환한다. 자료·문서·링크·백서 같은 요청에 사용.",
    parameters: z.object({
      query: z
        .string()
        .describe("검색 질의어. 사용자의 질문 의도를 담은 한국어 키워드"),
      max_results: z.number().int().min(1).max(5).default(3),
    }),
    execute: async ({ query, max_results }) => {
      const items = findMatchingReferences(query, max_results);
      return {
        query,
        items,
        note:
          items.length === 0
            ? "아직 공식 자료 DB가 비어있어 반환된 항목이 없습니다."
            : undefined,
      };
    },
  }),
};
