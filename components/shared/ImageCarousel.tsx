"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselImage } from "@/lib/types";

type Props = {
  images: CarouselImage[];
  ariaLabel?: string;
  /** 자동 전환 간격(ms). 0이면 꺼짐. 기본 3500ms */
  autoIntervalMs?: number;
};

export default function ImageCarousel({
  images,
  ariaLabel = "이미지 캐러셀",
  autoIntervalMs = 3500,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const rootRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    if (total === 0) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    if (total === 0) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  // 키보드 좌우 방향키 지원
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // 자동 전환 (호버 시 일시정지)
  useEffect(() => {
    if (total <= 1 || !autoIntervalMs || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoIntervalMs);
    return () => window.clearInterval(id);
  }, [total, autoIntervalMs, paused]);

  if (total === 0) {
    return (
      <div className="border border-slate-200 rounded-xl p-8 text-sm text-slate-500 text-center">
        표시할 이미지가 없습니다.
      </div>
    );
  }

  const current = images[index];
  const needsReview = current.caption?.includes("[확인 필요]");
  const displayCaption = needsReview
    ? current.caption?.replace("[확인 필요]", "").trim()
    : current.caption;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
    >
      <div className="relative">
        <div className="aspect-video bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
          <div key={index} className="w-full h-full carousel-fade relative">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-contain"
              priority={index === 0}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          aria-label="이전 이미지"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:border-blue-400 hover:shadow-lg transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="다음 이미지"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:border-blue-400 hover:shadow-lg transition-all"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번째 이미지로 이동`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-blue-600"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <div className="text-xs font-mono text-slate-500">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {displayCaption && (
        <div className="mt-3 flex items-start gap-2">
          <p className="text-sm text-slate-600 flex-1">{displayCaption}</p>
          {needsReview && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium shrink-0">
              <AlertCircle className="w-3 h-3" />
              확인 필요
            </span>
          )}
        </div>
      )}
    </div>
  );
}
