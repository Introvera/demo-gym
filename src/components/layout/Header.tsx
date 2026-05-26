"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActiveLink(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/blog")
      return pathname === "/blog" || pathname.startsWith("/blog/");
    if (href === "/contact") return pathname === "/contact";
    return pathname === href;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-black/80 px-6 pt-4 backdrop-blur-sm transition-transform duration-300 ease-out md:px-12 lg:px-16 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between pb-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold tracking-tight md:text-4xl"
        >
          <span className="text-white">Vera</span>
          <span className="text-neon">Fit</span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-10"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-lg font-medium tracking-wide text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isActiveLink(link.href) ? "text-white" : "text-white/90"
              }`}
            >
              {link.label}
              {isActiveLink(link.href) && (
                <span
                  className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-neon"
                  aria-hidden
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden rounded-full bg-gradient-to-r from-[#6ef03] via-neon to-[#4d019] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_32px_rgba(124,255,58,0.4)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black md:block">
          <Link
            href="#membership"
            className="text-sm font-semibold text-white transition-colors hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-neon hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <nav
          className="mx-auto mt-4 flex max-w-screen-xl flex-col gap-2 rounded-[24px] border border-white/10 bg-black/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-full px-4 py-3 text-base font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isActiveLink(link.href)
                  ? "bg-white/10 text-neon"
                  : "text-white/90 hover:bg-white/5 hover:text-neon"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#membership"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex min-h-[46px] items-center justify-center rounded-full bg-gradient-to-r from-[#6ef03] via-neon to-[#4d019] px-5 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-[0_4px_24px_rgba(124,255,58,0.35)]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
