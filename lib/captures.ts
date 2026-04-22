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

/**
 * Wrapsody 실행 화면 캡쳐. 문서 관리·권한·리비전 흐름을 순서대로 보여줍니다.
 */
export const wrapsodyCaptures: CarouselImage[] = [
  {
    src: "/captures/wrapsody/1.png",
    alt: "Wrapsody 관리 파일 표시",
    caption: "Wrapsody 관리 파일은 빨간색 W 아이콘으로 표시됩니다",
  },
  {
    src: "/captures/wrapsody/2.png",
    alt: "Word 리비전 패널 및 문서 관리 메뉴",
    caption: "Word 상단의 리비전 패널과 문서 관리 메뉴",
  },
  {
    src: "/captures/wrapsody/3.png",
    alt: "문서 세부 정보 - 관리자, 권한, 태그",
    caption: "문서 관리자·권한·태그를 한 곳에서 확인",
  },
  {
    src: "/captures/wrapsody/4.png",
    alt: "권한 관리 - 조직도 기반 열람/리비전 권한 부여",
    caption: "조직도에서 선택해 열람·리비전 권한을 부여",
  },
  {
    src: "/captures/wrapsody/5.png",
    alt: "버전 타임라인",
    caption: "버전별 히스토리를 타임라인으로 추적",
  },
  {
    src: "/captures/wrapsody/6.png",
    alt: "리비전 완료 다이얼로그",
    caption: "새 버전으로 리비전 완료",
  },
];
