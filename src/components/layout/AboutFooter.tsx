export function AboutFooter() {
  return (
    <footer id="contact" className="bg-forest px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <h2 className="text-center font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-[42px]">
          <span className="text-neon">Feel Great.</span> Body And Mind.
        </h2>

        <hr className="mx-auto mt-12 max-w-[1100px] border-white/25" />

        <div className="mt-12 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:gap-4 md:text-left">
          <a
            href="tel:+484537844289"
            className="font-[family-name:var(--font-barlow-condensed)] text-base font-bold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon md:text-lg"
          >
            +4845 3784 4289
          </a>
          <a
            href="mailto:shawonuiuxpro@gmail.com"
            className="font-[family-name:var(--font-barlow-condensed)] text-base font-bold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon md:text-lg"
          >
            shawonuiuxpro@gmail.com
          </a>
          <p className="font-[family-name:var(--font-barlow-condensed)] text-base font-bold text-white md:text-lg">
            Toronto City in Canada.
          </p>
        </div>

        <p className="mt-12 text-center text-sm text-white/60">
          All Copyrights Reserved @Flexflow 2025
        </p>
      </div>
    </footer>
  );
}
