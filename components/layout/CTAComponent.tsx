import { Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function CTAComponent() {
  return (
    <section className="py-16 px-2 sm:px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">
          Prêt à collaborer sur votre prochain projet ?
        </h2>
        <p className="text-base sm:text-lg text-white mb-8 max-w-2xl mx-auto">
          Je suis toujours ouvert aux nouvelles opportunités et aux projets
          passionnants. N'hésitez pas à me contacter pour discuter de vos idées.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contactez-moi
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className=" text-black hover:border-orange-500 bg-[#FFF]"
          >
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </section>
  );
}
