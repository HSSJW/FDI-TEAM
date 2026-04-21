import { PAGES, type PageId } from "@/lib/pages";

type Props = {
  currentPageId: PageId;
  onNavigate: (pageId: PageId) => void;
};

const GROUPS = ["진입", "문제", "분석", "해결", "결론"] as const;

export default function Sidebar({ currentPageId, onNavigate }: Props) {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-slate-50/50 overflow-y-auto scrollable">
      <nav className="p-6">
        {GROUPS.map((group) => {
          const groupPages = PAGES.filter((p) => p.group === group);
          if (groupPages.length === 0) return null;
          return (
            <div key={group} className="mb-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 px-2 font-mono">
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
                        ? "bg-blue-600 text-white font-medium"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono ${
                        isActive ? "text-blue-200" : "text-slate-400"
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
