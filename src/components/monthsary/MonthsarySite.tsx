"use client";

import { useEffect } from "react";
import { registerGsapPlugins } from "@/lib/gsap";
import { useRevealOnScroll } from "@/hooks/useGsapScroll";
import { ScrollProgress } from "./ScrollProgress";
import { MusicToggle } from "./MusicToggle";
import { FloatingHearts } from "./FloatingHearts";
import { Particles } from "./Particles";
import { HeroSection } from "./sections/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { ThankYouSection } from "./sections/ThankYouSection";
import { AppreciationSection } from "./sections/AppreciationSection";
import { FoodTripsSection } from "./sections/FoodTripsSection";
import { AdventuresSection } from "./sections/AdventuresSection";
import { BahayBahayanSection } from "./sections/BahayBahayanSection";
import { PromiseSection } from "./sections/PromiseSection";
import { FinaleSection } from "./sections/FinaleSection";

export function MonthsarySite() {
  useRevealOnScroll(".reveal");

  useEffect(() => {
    registerGsapPlugins();
  }, []);

  return (
    <>
      <ScrollProgress />
      <MusicToggle />
      <FloatingHearts />
      <Particles />

      <main className="relative z-[2]">
        <HeroSection />
        <IntroductionSection />
        <ThankYouSection />
        <AppreciationSection />
        <FoodTripsSection />
        <AdventuresSection />
        <BahayBahayanSection />
        <PromiseSection />
        <FinaleSection />
      </main>
    </>
  );
}
