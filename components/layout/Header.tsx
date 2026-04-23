import Image from "next/image";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Header({ currentPage, totalPages }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/fasoo-icon.png"
            alt="Fasoo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg shadow-sm"
            priority
          />
          <span className="font-display text-lg font-semibold text-slate-900 tracking-tight">
            FDI 2026
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-sm text-slate-600 font-medium">
            Building AI Data Infrastructure
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <div className="text-xs text-slate-500 font-mono">
            {String(currentPage).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </div>
          <div className="w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(currentPage / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
