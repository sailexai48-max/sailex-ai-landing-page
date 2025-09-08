import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToBeta = () => {
    const betaSection = document.getElementById('beta-signup');
    betaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/30 to-brand-teal-light/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 fade-in">
            <img 
              src="/lovable-uploads/6ee3598b-d4f2-455a-919f-700cdcf893d2.png" 
              alt="Sailex.ai" 
              className="h-16 mx-auto mb-4"
            />
          </div>

          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-medium mb-8 fade-in">
            <Sparkles className="w-4 h-4" />
            Now in Private Beta
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-6 fade-in-delay">
            Close More Deals.{" "}
            <span className="bg-gradient-to-r from-brand-teal to-[hsl(180_80%_40%)] bg-clip-text text-transparent">
              Faster. Smarter.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-gray-light max-w-4xl mx-auto mb-12 leading-relaxed fade-in-delay">
            Sailex.ai is your AI-powered sales assistant that helps B2B sales teams find better leads, 
            personalize outreach, and close more deals — automatically.
          </p>

          {/* CTA Button */}
          <div className="fade-in-delay">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl"
              onClick={scrollToBeta}
            >
              Join the Beta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Proof Hint */}
          <p className="text-brand-gray-light mt-8 fade-in-delay">
            Join 500+ sales teams already using AI to boost conversions
          </p>
        </div>
      </div>
    </section>
  );
};