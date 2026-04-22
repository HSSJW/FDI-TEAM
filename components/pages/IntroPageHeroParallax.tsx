"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * 히어로 래퍼(상대 위치). 이전에 격자+패럴랙스용 레이어는 제거됨.
 */
export default function IntroPageHeroParallax({ children, className }: Props) {
  return <div className={`relative ${className ?? ""}`}>{children}</div>;
}
