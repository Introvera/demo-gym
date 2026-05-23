type SectionHeadingProps = {
  before?: string;
  highlight?: string;
  after?: string;
  className?: string;
};

export function SectionHeading({
  before = "",
  highlight = "",
  after = "",
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-center font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-7xl ${className}`}
    >
      {before && <span>{before}</span>}
      {highlight && <span className="text-neon">{highlight}</span>}
      {after && <span>{after}</span>}
    </h2>
  );
}
