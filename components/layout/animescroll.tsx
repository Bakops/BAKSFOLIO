"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="min-h-[15vh] w-full relative mt-20">
      <div className=" inset-0 flex items-center justify-center pointer-events-none flex-col">
        <VelocityScroll
          text="#Créativité"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] pointer-events-auto"
        />
      </div>
    </div>
  );
}
