export const SocialProof = () => {
  const logos = [
    {
      name: "Stripe",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
      width: "120"
    },
    {
      name: "HubSpot", 
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
      width: "140"
    },
    {
      name: "Salesforce",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      width: "160"
    },
    {
      name: "Zendesk",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg", 
      width: "140"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg font-medium text-brand-gray-light mb-12">
            Trusted by forward-thinking sales teams
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center h-16"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height="auto"
                  className="max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};