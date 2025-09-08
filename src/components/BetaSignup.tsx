import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Users, Zap } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
}

export const BetaSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets Integration - Replace with your actual Google Apps Script URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "🚀 Welcome to the Beta!",
        description: "We'll send you early access within 48 hours. Get ready to transform your sales process!",
      });

      // Reset form
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      toast({
        title: "Signup Successful!",
        description: "Thanks for joining! We'll be in touch soon with your beta access.",
      });
      setFormData({ name: "", email: "", company: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const benefits = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Be first to test cutting-edge AI sales features"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join 100+ forward-thinking sales leaders"
    },
    {
      icon: Zap,
      title: "Free Trial Period",
      description: "Get 3 months free when we launch publicly"
    }
  ];

  return (
    <section id="beta-signup" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Join Our Private Beta{" "}
              <span className="text-brand-teal">🚀</span>
            </h2>
            <p className="text-xl text-brand-gray-light max-w-3xl mx-auto">
              Be among the first 100 sales teams to test Sailex.ai and experience how AI can 
              transform your outreach. Spaces are limited — reserve your spot today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl shadow-card stagger-item border border-brand-teal/10">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-dark mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-brand-gray-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sign-up Form */}
            <Card className="bg-gradient-card shadow-elegant border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-dark">
                  Reserve Your Beta Access
                </CardTitle>
                <CardDescription className="text-brand-gray-light">
                  Join the waitlist for exclusive early access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-dark font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      required
                      className="h-12 border-2 focus:border-brand-teal"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-dark font-medium">
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.name@company.com"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      required
                      className="h-12 border-2 focus:border-brand-teal"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-brand-dark font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      required
                      className="h-12 border-2 focus:border-brand-teal"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="beta"
                    size="lg"
                    className="w-full h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining Beta..." : "Join Beta Now →"}
                  </Button>

                  <p className="text-sm text-brand-gray-light text-center">
                    By signing up, you agree to receive updates about Sailex.ai. 
                    Unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};