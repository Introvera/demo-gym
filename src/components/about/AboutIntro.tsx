import { images } from "@/lib/images";
import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-6 md:px-12 md:py-24 lg:px-16 lg:pt-34">
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-neon/8 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image — left */}
        <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[440px] overflow-hidden rounded-3xl lg:mx-0 lg:max-w-none">
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

          <p className="mt-4 text-sm leading-[1.85] text-white/90 md:text-[18px] md:leading-7">
            VeraFit is built for people who want real progress, not just a
            routine. We combine smart programming, disciplined coaching, and a
            high-energy training environment so every session moves you closer
            to your goal.
          </p>

          <p className="mt-4 text-sm leading-[1.85] text-white/90 md:text-[18px] md:leading-7">
            From strength and cardio to mobility and recovery, our classes are
            designed to challenge your body, build confidence, and keep you
            coming back stronger. We believe fitness should feel intense,
            focused, and achievable for everyone.
          </p>

          <p className="mt-4 text-sm leading-[1.85] text-white/90 md:text-[18px] md:leading-7">
            Our coaching staff blends industry-leading certification with real
            world experience. Every coach programs with intent — scaling
            workouts, tracking progress, and offering adjustments so you train
            smarter and safer.
          </p>

          <p className="mt-4 text-sm leading-[1.85] text-white/90 md:text-[18px] md:leading-7">
            Beyond workouts, VeraFit is a community. We run regular member
            challenges, socials, and workshops that keep motivation high and
            make consistency a little bit easier. You'll find people here who
            support your journey every step of the way.
          </p>

          <p className="mt-4 text-sm leading-[1.85] text-white/90 md:text-[18px] md:leading-7">
            Whether you are starting fresh or pushing toward a new personal
            best, our team is here to guide your journey with structure,
            motivation, and the right environment to stay consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
