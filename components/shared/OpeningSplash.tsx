"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const STORAGE_KEY = "fdi-2026-opening-seen";
const AUTO_DISMISS_MS = 5000;

/**
 * 최초 1회만 재생되는 풀스크린 오프닝 스플래시.
 * - `localStorage[STORAGE_KEY]` 에 플래그가 없으면 표시
 * - 5초 뒤 자동 종료 (진행바 표시)
 * - 클릭 / ESC / Enter / Space 로 건너뛰기 가능
 * - 나중에 실제 동영상 자산이 생기면 배경 이미지 대신 `<video>` 로 교체 가능
 */
export default function OpeningSplash() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // 최초 마운트 시 localStorage 확인 후 노출 여부 결정
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // Private mode 등에서 localStorage 접근 실패 → 그냥 보여주고 끝냄
      setVisible(true);
    }
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  }, []);

  // 진행바 + 자동 종료 + 키보드 핸들러
  useEffect(() => {
    if (!visible) return;

    const startedAt = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const ratio = Math.min(elapsed / AUTO_DISMISS_MS, 1);
      setProgress(ratio);
      if (elapsed >= AUTO_DISMISS_MS) {
        dismiss();
        return;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, dismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden cursor-pointer"
          role="dialog"
          aria-modal="true"
          aria-label="FDI 2026 오프닝"
          onClick={dismiss}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 배경 이미지 */}
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/backgrounds/fasoo-hero.png')" }}
          />
          {/* 네이비 오버레이 (#001434 @ 90%) + 중심 방사형 하이라이트 */}
          <div aria-hidden className="absolute inset-0 bg-[#001434]/90" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 60%)",
            }}
          />

          {/* Skip 버튼 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded border border-white/20 hover:border-white/50"
            aria-label="오프닝 건너뛰기"
          >
            Skip →
          </button>

          {/* 본문 */}
          <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-8 text-white">
            <motion.div
              className="flex items-center gap-2 mb-10 text-xs font-mono tracking-widest uppercase text-white/85"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              FDI 2026 Symposium · Track 5
            </motion.div>

            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building
            </motion.h1>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mt-2 mb-14 text-blue-300"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              AI Data Infrastructure
            </motion.h1>

            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Speaker
              </div>
              <div className="text-base md:text-lg text-white/90 break-keep">
                김용길 본부장 · Fasoo
              </div>
            </motion.div>
          </div>

          {/* 힌트 + 진행바 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
            <motion.div
              className="font-mono text-[11px] tracking-widest uppercase text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              클릭 / ESC 로 건너뛰기
            </motion.div>
            <div className="w-52 h-0.5 bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
