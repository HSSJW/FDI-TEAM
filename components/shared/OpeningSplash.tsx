"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const STORAGE_KEY = "fdi-2026-opening-seen";
const AUTO_DISMISS_MS = 8000;
/** 파수 아이콘이 혼자 화면 중앙에 머무는 시간. 이후 왼쪽으로 이동하며 텍스트가 등장. */
const ICON_SOLO_MS = 800;
/** 타이틀 페이즈 총 시간. 이 시간이 지나면 메인 시퀀스로 전환. */
const TITLE_TOTAL_MS = 2800;

type Phase = "title" | "main";
type TitleStep = "icon" | "icon-text";

/**
 * 최초 1회만 재생되는 풀스크린 오프닝 스플래시.
 *
 * 재생 흐름:
 *   0.0s ~ 0.7s : 파수 아이콘 페이드 + 스케일 인 (화면 정중앙)
 *   0.8s ~ 1.4s : 아이콘이 왼쪽으로 슬라이드(layout 애니메이션),
 *                 동시에 오른쪽에 "FASOO | AI" 텍스트 페이드 인
 *   1.4s ~ 2.8s : [아이콘] FASOO | AI 전체 유지 (약 1.5초)
 *   2.8s ~ 3.3s : 타이틀 페이드 아웃 (AnimatePresence exit)
 *   3.3s 이후   : 메인 시퀀스 — FDI 2026 chip → Building →
 *                 AI Data Infrastructure → Speaker 블록이 스태거로 등장
 *   8.0s        : 자동 종료 (AUTO_DISMISS_MS)
 *
 * 동작:
 *   - `localStorage[STORAGE_KEY]` 에 플래그가 없으면 최초 1회 노출
 *   - 클릭 / ESC / Enter / Space 로 즉시 스킵
 *   - 나중에 실제 동영상 자산이 생기면 배경 이미지를 <video> 로 교체 가능
 */
export default function OpeningSplash() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<Phase>("title");
  const [titleStep, setTitleStep] = useState<TitleStep>("icon");

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

  // 타이틀 서브스텝 + 페이즈 타이머
  useEffect(() => {
    if (!visible) return;
    const t1 = window.setTimeout(() => setTitleStep("icon-text"), ICON_SOLO_MS);
    const t2 = window.setTimeout(() => setPhase("main"), TITLE_TOTAL_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [visible]);

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

          {/* 본문 — 타이틀 카드 → 메인 시퀀스 */}
          <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-8 text-white">
            <AnimatePresence mode="wait">
              {phase === "title" ? (
                <motion.div
                  key="title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center gap-5 md:gap-7"
                >
                  {/* 파수 아이콘 — 처음엔 단독으로 중앙, 텍스트 등장 시 layout 애니메이션으로 왼쪽 이동 */}
                  <motion.div
                    layout
                    transition={{
                      layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.7, ease: "easeOut" },
                      scale: { duration: 0.7, ease: "easeOut" },
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="shrink-0"
                  >
                    <Image
                      src="/logos/fasoo-icon.png"
                      alt=""
                      aria-hidden
                      width={512}
                      height={512}
                      priority
                      className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-[0_10px_40px_rgba(59,130,246,0.45)]"
                    />
                  </motion.div>

                  {/* FASOO | AI 텍스트 — 아이콘이 이동하면서 동시에 등장 */}
                  {titleStep === "icon-text" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
                      className="flex items-baseline gap-5 md:gap-6"
                    >
                      <span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-wide">
                        FASOO
                      </span>
                      <span className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white/30">
                        |
                      </span>
                      <span className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-wide text-blue-300">
                        AI
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="main"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 힌트 + 진행바 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none">
            {phase === "main" && (
              <motion.div
                className="font-mono text-[11px] tracking-widest uppercase text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.8 }}
              >
                클릭 / ESC 로 건너뛰기
              </motion.div>
            )}
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
