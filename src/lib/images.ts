/** Verified Unsplash photo IDs (return HTTP 200). */
const u = (id: string, w: number, h?: number) => {
  const params = new URLSearchParams({
    w: String(w),
    fit: "crop",
    q: "85",
    auto: "format",
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
};

// Shared IDs
const GYM_DUMBBELLS = "1534438327276-14e5300c3a48";
const CABLE_WORKOUT = "1571019614242-c5c5dee9f50b";
const ATHLETE_HERO = "1583454110551-21f2fa2afe61";
const CARDIO_GROUP = "1517836357463-d25dfeac3438";
const YOGA_WOMAN = "1544367567-0f2fcb009e0b";
const CYCLING = "1558618666-fcd25c85cd64";
const MIND_BODY = "1506126613408-eca07ce68773";
const TRAINER_MAN = "1571019613454-1cb2f99b2d8b";
const FITNESS_WOMAN = "1518611012118-696072aa579a";
const BODYBUILDER = "1581009146145-b5ef050c2e1e";
const GYM_INTERIOR = "1517838277536-f5f99be501cd";
const WORKOUT = "1526506118085-60ce8714f8c5";

export const images = {
  aboutPortrait: "/about.jpg",
  blog: "/blog.jpg",
  hero: u(ATHLETE_HERO, 900, 1200),
  heroThumb: u(ATHLETE_HERO, 120, 120),
  bodybuilder: u(BODYBUILDER, 800, 1000),
  reminder: u(GYM_INTERIOR, 400, 240),

  program: {
    signature: {
      main: [u(GYM_DUMBBELLS, 640, 900), u(CABLE_WORKOUT, 640, 900)],
      thumbs: [
        u(GYM_DUMBBELLS, 120, 120),
        u(CABLE_WORKOUT, 120, 120),
        u(ATHLETE_HERO, 120, 120),
      ],
    },
    cardio: {
      main: [u(CARDIO_GROUP, 640, 900), u(WORKOUT, 640, 900)],
      thumbs: [
        u(CARDIO_GROUP, 120, 120),
        u(WORKOUT, 120, 120),
        u(GYM_DUMBBELLS, 120, 120),
      ],
    },
    cycling: {
      main: [u(CYCLING, 640, 900), u(WORKOUT, 640, 900)],
      thumbs: [
        u(CYCLING, 120, 120),
        u(WORKOUT, 120, 120),
        u(CARDIO_GROUP, 120, 120),
      ],
    },
    mindAndBody: {
      main: [u(YOGA_WOMAN, 640, 900), u(MIND_BODY, 640, 900)],
      thumbs: [
        u(YOGA_WOMAN, 120, 120),
        u(MIND_BODY, 120, 120),
        u(FITNESS_WOMAN, 120, 120),
      ],
    },
  },

  coaches: [
    { hours: "700", role: "Yoga trainer", image: "/coach/coach1.jpg" },
    { hours: "100", role: "Fitness trainer", image: "/coach/coach2.jpg" },
    { hours: "1120", role: "Fitness trainer", image: "/coach/coach3.jpg" },
    { hours: "500", role: "Box Jump trainer", image: "/coach/coach4.jpg" },
    { hours: "800", role: "Fitness trainer", image: "/coach/coach5.jpg" },
  ],
} as const;
