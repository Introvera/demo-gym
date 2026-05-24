import { images } from "@/lib/images";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Personal Training",
    description:
      "Being physically and mentally fit is necessary to live happy, long life. Exercise is one of the best.",
  },
  {
    title: "Expert Trainer",
    description:
      "Being physically and mentally fit is necessary to live happy, long life is one of the best.",
  },
  {
    title: "Fiexible Time",
    description:
      "Being physically and mentally fit is necessary to live happy, long life. Exercise is one of the.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div
        className="pointer-events-none absolute -top-16 right-0 h-[380px] w-[380px] rounded-full bg-neon/10 blur-[110px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-8 xl:gap-12">
        <div className="lg:pr-8 xl:pr-12">
          <h2 className="font-[family-name:var(--font-barlow-condensed)] text-[32px] font-bold uppercase leading-[1.12] tracking-tight text-white sm:text-4xl md:text-[42px] lg:text-[49px] xl:text-[58px]">
            Why <span className="text-neon">Should People </span>Choose
            <br />
            Flexflow Services
          </h2>

          <ul className="mt-14 space-y-9 md:mt-16 md:space-y-10">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex gap-4 md:gap-5">
                <span className="mt-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon md:h-8 md:w-8">
                  <Check
                    className="h-3.5 w-3.5 stroke-[3] text-black md:h-4 md:w-4"
                    aria-hidden
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-[22px] font-bold uppercase tracking-wide text-white ">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[420px] text-[14px] leading-[1.75] text-[#fff82]  md:leading-5">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="#membership"
            className="mt-14 inline-flex min-h-[50px] min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#6ef028] via-neon to-[#3dd610] px-12 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_28px_rgba(124,255,58,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black md:mt-16"
          >
            Join Today
          </Link>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] lg:mx-0 lg:ml-auto lg:max-w-none lg:aspect-[3/4] lg:h-[580px] lg:w-full xl:h-[640px] h-full">
          <Image
            src={images.bodybuilder}
            alt="FlexFlow athlete flexing in the gym"
            fill
            className="object-cover object-center [mask-image:linear-gradient(to_left,black_75%,transparent_100%)]"
            sizes="(max-width: 1024px) 90vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
