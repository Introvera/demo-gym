import { images } from "@/lib/images";
import Image from "next/image";

const PROGRAMS = [
  {
    title: "Signature Class",
    description:
      "Our signature sessions combine strength, mobility, and conditioning into one focused workout. It is built to challenge every level and keep the pace intense from start to finish.",
    images: images.program.signature.main,
    tone: "from-[#6ef028]/25 via-transparent to-transparent",
  },
  {
    title: "Cardio",
    description:
      "Cardio training keeps your engine strong, improves endurance, and helps you burn energy efficiently. These sessions are fast, athletic, and designed to keep you moving.",
    images: images.program.cardio.main,
    tone: "from-neon/25 via-transparent to-transparent",
  },
  {
    title: "Cycling",
    description:
      "Cycling sessions build lower-body strength and stamina while keeping the workout smooth and powerful. It is one of the best ways to push your rhythm and conditioning.",
    images: images.program.cycling.main,
    tone: "from-[#3dd610]/25 via-transparent to-transparent",
  },
  {
    title: "Mind And Body",
    description:
      "Mind and body sessions focus on flexibility, balance, breath, and recovery. They are perfect for building control, improving movement, and restoring energy.",
    images: images.program.mindAndBody.main,
    tone: "from-[#9cff5a]/25 via-transparent to-transparent",
  },
] as const;

export function AboutPrograms() {
  return (
    <section className="bg-black px-6 py-16 md:px-12 md:py-14 lg:px-16">
      <div className="mx-auto max-w-[1320px] space-y-8">
        <div className="max-w-3xl">
          <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
            Special Programs
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase tracking-tight text-white md:text-5xl">
            Each program is built to work differently and keep the training
            fresh.
          </h2>
        </div>

        <div className="space-y-6">
          {PROGRAMS.map((program, index) => (
            <article
              key={program.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
            >
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                <div
                  className={`relative min-h-[320px] bg-gradient-to-br ${program.tone}`}
                >
                  <div className="grid h-full grid-cols-2 gap-3 p-4 sm:p-6">
                    {program.images.map((src, imageIndex) => (
                      <div
                        key={`${program.title}-${imageIndex}`}
                        className="relative overflow-hidden rounded-[22px] min-h-[260px]"
                      >
                        <Image
                          src={src}
                          alt={`${program.title} image ${imageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/45">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase text-white md:text-4xl">
                    {program.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-8 text-white/85 md:text-base">
                    {program.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
