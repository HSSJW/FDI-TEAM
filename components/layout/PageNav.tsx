import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentNum: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function PageNav({ currentNum, total, onPrev, onNext }: Props) {
  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-200">
      <button
        onClick={onPrev}
        disabled={currentNum === 1}
        className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        이전
      </button>
      <button
        onClick={onNext}
        disabled={currentNum === total}
        className="flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors group"
      >
        다음
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
