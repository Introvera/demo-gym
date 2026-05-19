"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const TABS = [
  "All",
  "Signature Class",
  "Cardio",
  "Cycling",
  "Mind And Body",
] as const;

const PROGRAM_MAP = {
  "Signature Class": images.program.signature,
  Cardio: images.program.cardio,
  Cycling: images.program.cycling,
  "Mind And Body": images.program.mindAndBody,
} as const;

type ProgramKey = keyof typeof PROGRAM_MAP;

function getProgramKey(tab: (typeof TABS)[number]): ProgramKey {
  if (tab === "All" || tab === "Signature Class") return "Signature Class";
  return tab as ProgramKey;
}

export function SpecialProgram() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Signature Class");
  const [activeThumb, setActiveThumb] = useState(0);

  const programKey = getProgramKey(activeTab);
  const program = PROGRAM_MAP[programKey];

  const displayImages = [
    program.main[activeThumb % program.main.length],
    program.main[(activeThumb + 1) % program.main.length],
  ];

  const title =
    programKey === "Signature Class"
      ? "Signature Class"
      : programKey === "Mind And Body"
        ? "Mind And Body"
        : programKey;

  return (
    <section
      id="programme"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-neon/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-[280px] w-[280px] rounded-full bg-neon/8 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeading before="Our " highlight="Special" after=" Program." />

        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12 lg:gap-x-16"
          aria-label="Program categories"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setActiveThumb(0);
                }}
                className={`relative px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black md:text-xs ${
                  isActive ? "text-white" : "text-[#5c5c5c] hover:text-[#888]"
                }`}
              >
                {tab}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-neon shadow-[0_0_10px_rgba(124,255,58,0.8)]"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-16 flex flex-col gap-10 lg:mt-20 lg:flex-row lg:items-stretch lg:gap-5">
          <button
            type="button"
            onClick={() => {
              setActiveTab("Mind And Body");
              setActiveThumb(0);
            }}
            className="hidden min-h-[420px] w-[52px] shrink-0 flex-col items-center justify-between rounded-2xl bg-[#e4e4e4] px-2 py-5 transition-colors hover:bg-[#ececec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon lg:flex xl:min-h-[480px] xl:w-[56px]"
            aria-label="View Mind And Body programs"
          >
            <ArrowUpRight className="h-4 w-4 shrink-0 text-black" strokeWidth={2.5} aria-hidden />
            <span
              className="font-[family-name:var(--font-barlow-condensed)] text-[10px] font-bold uppercase leading-none tracking-[0.22em] text-black"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Mind And Body
            </span>
          </button>

          <div className="flex flex-1 justify-center gap-4 md:gap-5 lg:justify-start">
            {displayImages.map((src, i) => (
              <div
                key={`${programKey}-${src}-${i}`}
                className="relative aspect-[3/4.2] w-[42vw] max-w-[220px] overflow-hidden rounded-2xl sm:max-w-[240px] md:max-w-[260px] lg:w-[240px] lg:max-w-none xl:w-[270px]"
              >
                <Image
                  src={src}
                  alt={`${title} workout ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 42vw, 270px"
                />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col justify-center lg:max-w-[360px] lg:pl-6 xl:max-w-[400px] xl:pl-10">
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-[28px] font-bold uppercase leading-tight tracking-wide text-white md:text-[32px]">
              {title}
            </h3>
            <p className="mt-6 text-[13px] leading-[1.85] text-white/85 md:text-sm md:leading-8">
              Being physically and mentally fit is necessary to live a happy, long life.
              Exercise is one of the best ways to keep a person healthy. Hence, it is
              always best to find a workout routine no matter how busy you are. With the
              workout.
            </p>

            <div className="mt-10 flex items-center gap-5">
              {program.thumbs.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveThumb(i)}
                  className={`relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    activeThumb === i
                      ? "ring-[3px] ring-neon ring-offset-[3px] ring-offset-black"
                      : "ring-2 ring-white/50 ring-offset-2 ring-offset-black"
                  }`}
                  aria-label={`Select workout image ${i + 1}`}
                  aria-pressed={activeThumb === i}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="52px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
