import { ExternalLink } from "lucide-react";
import type { Reference } from "@/lib/types";

type Props = {
  reference: Reference;
};

const sourceLabel: Record<Reference["source"], string> = {
  fasoo: "Fasoo",
  sparrow: "Sparrow",
};

export default function ReferenceCard({ reference }: Props) {
  return (
    <a
      href={reference.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-slate-200 rounded-lg p-3 hover:border-blue-400 transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="text-xs font-medium text-slate-900 flex-1">
          {reference.title}
        </div>
        <ExternalLink className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
      </div>
      <div className="text-xs text-slate-500 mb-1">{reference.description}</div>
      <span className="inline-block text-xs font-mono px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded">
        {sourceLabel[reference.source]}
      </span>
    </a>
  );
}
