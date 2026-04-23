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
 * 풀컬러 그라데이션 + 대각선 광선 패턴 위에 공식 로고를 하얀 카드로 띄워 가독성 확보.
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
      className={`relative -mx-12 -mt-12 mb-12 overflow-hidden rounded-b-3xl bg-gradient-to-br ${gradient}`}
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
      <div className="relative flex flex-col items-center px-8 py-16 text-center text-white">
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
