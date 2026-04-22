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
      className="block rounded-lg border border-cyan-500/20 bg-slate-900/50 p-3 transition-all hover:border-cyan-400/50 hover:shadow-neon-cyan"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex-1 text-xs font-medium text-slate-200">
          {reference.title}
        </div>
        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 text-cyan-500/50" />
      </div>
      <div className="mb-1 text-xs text-slate-400">{reference.description}</div>
      <span className="inline-block rounded bg-cyan-950/50 px-1.5 py-0.5 font-mono text-xs text-cyan-300">
        {sourceLabel[reference.source]}
      </span>
    </a>
  );
}
