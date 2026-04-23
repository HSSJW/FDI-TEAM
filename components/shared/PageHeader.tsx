"use client";

import { motion } from "framer-motion";
import {
  headerStaggerVariants,
  headerItemVariants,
} from "@/lib/page-motion";

type Props = {
  num: number;
  title: string;
  subtitle?: string;
  group: string;
};

/**
 * 비-제품 페이지(intro, challenge, vision, quantity, security, quality,
 * requirements, existing-approaches, agents, conclusion) 공통 상단 배너.
 *
 * 파수 공식 홈페이지(https://www.fasoo.ai/solutions/ai-ready-data-environment)
 * 히어로 밴드와 동일한 구조:
 *   - 동일한 풀블리드 배경 사진 (`/backgrounds/fasoo-hero.png`)
 *   - 네이비 오버레이 (#001434, 80% opacity)
 *   - 흰색 본문 타이포그래피
 *
 * 레이아웃 트릭: `<Sidebar w-64>` + `<main flex-1>` + `max-w-4xl mx-auto px-12 py-12`
 * 안에 있는 상태에서 `left-1/2 -translate-x-1/2 w-[calc(100vw-16rem)]` 으로
 * 컨테이너를 뚫고 main 영역 전체를 가로로 커버한다. 상단 `-mt-12` 로 py-12 상쇄.
 */
export default function PageHeader({ num, title, subtitle, group }: Props) {
  return (
    <motion.div
      className="relative left-1/2 -translate-x-1/2 w-[calc(100vw-16rem)] -mt-12 mb-12 overflow-hidden"
      initial="hidden"
      animate="show"
      variants={headerStaggerVariants}
    >
      {/* 배경 이미지 */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/fasoo-hero.png')" }}
      />
      {/* 네이비 오버레이 (#001434 80%) */}
      <div aria-hidden className="absolute inset-0 bg-[#001434]/80" />

      {/* 콘텐츠 */}
      <div className="relative flex flex-col items-center px-8 py-20 text-center text-white">
        <motion.div
          className="mb-4 font-mono text-xs uppercase tracking-widest text-white/80"
          variants={headerItemVariants}
        >
          Chapter {String(num).padStart(2, "0")} · {group}
        </motion.div>
        <motion.h1
          className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4 break-keep"
          variants={headerItemVariants}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="max-w-2xl text-base md:text-lg leading-relaxed text-white/90 break-keep"
            variants={headerItemVariants}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
