import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";

function CoachCard({
  hours,
  role,
  image,
}: {
  hours: string;
  role: string;
  image: string;
}) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={`${role} with ${hours}+ hours experience`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-16">
        <p className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold text-white">
          More {hours} hr
        </p>
        <p className="mt-1 text-sm capitalize text-white/90">{role}</p>
      </div>
    </article>
  );
}

export function WorkoutCoaches() {
  const [c0, c1, c2, c3, c4] = images.coaches;

  return (
    <section
      id="coaches"
      className="bg-black px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading highlight="Our " after="Workout Coaches." />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CoachCard {...c0} />

          <div className="flex flex-col items-center justify-center px-4 py-12 text-center sm:col-span-2 lg:col-span-1 lg:py-0">
            <p className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold text-white md:text-6xl">
              <span className="text-white">Have</span>
              <span className="ml-2 text-neon">15+</span>
            </p>
            <p className="mt-3 max-w-[220px] text-lg leading-relaxed text-white">
              Profesional Trainer and type of exercises
            </p>
            <Link
              href="#coaches"
              className="mt-8 inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-full border border-white px-8 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              See More
            </Link>
          </div>

          <CoachCard {...c1} />
          <CoachCard {...c2} />
          <CoachCard {...c3} />
          <CoachCard {...c4} />
        </div>
      </div>
    </section>
  );
}
