import type { Metadata } from "next";
import { AboutHeader } from "@/components/layout/AboutHeader";
import { AboutFooter } from "@/components/layout/AboutFooter";
import { AboutIntro } from "@/components/about/AboutIntro";
import { SpecialProgram } from "@/components/home/SpecialProgram";
import { JoinWithUs } from "@/components/about/JoinWithUs";

export const metadata: Metadata = {
  title: "About Us | FlexFlow",
  description:
    "Learn about FlexFlow — our mission, special programs, and how to join our fitness community.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutHeader />
      <div className="pt-24">
        <AboutIntro />
        <SpecialProgram />
        <JoinWithUs />
        <AboutFooter />
      </div>
    </main>
  );
}
