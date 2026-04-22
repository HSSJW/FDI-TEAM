import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wrapsody 소개 — AI Data Infrastructure",
  description:
    "Fasoo FDI 2026 Symposium T05 세션 내용을 12개의 학습 페이지와 AI 가이드 챗봇으로 재구성한 Wrapsody 소개 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased text-slate-200">
        {/* 맨 뒤(z-0) — 콘텐츠(.app-frame z-10)에 가리지 않음, 클릭도 통과 */}
        <div className="scene-backdrop" aria-hidden />
        <div className="app-frame relative z-10 min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
