import { Upload, Sparkles, Calendar } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Leads",
      description: "Import your prospects list easily with our simple CSV upload or CRM integration."
    },
    {
      icon: Sparkles,
      number: "02", 
      title: "AI Personalizes Emails",
      description: "Sailex.ai analyzes each prospect and crafts tailored outreach messages automatically."
    },
    {
      icon: Calendar,
      number: "03",
      title: "Book More Meetings",
      description: "Close deals faster with intelligent follow-ups and conversion-optimized messaging."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Smarter Outreach in{" "}
              <span className="text-brand-teal">3 Simple Steps</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
              Transform your sales process with AI-powered automation that actually works
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-teal/30 via-brand-teal to-brand-teal/30"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative stagger-item">
                <div className="bg-gradient-card p-8 rounded-2xl shadow-card card-hover text-center relative z-10 border border-brand-teal/10">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-brand-teal/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-10 h-10 text-brand-teal" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-brand-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Dot */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 -right-4 w-8 h-8 bg-brand-teal rounded-full z-20 border-4 border-background"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};