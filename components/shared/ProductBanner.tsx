"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  headerStaggerVariants,
  headerItemVariants,
} from "@/lib/page-motion";

type Props = {
  chapter: number;
  group: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  subtitle?: string;
  /** Tailwind bg-gradient classes, e.g. "from-emerald-500 via-emerald-600 to-teal-700" */
  gradient: string;
};

/**
 * 제품(Wrapsody / Fireside) 페이지 상단 배너.
 *
 * 레이아웃 주의: App 쉘은 `<Sidebar w-64>` + `<main flex-1>` 구조이고, main 내부에
 * `max-w-4xl mx-auto px-12 py-12` 컨테이너가 콘텐츠를 중앙에 정렬한다. 배너는 이
 * 컨테이너를 뚫고 나가 main 영역 전체를 가로로 채워야 한다. (파수 공식 홈페이지
 * 히어로 밴드와 동일한 인상)
 *
 * - `left-1/2 -translate-x-1/2` 로 센터 기준 재정렬 (mx-auto 컨테이너 중심 = main 중심)
 * - `w-[calc(100vw-16rem)]` 로 `viewport - sidebar(16rem/256px)` 전체 너비 확보
 * - `-mt-12` 로 상단 py-12 패딩 상쇄
 */
export default function ProductBanner({
  chapter,
  group,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  subtitle,
  gradient,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={headerStaggerVariants}
      className={`relative left-1/2 -translate-x-1/2 w-[calc(100vw-16rem)] -mt-12 mb-12 overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      {/* 대각선 광선 패턴 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(120deg, transparent 0 42px, rgba(255,255,255,0.14) 42px 84px)",
        }}
      />
      <div className="relative flex flex-col items-center px-8 py-20 text-center text-white">
        <motion.div
          variants={headerItemVariants}
          className="mb-5 font-mono text-xs uppercase tracking-widest text-white/85"
        >
          Chapter {String(chapter).padStart(2, "0")} · {group}
        </motion.div>
        <motion.div
          variants={headerItemVariants}
          className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.2)]"
        >
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="h-12 w-auto"
            priority
          />
        </motion.div>
        {subtitle && (
          <motion.p
            variants={headerItemVariants}
            className="max-w-2xl text-base leading-relaxed text-white/95 break-keep"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
