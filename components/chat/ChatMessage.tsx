import type { Message, ToolInvocation } from "ai";
import ReferenceCard from "./ReferenceCard";
import type { Reference } from "@/lib/types";

type Props = {
  message: Message;
};

type FindReferencesResult = {
  query: string;
  items: Reference[];
  note?: string;
};

function isFindReferencesResult(v: unknown): v is FindReferencesResult {
  if (!v || typeof v !== "object") return false;
  const obj = v as Record<string, unknown>;
  return Array.isArray(obj.items);
}

function extractActionLog(invocations: ToolInvocation[] | undefined): string[] {
  if (!invocations) return [];
  return invocations
    .map((inv) => {
      if (inv.toolName === "navigate_to_page") {
        const args = inv.args as { page_id?: string } | undefined;
        return `navigate_to_page("${args?.page_id ?? ""}")`;
      }
      if (inv.toolName === "highlight_section") {
        const args = inv.args as { section_id?: string } | undefined;
        return `highlight_section("${args?.section_id ?? ""}")`;
      }
      if (inv.toolName === "find_references") {
        const args = inv.args as { query?: string } | undefined;
        return `find_references("${args?.query ?? ""}")`;
      }
      return inv.toolName;
    })
    .filter(Boolean);
}

function extractReferences(invocations: ToolInvocation[] | undefined): Reference[] {
  if (!invocations) return [];
  const refs: Reference[] = [];
  for (const inv of invocations) {
    if (inv.toolName !== "find_references") continue;
    if (inv.state !== "result") continue;
    const result = (inv as { result: unknown }).result;
    if (isFindReferencesResult(result)) {
      refs.push(...result.items);
    }
  }
  return refs;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";
  const references = extractReferences(message.toolInvocations);
  const actionLog = extractActionLog(message.toolInvocations);
  const text = message.content ?? "";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] ${
          isUser
            ? "bg-blue-600 text-white rounded-2xl rounded-br-sm"
            : "bg-slate-50 text-slate-800 rounded-2xl rounded-bl-sm"
        } px-4 py-3 text-sm leading-relaxed whitespace-pre-line`}
      >
        {text}
        {references.length > 0 && (
          <div className="mt-3 space-y-2">
            {references.map((ref) => (
              <ReferenceCard key={ref.id} reference={ref} />
            ))}
          </div>
        )}
        {actionLog.length > 0 && !isUser && (
          <div className="mt-2 pt-2 border-t border-slate-200 text-xs text-slate-500 font-mono">
            → {actionLog.join(" · ")}
          </div>
        )}
      </div>
    </div>
  );
}
