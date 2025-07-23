import React from "react";

const ScrollingBanner = () => {
  const items = [
    { text: "Construa melhor.", icon: "🔧" },
    { text: "Crie rápido.", icon: "💡" },
    { text: "Trabalhe inteligente.", icon: "🎯" },
    { text: "Cresça rápido.", icon: "📈" },
  ];

  return (
    <div className="bg-black text-white py-6 overflow-hidden">
      <div className="flex animate-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 mx-8 whitespace-nowrap"
          >
            <div className="w-12 h-12 bg-white/10 rounded-lg p-9 flex items-center justify-center">
              <span className="text-5xl">{item.icon}</span>
            </div>
            <span className="text-6xl font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
