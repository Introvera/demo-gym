import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Sparkle } from "./Sparkle";
import { ReminderCard } from "./ReminderCard";

function StatBlock({ value, label }: { value: string; label: string }) {
  const numeric = value.replace("+", "");
  return (
    <div>
      <p className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold leading-none text-white md:text-[52px]">
        {numeric}
        <span className="text-neon">+</span>
      </p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a8a]">
        {label}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-140px)] flex-col overflow-hidden pb-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-[22%] z-[1] flex justify-center overflow-hidden select-none"
        aria-hidden
      >
        <span className="whitespace-nowrap font-[family-name:var(--font-barlow-condensed)] text-[clamp(5rem,20vw,15rem)] font-black uppercase leading-none tracking-[-0.02em] text-[#2e2e2e]">
          Flexflow
        </span>
      </div>

      <Sparkle className="absolute left-[6%] top-[30%] z-[2] opacity-90" size={14} />
      <Sparkle className="absolute left-[20%] top-[62%] z-[2] opacity-50" size={11} />
      <Sparkle className="absolute right-[30%] top-[35%] z-[2] opacity-70" size={15} />
      <Sparkle
        className="absolute right-[10%] top-[50%] z-[2] hidden opacity-40 md:block"
        size={10}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-start gap-6 px-6 pt-2 md:px-12 lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,300px)] lg:items-center lg:gap-0 lg:px-16 lg:pt-4">
        <div className="relative z-[30] max-w-[320px] lg:pt-8">
          <p className="text-[13px] leading-[1.7] text-white md:text-sm md:leading-7">
            More Than 500 Fitness Group Classes Per Month, Find Now Friends Who
            Will Motivate Your Fitness Goals.
          </p>

          <Link
            href="#membership"
            className="mt-7 inline-flex min-h-[48px] min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-[#6ef028] via-neon to-[#45d010] px-10 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_32px_rgba(124,255,58,0.4)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Free Pass
          </Link>

          <div className="mt-9 flex gap-14">
            <StatBlock value="20+" label="More Trainee" />
            <StatBlock value="30+" label="Expert Trainer" />
          </div>
        </div>

        <div className="relative z-[20] -order-1 mx-auto w-full max-w-[480px] lg:order-none lg:max-w-[560px] lg:-mt-8">
          <div className="relative mx-auto aspect-[3/4.2] w-full max-h-[72vh]">
            <Image
              src={images.hero}
              alt="Athlete training at FlexFlow gym"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 560px"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        <div className="relative z-[30] hidden justify-end lg:flex lg:pt-4">
          <ReminderCard />
        </div>
      </div>

      <div className="relative z-[30] flex justify-end px-6 lg:hidden">
        <ReminderCard />
      </div>
    </section>
  );
}
