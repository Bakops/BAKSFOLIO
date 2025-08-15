"use client";
import { motion } from "framer-motion";
import { Mail, PenIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "./button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["moderne", "sur-mesure", "créatif", "professionnel", "responsive"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center py-12 md:py-24">
        <div className="mt-10 md:mt-16"></div>

        <div className="flex flex-col gap-[1.5rem] md:gap-10 items-center justify-center text-center w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tighter leading-tight text-white mt-6 md:mt-0">
            <span className="text-spektr-cyan-50">
              Je conçois et développe
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                .
              </span>{" "}
              <br />
              des projets web
            </span>

            <span className="relative flex justify-center overflow-hidden h-14 xs:h-16 sm:h-20 md:h-24 mt-3 w-full">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent italic text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full"
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -30 : 30, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-md sm:max-w-xl md:max-w-2xl">
            Je conçois et développe des applications web modernes,
            <br className="hidden sm:block" />
            en alliant performance, design et expérience utilisateur.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <a href="/realisations" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition-all hover:shadow-lg active:scale-95"
              >
                <PenIcon className="w-4 h-4 mr-2" />
                Découvrir mes réalisations
              </Button>
            </a>

            <a href="mailto:bakoutoure4@gmail.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:border-orange-400 hover:text-white bg-transparent transition-all hover:shadow-lg active:scale-95"
              >
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
