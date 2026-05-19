import type { ReactNode } from "react";

function BrandLogo({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 items-center justify-center opacity-90 transition-opacity hover:opacity-100">
      {children}
    </div>
  );
}

export function BrandBar() {
  return (
    <div className="relative z-40 px-6 pb-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1200px] rounded-full bg-brand-bar px-8 py-5 md:px-12 md:py-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
          <BrandLogo>
            <span className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold tracking-[0.2em] text-black md:text-2xl">
              ZARA
            </span>
          </BrandLogo>

          <BrandLogo>
            <svg
              viewBox="0 0 69 32"
              className="h-7 w-auto fill-black md:h-8"
              aria-label="Nike"
            >
              <path d="M68.56 4.006c-1.39 3.52-5.28 9.64-8.04 13.14-4.47 5.96-8.9 9.12-13.52 9.12-2.6 0-4.9-1.2-7.02-3.6C45.5 19.5 42.2 12.5 38.5 8.5 34.2 3.8 29.5 1.5 24.5 1.5c-3.2 0-6.1 1.2-8.7 3.6C12.5 8.2 8.5 14.5 4.5 20.5.5 26.5-2 30.5-4 31.5c-.5.3-1 .5-1.5.5-1 0-1.5-.8-1.5-2.4 0-1.2.3-2.5.9-3.9C-3.5 20.5 2 12 8.5 6.5 14.5 1.5 20.5-1 26.5-1c4.5 0 8.5 1.5 12 4.5 3.5 3 7 8.5 10.5 16.5 2.5-4 5-7 7.5-9 3.5-3 7-4.5 10.5-4.5 2 0 3.8.7 5.5 2.006z" />
            </svg>
          </BrandLogo>

          <BrandLogo>
            <svg
              viewBox="0 0 48 48"
              className="h-8 w-8 fill-black"
              aria-label="Reebok"
            >
              <path d="M24 4L8 44h8l4-10h16l4 10h8L24 4zm0 14l6 16h-12l6-16z" />
            </svg>
          </BrandLogo>

          <BrandLogo>
            <svg
              viewBox="0 0 64 32"
              className="h-8 w-auto fill-black"
              aria-label="Puma"
            >
              <path d="M8 28c8-12 16-20 28-24-4 8-6 16-6 24H8zm36-8c6 0 12-2 16-6-4 6-10 10-18 12l2-6z" />
            </svg>
          </BrandLogo>

          <BrandLogo>
            <span className="flex items-center gap-1 font-[family-name:var(--font-barlow-condensed)] text-sm font-bold tracking-wide text-black md:text-base">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-black" aria-hidden>
                <path d="M12 2L4 8v14h6v-8h4v8h6V8L12 2z" />
              </svg>
              UNDER ARMOUR
            </span>
          </BrandLogo>
        </div>
      </div>
    </div>
  );
}
