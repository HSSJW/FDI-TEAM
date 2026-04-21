import type { CarouselImage } from "./types";

export type AgentId = "k-assistant" | "librarian" | "domain-master";

/**
 * 세 AI 에이전트의 실행 캡쳐 이미지 + 캡션 모음.
 *
 * 캡션은 원본 파일명 기반으로 첨삭하여 다듬은 상태이며,
 * 원본 파일명이 부실한 항목(예: `2.png`)에는 `[확인 필요]` 마커를 붙여
 * 기획자가 최종 검수·수정할 수 있게 했습니다. 이 파일 하나만 편집하면
 * 모든 캐러셀에 반영됩니다.
 */
export const carouselCaptures: Record<AgentId, CarouselImage[]> = {
  "k-assistant": [
    {
      src: "/captures/k-assistant/k-assistant-01.png",
      alt: "K-Assistant 토글 버튼 On",
      caption: "K-Assistant 토글 버튼 On",
    },
    {
      src: "/captures/k-assistant/k-assistant-02.png",
      alt: "K-Assistant 초기 대화창",
      caption: "K-Assistant 초기 대화창 [확인 필요]",
    },
    {
      src: "/captures/k-assistant/k-assistant-03.png",
      alt: "작업 파일에서 바로 대화 진행",
      caption: "작업하던 파일에서 바로 대화 진행",
    },
    {
      src: "/captures/k-assistant/k-assistant-04.png",
      alt: "Fireside 대화 기록 확인",
      caption: "대화 기록은 Fireside에서도 확인 가능",
    },
  ],
  librarian: [
    {
      src: "/captures/librarian/librarian-01.png",
      alt: "Librarian 검색창 입력",
      caption: "Librarian 검색창에 입력",
    },
    {
      src: "/captures/librarian/librarian-02.png",
      alt: "요청에 따른 파일 검색",
      caption: "요청에 따른 파일 검색 결과",
    },
    {
      src: "/captures/librarian/librarian-03.png",
      alt: "검색된 파일 중 추가 요청",
      caption: "검색된 파일 중 추가 요청 가능",
    },
  ],
  "domain-master": [
    {
      src: "/captures/domain-master/domain-master-01.png",
      alt: "도메인 봇 생성 시작",
      caption: "도메인 봇 생성 시작",
    },
    {
      src: "/captures/domain-master/domain-master-02.png",
      alt: "도메인 봇 설정 화면",
      caption: "도메인 봇 설정 화면 [확인 필요]",
    },
    {
      src: "/captures/domain-master/domain-master-03.png",
      alt: "도메인 지식 파일 첨부",
      caption: "도메인 지식 파일 첨부",
    },
    {
      src: "/captures/domain-master/domain-master-04.png",
      alt: "도메인 봇 생성 완료",
      caption: "도메인 봇 생성 완료",
    },
    {
      src: "/captures/domain-master/domain-master-05.png",
      alt: "도메인 특화 챗봇 사용",
      caption: "도메인 특화 챗봇 사용",
    },
  ],
};
