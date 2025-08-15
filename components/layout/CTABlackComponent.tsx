import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTABlackComponent() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true, margin: "-100px" }}
      className="py-14 px-8 xs:px-10 sm:px-14 md:px-24 bg-black relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-white"
        >
          Prêt à collaborer sur votre prochain projet ?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Je suis toujours ouvert aux nouvelles opportunités et aux projets
          passionnants. N'hésitez pas à me contacter pour discuter de vos idées.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transition-all hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contactez-moi
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-white border-white hover:border-orange-500 hover:text-orange-500 bg-black/50 transition-all hover:shadow-lg hover:shadow-white/10 active:scale-95"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger mon CV
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
