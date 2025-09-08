import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToBeta = () => {
    scrollToSection('beta-signup');
  };

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white backdrop-blur-xl shadow-2xl border-b border-brand-teal/80'
    : 'bg-white/40 backdrop-blur-xl shadow-md border-b border-brand-teal/10'
      }`}>
  <div className="container mx-auto px-4">
  <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer select-none"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-white rounded-full p-2 shadow-xl border-2 border-brand-teal/50">
              <img 
                src="/lovable-uploads/6ee3598b-d4f2-455a-919f-700cdcf893d2.png" 
                alt="Sailex.ai" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide"
              style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide"
              style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('beta-signup')}
              className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide"
              style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
            >
              Beta
            </button>
            <Button
              variant="hero"
              size="sm"
              className="px-6 font-bold shadow-md border border-brand-teal/30"
              onClick={scrollToBeta}
            >
              Join Beta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-dark hover:text-brand-teal transition-colors"
            style={{background: 'rgba(255,255,255,0.7)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white/80 backdrop-blur-xl rounded-lg mt-2 shadow-xl border border-brand-teal/30">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide text-left py-2"
                style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide text-left py-2"
                style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('beta-signup')}
                className="text-brand-dark hover:text-brand-teal transition-colors font-semibold drop-shadow-sm tracking-wide text-left py-2"
                style={{textShadow: '0 1px 4px rgba(0,0,0,0.08)'}}
              >
                Beta
              </button>
              <Button
                variant="hero"
                size="sm"
                className="w-full font-bold shadow-md border border-brand-teal/30"
                onClick={scrollToBeta}
              >
                Join Beta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};