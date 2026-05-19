import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Plan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Weekly Plan",
    price: "$80",
    features: [
      "Free consulting",
      "3 hour personal training",
      "Exercise program",
      "Normal workout",
    ],
  },
  {
    name: "Monthly Plan",
    price: "$100",
    featured: true,
    features: [
      "Free consulting",
      "3 hour personal training",
      "Exercise program",
      "Normal workout",
      "Highest level workout",
    ],
  },
  {
    name: "Yearly Plan",
    price: "$120",
    features: [
      "Free consulting",
      "3 hour personal training",
      "Exercise program",
      "Normal workout",
      "Highest level workout",
      "Extra care of health",
    ],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  const featured = plan.featured;

  return (
    <article
      className={`flex flex-col rounded-3xl p-8 md:p-10 ${
        featured
          ? "relative z-10 scale-100 bg-neon shadow-[0_0_60px_rgba(124,255,58,0.35)] lg:scale-105"
          : "bg-[#141414]"
      }`}
    >
      <h3
        className={`font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase tracking-wide ${
          featured ? "text-white" : "text-neon"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-4 font-[family-name:var(--font-barlow-condensed)] text-5xl font-bold md:text-6xl ${
          featured ? "text-white" : "text-white"
        }`}
      >
        {plan.price}
      </p>
      <hr
        className={`my-8 border-t ${featured ? "border-white/40" : "border-white/20"}`}
      />
      <ul className="flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm ${
              featured ? "text-white" : "text-white/90"
            }`}
          >
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                featured ? "bg-white" : "bg-neon"
              }`}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="#contact"
        className={`mt-10 inline-flex min-h-[48px] items-center justify-center rounded-full text-xs font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          featured
            ? "bg-white text-neon focus-visible:ring-white"
            : "bg-neon text-black focus-visible:ring-neon"
        }`}
      >
        Join Now
      </Link>
    </article>
  );
}

export function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-black px-6 py-20 md:px-12 md:py-28 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[300px] -translate-y-1/2 bg-neon/5 blur-[80px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeading highlight="Join " after="Our Membership." />

        <div className="mt-14 grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-20 text-center font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-[42px]">
          <span className="text-neon">Feel Great.</span> Body And Mind.
        </p>
      </div>
    </section>
  );
}
