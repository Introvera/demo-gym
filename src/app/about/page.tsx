import { AboutIntro } from "@/components/about/AboutIntro";
import { JoinWithUs } from "@/components/about/JoinWithUs";
import { SpecialProgram } from "@/components/home/SpecialProgram";
import { AboutFooter } from "@/components/layout/AboutFooter";
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
      <div className="pt-24">
        <AboutIntro />
        <SpecialProgram />
        <JoinWithUs />
        <AboutFooter />
      </div>
    </main>
  );
}
