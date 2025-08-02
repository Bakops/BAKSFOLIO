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
      <div className="container mx-auto flex flex-col items-center justify-center px-2 sm:px-4">
        <div className="flex flex-col gap-8 p-4 sm:p-8 md:p-10 items-center justify-center text-center">
          <div className="mt-16 sm:mt-20 md:mt-24"></div>
          <div className="flex flex-col  text-[#FFF] items-center justify-center text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl w-full max-w-[98vw] sm:max-w-[52rem] tracking-tighter text-center font-bold font-poppins leading-tight">
              <span className="text-spektr-cyan-50">
                Je conçois et développe
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  .
                </span>{" "}
                <br></br>
                des projets web
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 min-h-[2.5em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute w-full font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent italic text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-[90vw] sm:max-w-2xl text-center text-[#FFF]">
              Spécialisé en création de sites WordPress et Shopify,
              développement d'applications web et design de maquettes sur Figma.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <Button
              size="lg"
              variant="default"
              className="gap-4 text-base sm:text-lg px-5 sm:px-8 py-2 sm:py-3"
            >
              Voir mes services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
