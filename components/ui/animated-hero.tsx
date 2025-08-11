"use client";
import { motion } from "framer-motion";
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
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 min-h-[1.5em]">
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

            <p className="text-[10px] pt-[1rem] xs:text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground sm:max-w-2xl text-center text-[#FFF] mx-auto px-2 sm:px-0 font-normal">
              Je conçois et développe des applications web modernes,
              <br className="block sm:hidden" />
              en alliant performance, design et expérience utilisateur.
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <a
              href="/"
              className="rounded-md px-3.5 py-2.5 text-[15px] font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-600 transition-colors duration-200"
            >
              Décourvir mon portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
