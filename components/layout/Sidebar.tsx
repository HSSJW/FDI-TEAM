import { PAGES, type PageId } from "@/lib/pages";

type Props = {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
};

const GROUPS = ["진입", "문제", "분석", "해결", "결론"] as const;

export default function Sidebar({ currentPageId, onNavigate }: Props) {
  return (
    <aside className="w-64 shrink-0 overflow-y-auto scrollable border-r border-cyan-500/15 bg-slate-950/60">
      <nav className="p-6">
        {GROUPS.map((group) => {
          const groupPages = PAGES.filter((p) => p.group === group);
          if (groupPages.length === 0) return null;
          return (
            <div key={group} className="mb-6">
              <div className="mb-2 px-2 font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">
                {group}
              </div>
              {groupPages.map((page) => {
                const isActive = page.id === currentPageId;
                return (
                  <button
                    key={page.id}
                    onClick={() => onNavigate(page.id)}
                    className={`w-full text-left px-2 py-2 rounded-md text-sm transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-600/90 to-cyan-600/60 font-medium text-white shadow-neon-cyan"
                        : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-200"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono ${
                        isActive ? "text-cyan-100" : "text-slate-500"
                      }`}
                    >
                      {String(page.num).padStart(2, "0")}
                    </span>
                    <span className="truncate">{page.title}</span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
