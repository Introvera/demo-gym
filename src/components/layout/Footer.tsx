import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold text-white">
              Vera<span className="text-neon">Fit</span>
            </h3>
            <p className="max-w-sm text-sm text-[#bfbfbf]">
              High energy training, expert coaches, and programs designed to
              push your limits. Join our community and transform your fitness.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#bfbfbf] transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#bfbfbf] transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M14 9h2.25V6H14c-2.21 0-4 1.79-4 4v2H8v3h2v7h3v-7h2.25l.5-3H13v-1.75c0-.69.56-1.25 1.25-1.25Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-[#bfbfbf] transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 32 32"
                  fill="#dedede"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#dedede"
                  aria-hidden
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <title>tiktok</title>
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-start gap-8 md:gap-35">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase text-[#d1d1d1]">
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[#bfbfbf] hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programs"
                    className="text-[#bfbfbf] hover:text-white"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#coaches"
                    className="text-[#bfbfbf] hover:text-white"
                  >
                    Coaches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[#bfbfbf] hover:text-white"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase text-[#d1d1d1]">
                Support
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+94783640894"
                    className="text-[#bfbfbf] hover:text-white"
                  >
                    +94 (78) 364-0894
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@introvera.com"
                    className="text-[#bfbfbf] hover:text-white"
                  >
                    hello@verafit.com
                  </a>
                </li>
                <li>
                  <span className="text-[#bfbfbf]">Biyagama, Sri Lanka</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-[#d1d1d1]">
              Stay Updated
            </h4>
            <p className="mb-4 max-w-sm text-sm text-[#bfbfbf]">
              Get seasonal workouts and offers no spam.
            </p>
            <form
              action="#"
              className="flex w-full max-w-sm items-center gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-neon"
              />
              <button
                type="submit"
                className="rounded-full bg-neon px-4 py-2 text-sm font-bold text-black transition-colors hover:opacity-90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center md:flex md:items-center md:justify-between">
          <p className="text-sm text-[#8a8a8a]">
            © FlexFlow {new Date().getFullYear()}. All rights reserved.Website
            designed by{" Introvera (PVT) LTD"}.
          </p>
          <p className="mt-3 hidden text-sm text-[#8a8a8a] md:mt-0 md:block">
            Built for performance - Biyagama, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
