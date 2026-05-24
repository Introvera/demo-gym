"use client";

import { FormEvent, useState } from "react";

export function JoinWithUs() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  }

  return (
    <section className="bg-black px-6 py-16 md:px-12 md:py-10 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-4 md:px-4 md:py-6 lg:py-3 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 min-h-[120px] md:min-h-[240px] lg:min-h-[300px]"
          style={{
            // flip diagonal so angle travels left → right
            clipPath: "polygon(0 0, 100% 88px, 100% 100%, 0 100%)",
            background:
              // gradient left to right
              "linear-gradient(90deg, #143d1f 0%, #0c2614 45%, #081a0d 100%)",
          }}
        >
          {/* Subtle texture overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
            }}
            aria-hidden
          />

          <div className="relative max-w-xl">
            <h2 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-7xl">
              <span className="text-neon">Join</span> With Us
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80 md:text-2xl md:leading-8">
              Always best to find a workout routine no matter how busy you are.
              With the workout.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mt-8 w-full max-w-md lg:mt-0 lg:shrink-0"
          >
            <label htmlFor="join-email" className="sr-only">
              Email address
            </label>
            <input
              id="join-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email..."
              required
              className="h-[52px] w-full rounded-full border border-white/25 bg-black/50 py-3 pl-6 pr-[140px] text-sm text-white placeholder:text-white/40 focus:border-neon/50 focus:outline-none focus:ring-2 focus:ring-neon/30"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 h-[44px] min-w-[120px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6ef028] via-neon to-[#3dd610] px-6 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
