import React from "react";

const ScrollingBanner = () => {
  const items = [
    { text: "Build better.", icon: "🔧" },
    { text: "Ideate faster.", icon: "💡" },
    { text: "Work smarter.", icon: "🎯" },
    { text: "Grow quicker.", icon: "📈" },
    { text: "Build better.", icon: "🔧" },
    { text: "Ideate faster.", icon: "💡" },
    { text: "Work smarter.", icon: "🎯" },
    { text: "Grow quicker.", icon: "📈" },
  ];

  return (
    <div className="bg-black text-white py-6 overflow-hidden">
      <div className="flex animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 mx-8 whitespace-nowrap"
          >
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="text-xl">{item.icon}</span>
            </div>
            <span className="text-2xl font-bold">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
