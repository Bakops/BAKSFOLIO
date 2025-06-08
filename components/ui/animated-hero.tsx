"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["moderne", "sur-mesure", "créatif", "professionnel", "responsive"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8 p-10 items-center justify-center text-center">
          <div className="mt-24"></div>
          <div className="flex flex-col gap-4 text-[#FFF] items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl max-w-[52rem] tracking-tighter text-center font-bold font-poppins">
              <span className="text-spektr-cyan-50">
                Je conçois et développe<span className="text-[#FA9F18]">.</span>{" "}
                des projets web
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#FA9F18] italic"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-[#FFF]">
              Spécialisé en création de sites WordPress et Shopify,
              développement d'applications web et design de maquettes sur Figma.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <Button size="lg" variant="default" className="gap-4">
              Voir mes services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
