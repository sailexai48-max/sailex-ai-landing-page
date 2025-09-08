import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  const scrollToBeta = () => {
    const betaSection = document.getElementById('beta-signup');
    betaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-teal/5 via-accent/20 to-brand-teal-light/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Limited Beta Spots Available
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-brand-teal to-[hsl(180_80%_40%)] bg-clip-text text-transparent">
              Supercharge
            </span>{" "}
            Your Sales Team?
          </h2>

          <p className="text-xl text-brand-gray-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the AI sales revolution. Get early access to Sailex.ai and start closing more deals 
            with intelligent, personalized outreach that actually converts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl"
              onClick={scrollToBeta}
            >
              Join the Beta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-brand-gray-light">
              Free for first 100 beta users • No credit card required
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-brand-teal/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">3x</div>
              <div className="text-brand-gray-light">Higher Response Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">75%</div>
              <div className="text-brand-gray-light">Time Saved on Outreach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-teal mb-2">2x</div>
              <div className="text-brand-gray-light">More Qualified Meetings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};