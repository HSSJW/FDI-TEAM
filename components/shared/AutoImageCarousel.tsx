"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CarouselImage } from "@/lib/types";

type Props = {
  images: CarouselImage[];
  /** 밀리초 단위 자동 전환 주기. 기본 4000 */
  intervalMs?: number;
  ariaLabel?: string;
};

/**
 * 16:9 비율의 자동 순환 이미지 슬라이드쇼.
 * - 일정 주기로 다음 이미지로 넘어가며, 마지막 장 다음에는 처음으로 돌아갑니다.
 * - 포인터가 올라오면 일시정지합니다.
 * - 하단의 점 인디케이터 클릭으로 수동 이동 가능.
 */
export default function AutoImageCarousel({
  images,
  intervalMs = 4000,
  ariaLabel = "자동 이미지 슬라이드쇼",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (total <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total, intervalMs, paused]);

  if (total === 0) return null;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-200">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번째 사진으로 이동`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
