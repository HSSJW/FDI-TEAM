import { AlertCircle } from "lucide-react";

type Props = {
  title?: string;
  description?: string;
};

export default function ContentComingSoon({
  title = "실제 시연 콘텐츠 준비 중",
  description = "시연 영상·이미지가 준비되는 대로 이 영역에 추가됩니다.",
}: Props) {
  return (
    <div className="border-2 border-dashed border-slate-200 bg-blue-50/40 rounded-xl p-12 flex flex-col items-center justify-center text-center">
      <AlertCircle className="w-8 h-8 text-slate-400 mb-3" />
      <div className="font-display text-lg text-slate-700 mb-1">{title}</div>
      <p className="text-sm text-slate-500 leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  );
}
