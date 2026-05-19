import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-neon/8 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image — left */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-3xl lg:mx-0 lg:max-w-none">
          <Image
            src={images.aboutPortrait}
            alt="FlexFlow athlete"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 90vw, 50vw"
          />
        </div>

        {/* Text — right */}
        <div className="lg:pl-4">
          <h1 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-[52px] lg:text-[56px]">
            <span className="text-neon">About</span> Us.
          </h1>

          <p className="mt-8 text-sm leading-[1.85] text-white/90 md:text-[15px] md:leading-8">
            Being physically and mentally fit is necessary to live a happy, long life.
            Exercise is one of the best ways to keep a person healthy. Hence, it is
            always best to find a workout routine no matter how busy you are. With the
            workout.
          </p>
          <p className="mt-6 text-sm leading-[1.85] text-white/90 md:text-[15px] md:leading-8">
            Being physically and mentally fit is necessary to live a happy, long life.
            Exercise is one of the best ways to keep a person healthy.
          </p>

          <Link
            href="#programme"
            className="mt-10 inline-flex min-h-[50px] min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#6ef028] via-neon to-[#3dd610] px-12 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_28px_rgba(124,255,58,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-black md:mt-12"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
