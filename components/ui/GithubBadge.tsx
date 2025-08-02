"use client";
import { useState } from "react";
import { SiGithub } from "react-icons/si";

export default function GithubBadge() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      {isHovered && (
        <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
          Découvrir mon GitHub
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      <a
        href="https://github.com/Bakops"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gray-900 hover:bg-[#FA9F18] text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contactez-moi sur WhatsApp"
      >
        <SiGithub className="text-white" />
      </a>
    </div>
  );
}
