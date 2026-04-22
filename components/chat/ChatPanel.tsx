"use client";

import { useChat, type Message } from "ai/react";
import { MessageCircle, X, Sparkles, Send } from "lucide-react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ChatMessage from "./ChatMessage";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";
import type { PageId } from "@/lib/pages";

const STORAGE_KEY = "wrapsody-chat-history";

const INITIAL_ASSISTANT_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "안녕하세요! Building AI Data Infrastructure 세션 가이드입니다.\n\n궁금한 점을 자유롭게 물어보세요.",
};

export type ChatPanelHandle = {
  askQuestion: (question: string) => void;
  open: () => void;
};

type Props = {
  onNavigate: (pageId: PageId) => void;
  onHighlight: (pageId: PageId, sectionId: string) => void;
};

function loadStoredMessages(): Message[] {
  if (typeof window === "undefined") return [INITIAL_ASSISTANT_MESSAGE];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [INITIAL_ASSISTANT_MESSAGE];
    const parsed = JSON.parse(raw) as Message[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [INITIAL_ASSISTANT_MESSAGE];
    }
    return parsed;
  } catch {
    return [INITIAL_ASSISTANT_MESSAGE];
  }
}

const ChatPanel = forwardRef<ChatPanelHandle, Props>(function ChatPanel(
  { onNavigate, onHighlight },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [initialMessages] = useState<Message[]>(() => loadStoredMessages());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
  } = useChat({
    api: "/api/chat",
    initialMessages,
    maxSteps: 5,
    onToolCall: async ({ toolCall }) => {
      if (toolCall.toolName === "navigate_to_page") {
        const args = toolCall.args as { page_id: PageId; reason?: string };
        onNavigate(args.page_id);
        return { ok: true };
      }
      if (toolCall.toolName === "highlight_section") {
        const args = toolCall.args as { page_id: PageId; section_id: string };
        onHighlight(args.page_id, args.section_id);
        return { ok: true };
      }
      return undefined;
    },
  });

  useImperativeHandle(
    ref,
    () => ({
      askQuestion: (question: string) => {
        setOpen(true);
        void append({ role: "user", content: question });
      },
      open: () => setOpen(true),
    }),
    [append],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore quota errors
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSuggested = (q: string) => {
    setOpen(true);
    void append({ role: "user", content: q });
  };

  const showSuggested = messages.length <= 1 && !isLoading;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="AI 가이드 열기"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-fuchsia-600 text-white shadow-neon-cyan transition-all hover:scale-105 hover:from-cyan-500 hover:to-fuchsia-500"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-fuchsia-400" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-96 flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/95 shadow-neon-fuchsia backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-cyan-500/25 bg-gradient-to-r from-cyan-800/90 to-fuchsia-900/80 px-5 py-4">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">AI 가이드</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="챗봇 닫기"
              className="text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <ChatMessage key={m.id} message={m} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-cyan-500/20 bg-slate-900/80 px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 typing-dot" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 typing-dot" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showSuggested && (
            <div className="px-4 pb-2">
              <div className="mb-2 font-mono text-xs text-cyan-500/60">
                추천 질문
              </div>
              <div className="space-y-1.5">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggested(q)}
                    className="w-full rounded-lg border border-cyan-500/15 bg-slate-900/60 px-3 py-2 text-left text-xs text-slate-300 transition-all hover:border-cyan-500/40 hover:text-cyan-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="border-t border-cyan-500/20 p-3">
            <div className="flex items-center gap-2 rounded-xl border border-cyan-500/15 bg-slate-900/50 px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="질문을 입력하세요..."
                className="flex-1 border-0 bg-transparent text-sm text-slate-200 placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="메시지 보내기"
                className="text-cyan-400 transition-colors hover:text-cyan-300 disabled:opacity-30"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
});

export default ChatPanel;
