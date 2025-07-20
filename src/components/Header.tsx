import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#ffffffd6] backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 grid-rows-[auto] gap-6 place-items-center h-20">
          {/* Logo */}
          <Image
            src="/focusia-logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="justify-self-start"
          />

          {/* Navigation */}
          <nav className="hidden md:flex">
            <div className="flex items-center justify-center gap-9 text-sm">
              <a
                href="#"
                className="text-black transition-colors hover:opacity-60"
              >
                Overview
              </a>
              <div className="relative">
                <a href="#" className="text-black transition-colors flex gap-1">
                  Pages
                  <div className="rounded-full w-1.5 h-1.5 bg-black"></div>
                </a>
              </div>
              <div className="relative">
                <a href="#" className="text-black transition-colors flex gap-1">
                  Information
                  <div className="rounded-full w-1.5 h-1.5 bg-black"></div>
                </a>
              </div>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4 justify-self-end">
            <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
            <span className="text-gray-600">Templates</span>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Buy Artifact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
