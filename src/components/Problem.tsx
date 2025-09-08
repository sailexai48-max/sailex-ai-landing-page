import { AlertTriangle, Clock, Target } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Hours Wasted on Research",
      description: "Sales teams spend 60% of their time researching leads instead of selling"
    },
    {
      icon: AlertTriangle,
      title: "Generic Outreach Ignored",
      description: "Cold emails with 2% response rates because they lack personalization"
    },
    {
      icon: Target,
      title: "Missed Opportunities",
      description: "Quality leads slip through the cracks due to poor follow-up timing"
    }
  ];

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Sales outreach is{" "}
            <span className="text-destructive">broken.</span>
          </h2>
          
          <p className="text-xl text-brand-gray-light mb-16 leading-relaxed">
            Sales teams spend hours researching leads, writing cold emails, and trying to book meetings — 
            but most outreach ends up ignored. Sailex.ai fixes this by using AI to automate personalized 
            outreach, so your team closes more deals in less time.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-8 rounded-2xl shadow-card card-hover"
              >
                <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  {problem.title}
                </h3>
                <p className="text-brand-gray-light">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};