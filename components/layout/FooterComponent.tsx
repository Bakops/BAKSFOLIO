import { Github, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function FooterComponent() {
  return (
    <footer className="bg-black border-t border-slate-800 py-14 px-8 xs:px-10 sm:px-14 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <a href="/" aria-label="Accueil">
              <img
                src="/logo-portfolio-bakou.PNG"
                alt="Logo de Bakou"
                className="w-auto h-auto max-w-[160px] object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Développeur front-end passionné, créateur d'expériences web
              modernes et performantes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                ["Accueil", "/"],
                ["Parcours", "/parcours"],
                ["Réalisations", "/realisations"],
                ["À propos", "/propos"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <a
                    href={path}
                    className="text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent transition-colors font-medium text-sm"
                  >
                    {label}
                    {label === "Réalisations" && (
                      <span className="text-orange-500 text-base font-bold ml-1">
                        .
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Réalisations</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Développement Web",
                "UI/UX Design",
                "Applications Mobile",
                "Consultation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent transition-colors font-medium text-sm">
                    <a href="/realisations">{service}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a href="/contact">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 w-full"
                >
                  <Mail className="w-3 h-3 mr-2" />
                  Me contacter
                </Button>
              </a>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Bakops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-slate-600 text-slate-400 hover:text-white hover:border-orange-500 bg-transparent"
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/toure-bakou-a2b05921a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-slate-600 text-slate-400 hover:text-white hover:border-orange-500 bg-transparent"
                  >
                    LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2024 Bakou Touré. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
