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

export default function PageHeader({ num, title, subtitle, group }: Props) {
  return (
    <motion.div
      className="mb-12"
      initial="hidden"
      animate="show"
      variants={headerStaggerVariants}
    >
      <motion.div
        className="flex items-center gap-3 mb-4"
        variants={headerItemVariants}
      >
        <span className="text-xs font-mono text-blue-600 tracking-widest uppercase">
          Chapter {String(num).padStart(2, "0")} · {group}
        </span>
      </motion.div>
      <motion.h1
        className="font-display text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-4"
        variants={headerItemVariants}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-lg text-slate-600 leading-relaxed max-w-2xl"
          variants={headerItemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
