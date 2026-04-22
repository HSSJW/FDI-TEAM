import type { Message, ToolInvocation } from "ai";
import { ArrowRight, Target, BookOpen } from "lucide-react";
import ReferenceCard from "./ReferenceCard";
import { getPage, PAGE_IDS, type PageId } from "@/lib/pages";
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

function isPageId(v: unknown): v is PageId {
  return typeof v === "string" && (PAGE_IDS as string[]).includes(v);
}

type ActionBadge = {
  key: string;
  icon: "navigate" | "highlight" | "search";
  label: string;
};

function extractActionBadges(
  invocations: ToolInvocation[] | undefined,
): ActionBadge[] {
  if (!invocations) return [];
  const badges: ActionBadge[] = [];
  invocations.forEach((inv, idx) => {
    if (inv.toolName === "navigate_to_page") {
      const args = inv.args as { page_id?: unknown } | undefined;
      const pid = args?.page_id;
      if (isPageId(pid)) {
        const page = getPage(pid);
        badges.push({
          key: `nav-${idx}`,
          icon: "navigate",
          label: `${String(page.num).padStart(2, "0")}. ${page.title} 페이지로 이동`,
        });
      }
    } else if (inv.toolName === "highlight_section") {
      const args = inv.args as
        | { page_id?: unknown; section_id?: unknown }
        | undefined;
      const sid =
        typeof args?.section_id === "string" ? args.section_id : undefined;
      if (sid) {
        badges.push({
          key: `hl-${idx}`,
          icon: "highlight",
          label: `관련 섹션을 강조`,
        });
      }
    } else if (inv.toolName === "find_references") {
      const args = inv.args as { query?: unknown } | undefined;
      const q = typeof args?.query === "string" ? args.query : "";
      badges.push({
        key: `ref-${idx}`,
        icon: "search",
        label: q ? `"${q}" 관련 자료 조회` : "관련 자료 조회",
      });
    }
  });
  return badges;
}

function extractReferences(
  invocations: ToolInvocation[] | undefined,
): Reference[] {
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

function ActionBadgeRow({ badge }: { badge: ActionBadge }) {
  const Icon =
    badge.icon === "navigate"
      ? ArrowRight
      : badge.icon === "highlight"
        ? Target
        : BookOpen;
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700">
      <Icon className="w-3 h-3 shrink-0" />
      <span>{badge.label}</span>
    </div>
  );
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";
  const references = extractReferences(message.toolInvocations);
  const badges = extractActionBadges(message.toolInvocations);
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
        {!isUser && badges.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {badges.map((b) => (
              <ActionBadgeRow key={b.key} badge={b} />
            ))}
          </div>
        )}
        {references.length > 0 && (
          <div className="mt-3 space-y-2">
            {references.map((ref) => (
              <ReferenceCard key={ref.id} reference={ref} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
