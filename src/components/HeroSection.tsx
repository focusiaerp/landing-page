import React from "react";
import Image from "next/image";
import { MicIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-rows-[auto] gap-[72px] place-items-center place-content-stretch">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <p className="text-gray-600 text-sm font-medium font-sans">
              Focus IA ERP
            </p>
            <h1 className="text-5xl lg:text-[56px] font-medium font-sans text-black leading-tight">
              Simplifique operações em uma plataforma{" "}
              <span className="underline-text">unificada</span>
            </h1>
            <p className="text-black text-[17px]">
              A plataforma unificada da Focus IA transforma insights dispersos
              em automação otimizada — conhecimento técnico opcional.
            </p>

            <div className="relative">
              <button className="bg-emerald-950 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-999 transition-colors cursor-pointer">
                Começar agora
              </button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative">
            <div className="right-hero-section">
              {/* Profile Card */}
              <div className="image-load-wrapper">
                <Image
                  src="https://cdn.prod.website-files.com/67721265f59069a5268af325/6779cdc6c6fdc72c7ede579e_about%20hero%20image-p-1600.webp"
                  alt="Professional headshot"
                  width={324}
                  height={432}
                  className="portrait-orientation object-cover"
                  priority
                  sizes="(max-width: 1920px) 100vw, 50vw"
                  style={{ objectPosition: "77% bottom" }}
                />
              </div>

              {/* Stats Card */}
              <div className="card">
                <div className="stat-card">
                  <h3 className="heading-h3">
                    65% de Aumento{" "}
                    <span className="body-text-white">
                      na eficiência operacional
                    </span>
                  </h3>
                  <p className="body-text-white text-sm">
                    De clientes que usaram a Focus IA por pelo menos 12 meses.
                  </p>
                </div>
              </div>

              {/* Feature Card */}
              <div className="card flex py-12 items-center justify-center some-grid-area-thing">
                {/* Graphic Canvas */}

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  {/* Graphic Wrapper */}

                  <div className="z-0 pointer-events-none min-w-[130%] h-auto min-h-full">
                    <Image
                      src="https://cdn.prod.website-files.com/6762dffab2725f2bea161783/676588d261a99a0f82ba3298_background-v7-finatech-x-webflow-template.jpg"
                      alt=""
                      fill
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-0 left-1.5 w-12 h-12 rounded-full bg-gradient-to-br from-green-800 to-green-600 self-center animate-pulse"></div>

                  <div className="flex z-10 items-center justify-center gap-4 rounded-lg bg-black/40 backdrop-blur-lg text-white py-3 pl-[18px] pr-6 font-medium">
                    <div className="">
                      <MicIcon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">
                      Resuma as tendências de vendas do primeiro trimestre
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
