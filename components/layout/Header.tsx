type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Header({ currentPage, totalPages }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-cyan-500/20 bg-slate-950/85 backdrop-blur-md shadow-neon-soft">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-cyan-400 shadow-neon-cyan" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-100">
              FDI 2026
            </span>
          </div>
          <span className="text-slate-500">|</span>
          <span className="text-sm font-medium text-slate-400">
            Building AI Data Infrastructure
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-cyan-400/90">
            {String(currentPage).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </div>
          <div className="h-1 w-32 overflow-hidden rounded-full bg-slate-800/80">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-all duration-500"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
