import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", active: true },
  { label: "Pricing", href: "/#membership" },
  { label: "Trainer", href: "/#coaches" },
  { label: "Gallery", href: "/about#programme" },
];

export function AboutHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/90 px-6 pt-8 backdrop-blur-sm md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold tracking-tight md:text-2xl"
        >
          <span className="text-white">Flex</span>
          <span className="text-neon">Flow</span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-sm font-medium tracking-wide transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                link.active ? "text-white" : "text-white/60"
              }`}
            >
              {link.label}
              {link.active && (
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-neon shadow-[0_0_8px_rgba(124,255,58,0.7)]"
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/about#contact"
          className="text-sm font-semibold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
