import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import salesTeamBg from "@/assets/sales-team-bg.jpg";

export const Hero = () => {
  const scrollToBeta = () => {
    const betaSection = document.getElementById('beta-signup');
    betaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${salesTeamBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/30 via-transparent to-brand-teal/20"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-brand-teal/30 rounded-full floating-element"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-brand-teal/10 rounded-lg rotate-45 floating-element-2"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/20 floating-element"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 fade-in">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full p-3 shadow-lg">
              <img 
                src="/lovable-uploads/6ee3598b-d4f2-455a-919f-700cdcf893d2.png" 
                alt="Sailex.ai" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

      {/* Beta Badge with Glow */}
      <div className="inline-flex items-center gap-2 glass-effect-enhanced text-white px-6 py-3 rounded-full text-sm font-medium mb-8 fade-in animate-pulse-glow modern-hover">
        <Sparkles className="w-4 h-4" />
        Now in Private Beta
      </div>

          {/* Main Headlines with Staggered Animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-delay leading-tight">
            Close More Deals.{" "}
            <span className="bg-gradient-to-r from-brand-teal to-cyan-400 bg-clip-text text-transparent">
              Faster. Smarter.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed fade-in-delay-2">
            Sailex.ai is your AI-powered sales assistant that helps B2B sales teams find better leads, 
            personalize outreach, and close more deals — automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-delay-3">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-brand-teal/50 modern-hover"
            onClick={scrollToBeta}
          >
            Join the Beta
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in-delay-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Sales Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">3x</div>
              <div className="text-gray-300 text-sm">Response Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">75%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};