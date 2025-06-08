"use client";
import { ScrollBasedVelocityDemo } from "@/components/layout/animescroll";
import HeroHeadersComponent from "@/components/layout/HeroHeadersComponent";
import TexteComponent from "@/components/layout/TexteComponent";
import { Feature } from "@/components/ui/feature-with-advantages";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cursorSmall = document.querySelector(".cursor-small");
    const cursorBig = document.querySelector(".cursor-big");

    let scale = 1;

    function mousemoveHandler(e: MouseEvent) {
      const target = e.target as HTMLElement | null;

      if (target) {
        const tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out",
          },
        });

        if (target.closest(".card_app,.button_app")) {
          tl.to(cursorSmall, { opacity: 0 }).to(
            cursorBig,
            { opacity: 1 },
            "-=0.5"
          );
        } else {
          if (target.classList.contains("card_buss")) {
            scale = 4;
          } else {
            scale = 1;
          }

          tl.to(cursorSmall, { opacity: 1, scale: scale }).to(
            cursorBig,
            { opacity: 0 },
            "-=0.5"
          );
        }
      }
    }

    function mouseleaveHandler() {
      gsap.to(cursorSmall, { opacity: 0 });
    }

    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseleave", mouseleaveHandler);

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
      document.removeEventListener("mouseleave", mouseleaveHandler);
    };
  }, []);
  return (
    <>
      <HeroHeadersComponent />
      <TexteComponent />
      <ScrollBasedVelocityDemo />
      <Feature />
      <div className="cursor-small fixed top-0 left-0 z-1 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FA9F18] h-3 w-3 hidden md:block">
        <div className="cursor-point absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FA9F18] h-3 w-3 z-2"></div>
      </div>
      <div className="cursor-big fixed top-0 left-0 z-9999 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FA9F18] text-[#FA9F18] flex items-center justify-center text-5xl font-extrabold p-2 text-center transition-colors duration-500 cursor-pointer h-24 w-24">
        <p className="mt-2 text-xl">+</p>
      </div>
    </>
  );
}
