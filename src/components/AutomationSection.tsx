import React from "react";

const AutomationSection = () => {
  return (
    <section className="bg-neutral py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-medium text-black leading-tight">
              Automação que <span className="text-emerald-999">realmente</span>{" "}
              te entende
            </h2>
            <p className="text-gray-600 text-lg">
              A automação da Focus IA se adapta ao seu fluxo de trabalho,
              tornando tarefas complexas em processos simples e eficientes.
            </p>
          </div>

          {/* Circular Automation Diagram */}
          <div className="relative w-96 h-96 mx-auto">
            {/* Background concentric circles */}
            <div className="absolute inset-0 rounded-full border border-emerald-200/30"></div>
            <div className="absolute inset-4 rounded-full border border-emerald-200/40"></div>
            <div className="absolute inset-8 rounded-full border border-emerald-200/50"></div>
            <div className="absolute inset-12 rounded-full border border-emerald-200/60"></div>
            <div className="absolute inset-16 rounded-full border border-emerald-300/70"></div>

            {/* Radiating lines */}
            <div className="absolute inset-0">
              {/* Top line */}
              <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-emerald-400 to-transparent transform -translate-x-0.5"></div>
              {/* Top connector circle */}
              <div className="absolute top-16 left-1/2 w-3 h-3 bg-emerald-500 rounded-full transform -translate-x-1.5 -translate-y-1.5"></div>

              {/* Top-right line */}
              <div className="absolute top-6 right-6 w-14 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent transform rotate-45 origin-left"></div>

              {/* Right line */}
              <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-gradient-to-l from-emerald-400 to-transparent transform -translate-y-0.5"></div>

              {/* Bottom-right line */}
              <div className="absolute bottom-6 right-6 w-14 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent transform -rotate-45 origin-left"></div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-emerald-400 to-transparent transform -translate-x-0.5"></div>

              {/* Bottom-left line */}
              <div className="absolute bottom-6 left-6 w-14 h-0.5 bg-gradient-to-l from-emerald-400 to-transparent transform rotate-45 origin-right"></div>

              {/* Left line */}
              <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent transform -translate-y-0.5"></div>

              {/* Top-left line */}
              <div className="absolute top-6 left-6 w-14 h-0.5 bg-gradient-to-l from-emerald-400 to-transparent transform -rotate-45 origin-right"></div>
            </div>

            {/* Outer ring */}
            <div className="absolute inset-20 rounded-full border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-100/50 to-emerald-200/30"></div>

            {/* Inner core circle */}
            <div className="absolute inset-28 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-999 shadow-lg flex items-center justify-center">
              {/* Sync/Refresh Icon */}
              <svg
                className="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
