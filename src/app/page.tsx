import { BrandBar } from "@/components/home/BrandBar";
import { Hero } from "@/components/home/Hero";
import { Membership } from "@/components/home/Membership";
import { SpecialProgram } from "@/components/home/SpecialProgram";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WorkoutCoaches } from "@/components/home/WorkoutCoaches";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <BrandBar />
      <SpecialProgram />
      <WhyChooseUs />
      <WorkoutCoaches />
      <Membership />
      <Footer />
    </main>
  );
}
