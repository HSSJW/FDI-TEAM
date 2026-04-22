"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CarouselImage } from "@/lib/types";

type Props = {
  images: CarouselImage[];
  /** 자동 전환 주기(ms). 기본 4000 */
  intervalMs?: number;
  /** 슬라이드 전환 지속 시간(ms). 기본 700 */
  transitionMs?: number;
  ariaLabel?: string;
};

/**
 * 16:9 비율의 자동 순환 이미지 슬라이드쇼.
 *
 * 구현 방식: 전체 이미지를 가로로 이어 붙인 스트립을 `translateX` 로 왼쪽으로 밀어내어
 * "오른쪽에서 왼쪽으로" 슬라이드되는 효과를 만듭니다. 마지막 장에 도달하면 첫 장을 복제한
 * 가짜 슬라이드를 하나 더 이어 붙여 끊김 없이 전환되도록 하며, 전환이 끝난 순간
 * 트랜지션을 비활성화한 채 실제 첫 슬라이드로 되돌려 루프를 이어 갑니다.
 *
 * - 마우스 오버 시 자동 재생 일시정지
 * - 하단 도트 인디케이터로 수동 이동
 */
export default function AutoImageCarousel({
  images,
  intervalMs = 4000,
  transitionMs = 700,
  ariaLabel = "자동 이미지 슬라이드쇼",
}: Props) {
  const total = images.length;
  // 마지막 뒤에 첫 장의 복제본을 붙여 seamless 루프를 구현
  const slides = total > 1 ? [...images, images[0]] : images;
  const slideCount = slides.length;

  // index는 strip 상의 위치 (0 ~ slideCount - 1). total 위치는 첫 장의 복제본.
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [paused, setPaused] = useState(false);

  // 자동 다음 장으로 이동
  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [total, paused, intervalMs]);

  // 복제본(index === total)까지 애니메이션 끝난 뒤, 트랜지션을 꺼 놓고 실제 첫 장(index=0)으로 스냅
  useEffect(() => {
    if (total <= 1 || index !== total) return;
    const snapId = setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
    }, transitionMs);
    return () => clearTimeout(snapId);
  }, [index, total, transitionMs]);

  // 스냅 직후 다음 프레임에 트랜지션 재활성화
  useEffect(() => {
    if (transitionEnabled) return;
    let cancelled = false;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        if (!cancelled) setTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
    };
  }, [transitionEnabled]);

  const goTo = (i: number) => {
    setTransitionEnabled(true);
    setIndex(i);
  };

  if (total === 0) return null;

  // 인디케이터 표시용 논리 인덱스 (복제본일 때는 0으로 간주)
  const logicalIndex = index === total ? 0 : index;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden aspect-video rounded-2xl bg-slate-900 border border-slate-200 shadow-md">
        <div
          className="flex h-full"
          style={{
            width: `${slideCount * 100}%`,
            transform: `translateX(-${(index * 100) / slideCount}%)`,
            transition: transitionEnabled
              ? `transform ${transitionMs}ms ease-in-out`
              : "none",
          }}
        >
          {slides.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="relative h-full shrink-0"
              style={{ width: `${100 / slideCount}%` }}
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
      </div>

      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm z-10">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1}번째 사진으로 이동`}
              className={`h-1.5 rounded-full transition-all ${
                i === logicalIndex
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
