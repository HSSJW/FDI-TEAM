type Props = {
  num: number;
  title: string;
  subtitle?: string;
  group: string;
};

export default function PageHeader({ num, title, subtitle, group }: Props) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-blue-600 tracking-widest uppercase">
          Chapter {String(num).padStart(2, "0")} · {group}
        </span>
      </div>
      <h1 className="font-display text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
