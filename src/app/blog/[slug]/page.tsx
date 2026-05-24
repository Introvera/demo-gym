import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  allBlogPosts,
  findBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/lib/blog";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | FlexFlow",
      description:
        "Read FlexFlow's latest fitness tips, training insights, member stories, and workout strategies.",
    };
  }

  return {
    title: `${post.title} | FlexFlow Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = findBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 md:pt-16">
        <section className="relative overflow-hidden px-6 pb-16 pt-14 md:px-12 md:pb-20 md:pt-20 lg:px-16 lg:pt-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon/12 blur-[120px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1320px]">
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="lg:self-start lg:pt-4">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.3em] text-neon">
                  {post.category}
                </p>
                <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-[84px] lg:text-[88px]">
                  {post.title}
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 md:text-[15px] md:leading-8">
                  {post.excerpt}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  <span className="rounded-full bg-neon px-3 py-1 text-black">
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                  <span>FlexFlow Blog</span>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon">
                      Featured post
                    </p>
                    <p className="mt-2 max-w-sm text-lg font-semibold leading-7 text-white">
                      A deeper look at this training topic and how to apply it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-12 md:pb-24 lg:px-16">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <article className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
              <p className="text-sm leading-8 text-white/80 md:text-[15px]">
                {post.summary}
              </p>

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-bold uppercase text-white md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-white/80 md:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[26px] border border-neon/20 bg-neon/5 p-5 md:p-6">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-xl font-bold uppercase text-white">
                  Key takeaways
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80 md:text-[15px]">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-2 w-2 rounded-full bg-neon" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                  About this topic
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase leading-tight text-white">
                  Built to help you train with more structure.
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/80 md:text-[15px]">
                  This article is part of the FlexFlow blog, where we share
                  practical ideas for better training, recovery, and consistency.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                  Related posts
                </p>
                <div className="mt-5 space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-[18px]">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-neon">
                          {relatedPost.category}
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm font-semibold leading-6 text-white">
                          {relatedPost.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-[#0f2918] via-[#0b1f10] to-[#07140a] p-6 md:p-8">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
                  Join the blog
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase text-white">
                  Get fresh articles and training tips.
                </h3>
                <Link
                  href="/blog"
                  className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-neon px-6 text-xs font-bold uppercase tracking-[0.22em] text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Back to Blog
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-12 md:pb-24 lg:px-16">
          <div className="mx-auto max-w-[1320px] rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <p className="font-[family-name:var(--font-barlow-condensed)] text-sm font-bold uppercase tracking-[0.28em] text-neon">
              More to read
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-barlow-condensed)] text-3xl font-bold uppercase text-white md:text-4xl">
              Keep exploring other training topics.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-black/35"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neon">
                      {relatedPost.category}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white">
                      {relatedPost.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {relatedPost.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
