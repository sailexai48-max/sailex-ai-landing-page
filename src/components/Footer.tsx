export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Tagline */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full p-2">
                  <img 
                    src="/lovable-uploads/6ee3598b-d4f2-455a-919f-700cdcf893d2.png" 
                    alt="Sailex.ai" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered sales assistant helping B2B teams close more deals, faster.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-1 text-center">
              <nav className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-brand-teal transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  href="#beta-signup" 
                  className="text-gray-300 hover:text-brand-teal transition-colors duration-200"
                >
                  Beta Access
                </a>
                <a 
                  href="mailto:hello@sailex.ai" 
                  className="text-gray-300 hover:text-brand-teal transition-colors duration-200"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Copyright */}
            <div className="md:col-span-1 text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sailex.ai — Close More Deals, Faster.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                Built with AI for the future of sales automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};