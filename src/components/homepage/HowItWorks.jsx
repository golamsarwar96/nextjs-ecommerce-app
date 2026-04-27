import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Discover Apps",
      description:
        "Browse our curated collection of innovative apps designed to enhance productivity and simplify your life.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Choose Your Platform",
      description:
        "Download from Google Play or App Store - our apps are optimized for both Android and iOS devices.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Install & Enjoy",
      description:
        "Quick installation process with regular updates to ensure you always have the latest features and improvements.",
      icon: "⚡",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with our apps is simple. Follow these three easy
            steps to transform your digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
