import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { images } from "@/lib/images";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | FlexFlow",
  description:
    "Contact FlexFlow for memberships, class questions, training advice, and gym visits.",
};

const contactCards = [
  {
    label: "Call us",
    value: "+94 (78) 364-0894",
    link: "tel:+94783640894",
    note: "Mon to Sat, 6:00 AM - 9:00 PM",
  },
  {
    label: "Email",
    value: "hello@verafit.com",
    link: "mailto:hello@verafit.com",
    note: "We usually reply within one business day.",
  },
  {
    label: "Visit",
    value: "Biyagama, Sri Lanka",
    link: "https://maps.google.com",
    note: "Drop in to see the gym and meet the team.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 md:pt-16">
        <section className="relative overflow-hidden px-6 pb-14 pt-14 md:px-12 md:pb-16 md:pt-20 lg:px-16 lg:pt-18">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-neon/12 blur-[120px] h-[220px] w-[220px] sm:h-[360px] sm:w-[360px] md:h-[480px] md:w-[480px]"
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="max-w-3xl lg:pt-6">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-neon">
                Contact
              </p>
              <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[92px]">
                Let&apos;s start your{" "}
                <span className="text-neon">next step</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 md:text-[18px] md:leading-7">
                Contact us for memberships, class questions, coaching support,
                or general gym info. Keep it simple, send a message, and
                we&apos;ll point you to the right person.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.link}
                    className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-neon/40 hover:bg-white/[0.05]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon">
                      {card.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {card.note}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-4 md:p-5">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-[24px]">
                <Image
                  src={images.contact}
                  alt="FlexFlow coach ready to help"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon">
                    Direct support
                  </p>
                  <p className="mt-2 max-w-sm text-xl font-semibold leading-7 text-white">
                    Friendly coaches, clear answers, and the right next step for
                    your goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-12 md:pb-14 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                Message us
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase text-white md:text-4xl">
                Tell us what you need and we&apos;ll handle the rest.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/75 md:text-[18px] md:leading-7">
                Use the form below for memberships, class info, or coaching
                questions. This page is intentionally simple so you can get in
                touch quickly.
              </p>

              <form className="mt-8 grid grid-cols-1 gap-5" action="#">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-lg font-medium text-white/80">
                      Full name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-[52px] w-full rounded-full border border-white/15 bg-black/40 px-5 text-sm text-white placeholder:text-white/40 focus:border-neon/60 focus:outline-none focus:ring-2 focus:ring-neon/25"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-lg font-medium text-white/80">
                      Email address
                    </span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-[52px] w-full rounded-full border border-white/15 bg-black/40 px-5 text-sm text-white placeholder:text-white/40 focus:border-neon/60 focus:outline-none focus:ring-2 focus:ring-neon/25"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-lg font-medium text-white/80">
                    Message
                  </span>
                  <textarea
                    rows={7}
                    placeholder="Tell us about your goal, class interest, or the help you need."
                    className="w-full rounded-[28px] border border-white/15 bg-black/40 px-5 py-4 text-sm text-white placeholder:text-white/40 focus:border-neon/60 focus:outline-none focus:ring-2 focus:ring-neon/25"
                  />
                </label>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-7 text-white/65">
                    We usually reply within one business day.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-neon px-6 text-xs font-bold uppercase tracking-[0.22em] text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                  Direct contact
                </p>
                <div className="mt-5 space-y-4 text-lg leading-7 text-white/75">
                  <p>
                    <span className="block text-white">Call</span>
                    +94 (78) 364-0894
                  </p>
                  <p>
                    <span className="block text-white">Email</span>
                    hello@verafit.com
                  </p>
                  <p>
                    <span className="block text-white">Location</span>
                    Biyagama, Sri Lanka
                  </p>
                  <p>
                    <span className="block text-white">Hours</span>
                    Monday - Saturday, 6:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[6.8/4]">
                  <Image
                    src={images.contactcoach}
                    alt="Gym coach portrait"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon">
                      Talk to a coach
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white">
                      We&apos;ll help you choose the right path before you
                      start.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
