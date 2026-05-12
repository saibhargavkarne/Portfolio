interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-2">
        {eyebrow}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h1>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
