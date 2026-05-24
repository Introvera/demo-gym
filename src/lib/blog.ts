import { images } from "@/lib/images";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  sections: BlogSection[];
  takeaways: string[];
};

export const blogCategories = [
  "Training",
  "Recovery",
  "Mindset",
  "Cardio",
  "Classes",
  "Mobility",
] as const;

export const featuredBlogPost: BlogPost = {
  slug: "stronger-week-training-split",
  title: "How to build a stronger week with a better training split",
  excerpt:
    "A good week in the gym starts before you ever touch a barbell. Learn how to balance strength, cardio, recovery, and consistency without burning out.",
  image: images.hero,
  category: "Training",
  readTime: "6 min read",
  date: "May 2026",
  summary:
    "The best training week is built around your energy, your schedule, and the goal you actually want to hit. Instead of chasing random workouts, use a clear split that gives each training style a job.",
  sections: [
    {
      heading: "Start with your main goal",
      paragraphs: [
        "Every plan should begin with one question: what matters most right now? If your goal is strength, the majority of your weekly effort should be anchored around compound lifting and progression. If your goal is conditioning, more of your week should support tempo work, intervals, and movement quality.",
        "The mistake many people make is trying to make every session do everything. That usually leads to fatigue without clear progress. A better split gives each workout a role so your body can adapt instead of constantly reacting.",
      ],
    },
    {
      heading: "Balance hard days and easier days",
      paragraphs: [
        "A strong program alternates between high-intensity sessions and days that support recovery. Pushing hard every day feels productive at first, but it usually leads to stalled progress, sore joints, and lower motivation.",
        "Instead, place your most demanding lifts when your energy is highest, then use lighter sessions for mobility, cardio, or accessory work. That balance keeps your body ready for the next real effort.",
      ],
    },
    {
      heading: "Leave room to recover",
      paragraphs: [
        "Recovery is not wasted time. It is the part of training that makes the next session better. Sleep, hydration, nutrition, and low-stress movement all help the work you did in the gym actually stick.",
        "If you want a stronger week, protect your recovery like you protect your workout time. That small shift makes consistency easier and performance more repeatable.",
      ],
    },
  ],
  takeaways: [
    "Give each workout a clear purpose.",
    "Do not stack too many hard sessions together.",
    "Treat recovery as part of the program.",
  ],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "recovery-missing-part-of-progress",
    title: "Why recovery is the missing part of your progress",
    excerpt:
      "Sleep, mobility, and planned rest days are the difference between surviving workouts and improving from them.",
    image: images.program.mindAndBody.main[0],
    category: "Recovery",
    readTime: "4 min read",
    date: "May 2026",
    summary:
      "Progress does not happen because you suffer through every session. It happens when your body has enough recovery to build back stronger.",
    sections: [
      {
        heading: "Recovery keeps the engine running",
        paragraphs: [
          "A good program creates a stress-and-recovery cycle. The training session is the stress, but the improvement comes during the recovery after it. Without that reset, your performance eventually drops.",
          "Even simple habits like sleeping earlier, walking more, and staying hydrated can change how well your body responds to training.",
        ],
      },
    ],
    takeaways: [
      "Sleep is part of training.",
      "Mobility helps you stay ready.",
      "Rest days improve output.",
    ],
  },
  {
    slug: "stay-consistent-when-motivation-drops",
    title: "How to stay consistent when motivation drops",
    excerpt:
      "Use simple systems, not perfect mood, to keep showing up. Consistency is built by repeatable habits.",
    image: images.program.signature.main[0],
    category: "Mindset",
    readTime: "5 min read",
    date: "May 2026",
    summary:
      "Motivation changes. Systems stay. The people who keep making progress are usually the ones who remove friction and make their training easier to start.",
    sections: [
      {
        heading: "Build a repeatable routine",
        paragraphs: [
          "Pick training times you can actually protect. A routine that fits your real life will beat an ideal routine that only works on paper.",
          "Keeping your gear ready, choosing a class in advance, and setting a weekly target all help remove decision fatigue.",
        ],
      },
    ],
    takeaways: [
      "Lower the friction to start.",
      "Keep your schedule realistic.",
      "Focus on repeatability over perfection.",
    ],
  },
  {
    slug: "beginner-cardio-basics",
    title: "What every beginner should know before starting cardio",
    excerpt:
      "Start with pace, posture, and time under control before chasing intensity. Better cardio comes from smarter progression.",
    image: images.program.cardio.main[0],
    category: "Cardio",
    readTime: "3 min read",
    date: "May 2026",
    summary:
      "Cardio works best when you build a base first. A controlled start gives you more energy, better form, and more room to progress later.",
    sections: [
      {
        heading: "Begin with control",
        paragraphs: [
          "New cardio sessions should feel manageable. That means a pace you can sustain, a posture you can hold, and a duration you can repeat.",
          "Once your base improves, you can introduce intervals, more volume, or higher intensity without losing form.",
        ],
      },
    ],
    takeaways: [
      "Start slower than you think.",
      "Build duration before intensity.",
      "Keep form solid the entire session.",
    ],
  },
  {
    slug: "strength-training-athletic-movement",
    title: "The role of strength training in better athletic movement",
    excerpt:
      "The strongest athletes are also the most controlled. Strength gives you better power, balance, and resilience.",
    image: images.program.cycling.main[0],
    category: "Training",
    readTime: "4 min read",
    date: "May 2026",
    summary:
      "Strength work is more than muscle size. It is a tool for improving how you move, absorb force, and stay stable under pressure.",
    sections: [
      {
        heading: "Strong movement is efficient movement",
        paragraphs: [
          "When you get stronger, everyday patterns like squatting, pulling, pushing, and carrying become easier and more stable. That improves how the body handles both sport and daily life.",
          "The goal is not only force production. The goal is better control while producing force.",
        ],
      },
    ],
    takeaways: [
      "Strength supports movement quality.",
      "Control matters as much as power.",
      "Compound work should stay central.",
    ],
  },
  {
    slug: "mobility-every-program",
    title: "Why mobility work should be part of every program",
    excerpt:
      "Mobility is not optional if you want to move well. Build it into warmups and cooldowns for better output.",
    image: images.program.mindAndBody.main[1],
    category: "Mobility",
    readTime: "4 min read",
    date: "May 2026",
    summary:
      "Mobility helps your body use the range it already has. It is the bridge between training hard and training well.",
    sections: [
      {
        heading: "Use mobility to prepare and recover",
        paragraphs: [
          "A few targeted mobility drills before training can improve how you squat, press, hinge, or rotate. At the end of a session, they can also help reduce stiffness and reset the body.",
          "Mobility does not need to be complicated. It needs to be consistent and matched to the movements you train.",
        ],
      },
    ],
    takeaways: [
      "Mobility improves training quality.",
      "Match drills to the session.",
      "Keep it simple and repeatable.",
    ],
  },
  {
    slug: "choose-right-class-for-your-goal",
    title: "How to choose the right class for your goal",
    excerpt:
      "From signature sessions to mind and body work, each class has a different purpose. Pick the one that supports your goal.",
    image: images.program.signature.main[1],
    category: "Classes",
    readTime: "5 min read",
    date: "May 2026",
    summary:
      "The best class is the one that fits your current goal, energy, and recovery. Matching the workout to the objective makes your effort count.",
    sections: [
      {
        heading: "Pick the class that solves the right problem",
        paragraphs: [
          "If you need conditioning, choose a class that raises your heart rate. If you need movement quality, choose a session focused on control and flexibility.",
          "You do not need to do everything in one class. You need to choose the one that gives your goal the best support.",
        ],
      },
    ],
    takeaways: [
      "Match the class to your goal.",
      "Energy level matters.",
      "Consistency beats random selection.",
    ],
  },
];

export const allBlogPosts: BlogPost[] = [featuredBlogPost, ...blogPosts];

export function findBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, count = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count);
}
