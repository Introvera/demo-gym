export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:gap-4 md:text-left">
          <a
            href="tel:+484537844289"
            className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
          >
            +4845 3784 4289
          </a>
          <a
            href="mailto:shawonuiuxpro@gmail.com"
            className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon"
          >
            shawonuiuxpro@gmail.com
          </a>
          <p className="font-[family-name:var(--font-barlow-condensed)] text-lg font-bold text-white">
            Toronto City in Canada.
          </p>
        </div>

        <p className="mt-12 text-center text-sm text-[#8a8a8a]">
          All Copyrights Reserved @Flexflow 2025
        </p>
      </div>
    </footer>
  );
}
