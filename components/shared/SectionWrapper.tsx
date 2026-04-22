"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionRevealVariants } from "@/lib/page-motion";

type Props = {
  id: string;
  highlightedId: string | null;
  children: ReactNode;
  className?: string;
  /** 스크롤 reveal 순서(0부터). 페이지 내 상단일수록 작은 값을 주면 위에서부터 순차 등장. */
  revealIndex?: number;
};

export default function SectionWrapper({
  id,
  highlightedId,
  children,
  className = "",
  revealIndex = 0,
}: Props) {
  const isHighlighted = highlightedId === id;
  return (
    <motion.section
      id={`section-${id}`}
      data-section-id={id}
      custom={revealIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -5% 0px", amount: 0.12 }}
      variants={sectionRevealVariants}
      className={`scroll-mt-24 transition-all rounded-r ${
        isHighlighted ? "highlight-active border-blue-600" : ""
      } ${className}`}
    >
      {children}
    </motion.section>
  );
}
