import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogCategories, blogPosts, featuredBlogPost } from "@/lib/blog";
import { images } from "@/lib/images";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | FlexFlow",
  description:
    "Read FlexFlow's latest fitness tips, training insights, member stories, and workout strategies.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 md:pt-16">
        <section className="relative overflow-hidden px-6 pb-16 pt-14 md:px-12 md:pb-20 md:pt-20 lg:px-16 lg:pt-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon/12 blur-[120px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1320px]">
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div className="lg:self-start lg:pt-4">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-neon">
                  Blog
                </p>
                <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-[84px] lg:text-[96px]">
                  Training <span className="text-neon">insights</span> for a
                  stronger routine.
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 md:text-[15px] md:leading-8">
                  Read practical training advice, recovery tips, and member
                  stories designed to help you stay consistent, move better, and
                  train with purpose.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {blogCategories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src={images.blog}
                    alt="Athlete training for the blog hero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon">
                      Featured story
                    </p>
                    <p className="mt-2 max-w-sm text-lg font-semibold leading-7 text-white">
                      Build your week around the work that matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-12 md:pb-24 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid grid-cols-1 gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-4 md:p-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
              <div className="relative min-h-[320px] overflow-hidden rounded-[28px] lg:min-h-[560px]">
                <Image
                  src={featuredBlogPost.image}
                  alt={featuredBlogPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    <span className="rounded-full bg-neon px-3 py-1 text-black">
                      {featuredBlogPost.category}
                    </span>
                    <span>{featuredBlogPost.readTime}</span>
                    <span>{featuredBlogPost.date}</span>
                  </div>
                  <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase leading-tight text-white md:text-5xl">
                    {featuredBlogPost.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-[15px] md:leading-8">
                    {featuredBlogPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featuredBlogPost.slug}`}
                    className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    Read Article
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-5 rounded-[28px] bg-black/40 p-6 md:p-8 lg:p-10">
                <div>
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                    Featured insight
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                    Stronger training starts with a better structure.
                  </h3>
                  <p className="mt-5 text-sm leading-8 text-white/80 md:text-[15px]">
                    Good results are rarely about doing more. They come from
                    doing the right work, in the right order, with enough
                    recovery to adapt.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    ["Member stories", "Real progress from real people."],
                    ["Weekly tips", "Simple ideas you can use today."],
                    ["Coach notes", "Training guidance from the floor."],
                    ["Recovery", "Stay fresh without losing momentum."],
                  ].map(([label, description]) => (
                    <div
                      key={label}
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="latest-posts"
          className="px-6 pb-16 md:px-12 md:pb-24 lg:px-16"
        >
          <div className="mx-auto max-w-[1320px]">
            <SectionHeading before="Latest " highlight="Blog" after=" Posts." />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                      <span className="text-neon">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase leading-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/75">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex text-sm font-semibold text-neon transition-colors hover:text-white"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-12 md:pb-24 lg:px-16">
          <div className="mx-auto max-w-[1320px] rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0f2918] via-[#0b1f10] to-[#07140a] px-6 py-10 md:px-10 md:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div className="max-w-2xl">
              <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                Newsletter
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase text-white md:text-4xl">
                Get new posts, training tips, and member updates.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80 md:text-[15px] md:leading-8">
                Join our newsletter for weekly training ideas, class updates,
                and simple advice that helps you stay on track.
              </p>
            </div>

            <form
              className="mt-8 flex w-full max-w-xl items-center gap-3 lg:mt-0"
              action="#"
            >
              <label htmlFor="blog-email" className="sr-only">
                Email address
              </label>
              <input
                id="blog-email"
                type="email"
                placeholder="Enter your email"
                className="h-[54px] flex-1 rounded-full border border-white/20 bg-black/45 px-5 text-sm text-white placeholder:text-white/45 focus:border-neon/60 focus:outline-none focus:ring-2 focus:ring-neon/25"
              />
              <button
                type="submit"
                className="h-[54px] rounded-full bg-neon px-6 text-xs font-bold uppercase tracking-[0.22em] text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
