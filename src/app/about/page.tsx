import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutPrograms } from "@/components/about/AboutPrograms";
import { JoinWithUs } from "@/components/about/JoinWithUs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FlexFlow",
  description:
    "Learn about FlexFlow — our mission, special programs, and how to join our fitness community.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
        <AboutIntro />
        <AboutPrograms />
        <JoinWithUs />
        <Footer />
    </main>
  );
}
