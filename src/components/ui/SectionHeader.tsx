interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${centered ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            light
              ? "bg-white/10 text-brand-mint border border-white/20"
              : "bg-brand-aqua text-brand-teal border border-brand-teal/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
