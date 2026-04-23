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
/** 이전 버전에서 localStorage에 남아있을 수 있는 레거시 키. 마운트 시 정리. */
const LEGACY_LOCAL_KEY = "wrapsody-chat-history";

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

/**
 * sessionStorage에 저장된 대화 내역을 불러옵니다.
 *
 * 세션 스코프이므로 탭을 닫으면 초기화됩니다 (오프닝 스플래시와 동일 정책).
 *
 * 안전장치:
 *   - 툴 호출이 포함된 assistant 메시지는 제거합니다. 툴 호출/결과 페어링이
 *     깨진 채로 모델에 전송되면 /api/chat 이 500을 반환할 수 있습니다.
 *   - 레거시 localStorage 키가 남아있으면 동시에 비웁니다.
 */
function loadStoredMessages(): Message[] {
  if (typeof window === "undefined") return [INITIAL_ASSISTANT_MESSAGE];

  // 과거 버전에서 localStorage에 저장된 레거시 기록 정리
  try {
    window.localStorage.removeItem(LEGACY_LOCAL_KEY);
  } catch {
    // ignore
  }

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [INITIAL_ASSISTANT_MESSAGE];
    const parsed = JSON.parse(raw) as Message[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [INITIAL_ASSISTANT_MESSAGE];
    }
    // 툴 호출이 섞인 메시지는 제거 (서버에서 페어링 실패 시 500)
    const safe = parsed.filter((m) => {
      const toolCalls = (m as unknown as { toolInvocations?: unknown[] })
        .toolInvocations;
      return !Array.isArray(toolCalls) || toolCalls.length === 0;
    });
    if (safe.length === 0) return [INITIAL_ASSISTANT_MESSAGE];
    return safe;
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
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
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
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 z-40"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700">
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
                <div className="bg-slate-50 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showSuggested && (
            <div className="px-4 pb-2">
              <div className="text-xs text-slate-400 mb-2 font-mono">
                추천 질문
              </div>
              <div className="space-y-1.5">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggested(q)}
                    className="w-full text-left text-xs px-3 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200">
            <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="질문을 입력하세요..."
                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="메시지 보내기"
                className="text-blue-600 hover:text-blue-700 disabled:opacity-30"
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
