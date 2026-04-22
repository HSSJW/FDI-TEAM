import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentNum: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function PageNav({ currentNum, total, onPrev, onNext }: Props) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-cyan-500/20 pt-8">
      <button
        onClick={onPrev}
        disabled={currentNum === 1}
        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft className="w-4 h-4" />
        이전
      </button>
      <button
        onClick={onNext}
        disabled={currentNum === total}
        className="group flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        다음
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
