import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BrandBar } from "@/components/home/BrandBar";
import { SpecialProgram } from "@/components/home/SpecialProgram";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WorkoutCoaches } from "@/components/home/WorkoutCoaches";
import { Membership } from "@/components/home/Membership";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div id="home" className="pt-24">
        <Hero />
        <BrandBar />
      </div>
      <SpecialProgram />
      <WhyChooseUs />
      <WorkoutCoaches />
      <Membership />
      <Footer />
    </main>
  );
}
