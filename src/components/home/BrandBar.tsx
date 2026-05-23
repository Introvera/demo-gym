"use client";

import { useEffect, useRef } from "react";

// Use local images from public/ when available
const BRANDS = [
  {
    key: "nike",
    content: (
      <img
        src="/Nike-Logo-1978.png"
        alt="Nike"
        className="h-8 md:h-10 w-auto object-contain"
      />
    ),
  },
  {
    key: "adidas",
    content: (
      <img
        src="/Adidas-Logo-1991.png"
        alt="Adidas"
        className="h-8 md:h-10 w-auto object-contain"
      />
    ),
  },
  {
    key: "underarmour",
    content: (
      <img
        src="/Under_Armour-Logo.wine.png"
        alt="Under Armour"
        className="h-8 md:h-10 w-auto object-contain"
      />
    ),
  },
  {
    key: "gymshark",
    content: (
      <img
        src="/Gymshark-Logo-old.png"
        alt="Gymshark Logo"
        className="h-8 md:h-10 w-auto object-contain"
      />
    ),
  },
  {
    key: "reebok",
    content: (
      <img
        src="/Reebok_2019_logo.png"
        alt="Reebok Logo"
        className="h-8 md:h-10 w-auto object-contain"
      />
    ),
  },
];

export function BrandBar() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const speed = 40; // pixels per second

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;
    const el = trackEl as HTMLDivElement;

    let rafId: number | null = null;
    let last = performance.now();

    function step(now: number) {
      const elapsed = now - last;
      last = now;
      // advance scrollLeft
      if (el.scrollWidth > el.clientWidth) {
        const delta = (speed * elapsed) / 1000;
        el.scrollLeft = (el.scrollLeft + delta) % (el.scrollWidth / 2);
      }
      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div className="relative z-40 px-6 pb-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-full bg-brand-bar px-4 py-3 md:px-6 md:py-4">
        <div
          ref={trackRef}
          className="no-scrollbar flex w-full gap-8 whitespace-nowrap overflow-hidden px-2"
          aria-hidden
        >
          {/* render brands twice for seamless loop */}
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div
              key={`${b.key}-${i}`}
              className="flex min-w-[120px] items-center justify-center"
            >
              {b.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
