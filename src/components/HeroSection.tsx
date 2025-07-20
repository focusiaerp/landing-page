import React from "react";
import Image from "next/image";
import { SparklesIcon, Star } from "lucide-react";

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
              Simplifique operações em uma plataforma unificada
            </h1>
            <p className="text-black text-[17px]">
              A plataforma unificada da Focus IA transforma insights dispersos
              em automação otimizada — conhecimento técnico opcional.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Começar agora
            </button>

            {/* Reviews */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-500">G2</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-gray-600 text-gray-600"
                  />
                ))}
              </div>
              <span className="text-gray-600">620+ Reviews</span>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative">
            <div className="right-hero-section">
              {/* Profile Card */}
              <div className="image-load-wrapper">
                <Image
                  src="https://cdn.prod.website-files.com/67bd4583544503c3feb08305/67c4dfcc612272307863e666_photo-square-15.webp"
                  alt="Professional headshot"
                  width={324}
                  height={432}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="image-load-element portrait-orientation object-cover"
                  priority
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
                <div className="flex items-center justify-center gap-4 rounded-lg bg-black/10 backdrop-blur-md text-white py-3 pl-[18px] pr-6 font-medium">
                  <div className="">
                    <SparklesIcon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">
                    Resumir tendências dos dados de vendas do Q1
                  </span>
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
