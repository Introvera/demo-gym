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
      className={`text-center font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-[42px] ${className}`}
    >
      {before && <span>{before}</span>}
      {highlight && <span className="text-neon">{highlight}</span>}
      {after && <span>{after}</span>}
    </h2>
  );
}
