"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselImage } from "@/lib/types";

type Props = {
  images: CarouselImage[];
  ariaLabel?: string;
  /** 0이면 자동 전환이 꺼짐. 밀리초(기본 2000) */
  autoIntervalMs?: number;
};

export default function ImageCarousel({
  images,
  ariaLabel = "이미지 캐러셀",
  autoIntervalMs = 2000,
}: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const rootRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    if (total <= 0) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    if (total <= 0) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1 || !autoIntervalMs) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoIntervalMs);
    return () => window.clearInterval(id);
  }, [total, autoIntervalMs]);

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

  if (total === 0) {
    return (
      <div className="rounded-xl border border-cyan-500/25 bg-slate-900/40 p-8 text-center text-sm text-slate-500">
        표시할 이미지가 없습니다.
      </div>
    );
  }

  const current = images[index];
  const single = total <= 1;
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
      className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
    >
      <div className="relative">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-cyan-500/25 bg-slate-900/60 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)]">
          <div
            className="carousel-track flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none will-change-transform"
            style={{
              width: `${total * 100}%`,
              transform: `translate3d(-${(index * 100) / total}%, 0, 0)`,
            }}
          >
            {images.map((item, i) => (
              <div
                key={item.src}
                className="h-full flex-shrink-0"
                style={{ width: `${100 / total}%` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          disabled={single}
          aria-label="이전 이미지"
          className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950/90 shadow-neon-cyan transition-all hover:border-cyan-400/60 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-cyan-500/30"
        >
          <ChevronLeft className="h-5 w-5 text-cyan-200" />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={single}
          aria-label="다음 이미지"
          className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/30 bg-slate-950/90 shadow-neon-cyan transition-all hover:border-cyan-400/60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5 text-cyan-200" />
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
                  ? "w-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-neon-cyan"
                  : "w-1.5 bg-slate-600 hover:bg-cyan-500/50"
              }`}
            />
          ))}
        </div>
        <div className="font-mono text-xs text-cyan-400/80">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {displayCaption && (
        <div className="mt-3 flex items-start gap-2">
          <p className="flex-1 text-sm text-slate-400">{displayCaption}</p>
          {needsReview && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-fuchsia-500/45 bg-fuchsia-950/50 px-2 py-0.5 text-xs font-medium text-fuchsia-200">
              <AlertCircle className="w-3 h-3" />
              확인 필요
            </span>
          )}
        </div>
      )}
    </div>
  );
}
