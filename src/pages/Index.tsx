import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { BetaSignup } from "@/components/BetaSignup";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ThreeJSBackground } from "@/components/ThreeJSBackground";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useSmoothScroll();
  useScrollReveal();

  return (
    <main className="min-h-screen relative parallax-container">
      <ThreeJSBackground />
      <Navbar />
      <Hero />
      <div className="scroll-reveal">
        <Problem />
      </div>
      <div className="scroll-reveal">
        <HowItWorks />
      </div>
      <div className="scroll-reveal">
        <SocialProof />
      </div>
      <div className="scroll-reveal">
        <BetaSignup />
      </div>
      <div className="scroll-reveal">
        <FinalCTA />
      </div>
      <div className="scroll-reveal">
        <Footer />
      </div>
    </main>
  );
};

export default Index;
