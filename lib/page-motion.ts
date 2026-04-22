import type { Variants } from "framer-motion";

/**
 * 페이지가 바뀔 때 — 블러·스케일·페이드가 조화된 모핑 전환.
 * 라이트 테마 기준으로 튜닝되어 자연스러운 "카메라 포커스" 느낌.
 */
export const pageMorphVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px)",
    y: 8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: "blur(8px)",
    y: -6,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * 섹션이 스크롤로 뷰포트에 들어올 때 — 아래에서 위로 부드럽게 등장.
 * revealIndex 순번에 따라 40ms씩 delay가 붙어 순차 reveal 효과.
 */
export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/** PageHeader 내부 Chapter 라벨·제목·부제 순차 stagger용 */
export const headerStaggerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
} as const;

export const headerItemVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
} as const;
