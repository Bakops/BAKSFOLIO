import FooterComponent from "@/components/layout/FooterComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Code2,
  Headphones,
  Lightbulb,
  Mail,
  Palette,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  Target,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Création de sites web modernes et performants avec les dernières technologies",
    features: [
      "React & Next.js",
      "TypeScript",
      "API Integration",
      "SEO Optimisé",
    ],
    price: "À partir de 1500€",
    popular: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Conception d'interfaces utilisateur intuitives et d'expériences engageantes",
    features: [
      "Design System",
      "Prototypage",
      "Tests Utilisateur",
      "Responsive Design",
    ],
    price: "À partir de 800€",
    popular: false,
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description:
      "Développement d'applications mobiles cross-platform avec React Native",
    features: [
      "iOS & Android",
      "Performance Native",
      "Push Notifications",
      "App Store Deploy",
    ],
    price: "À partir de 2500€",
    popular: false,
  },
  {
    icon: Zap,
    title: "Optimisation Performance",
    description:
      "Amélioration des performances et de la vitesse de vos applications existantes",
    features: [
      "Audit Performance",
      "Code Splitting",
      "Image Optimization",
      "Core Web Vitals",
    ],
    price: "À partir de 600€",
    popular: false,
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Maintenance continue et support technique pour vos projets web",
    features: ["Mises à jour", "Monitoring", "Backup", "Support 24/7"],
    price: "À partir de 300€/mois",
    popular: false,
  },
  {
    icon: Headphones,
    title: "Consultation Technique",
    description:
      "Conseils et expertise technique pour vos projets de développement",
    features: ["Architecture", "Code Review", "Formation", "Stratégie Tech"],
    price: "80€/heure",
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Découverte",
    description: "Analyse de vos besoins et définition des objectifs du projet",
    icon: Lightbulb,
    duration: "1-2 jours",
  },
  {
    step: "02",
    title: "Planification",
    description: "Création du cahier des charges et planification détaillée",
    icon: Target,
    duration: "2-3 jours",
  },
  {
    step: "03",
    title: "Design & Prototypage",
    description: "Conception des maquettes et validation du design",
    icon: Palette,
    duration: "1-2 semaines",
  },
  {
    step: "04",
    title: "Développement",
    description: "Développement de votre solution avec des points réguliers",
    icon: Code2,
    duration: "2-8 semaines",
  },
  {
    step: "05",
    title: "Tests & Optimisation",
    description: "Tests complets et optimisation des performances",
    icon: Settings,
    duration: "3-5 jours",
  },
  {
    step: "06",
    title: "Déploiement",
    description: "Mise en ligne et formation à l'utilisation",
    icon: Rocket,
    duration: "1-2 jours",
  },
];

const packages = [
  {
    name: "Starter",
    price: "1500€",
    description: "Parfait pour les petites entreprises et startups",
    features: [
      "Site vitrine (5 pages max)",
      "Design responsive",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "1 mois de support",
      "Hébergement inclus (1 an)",
    ],
    popular: false,
    cta: "Commencer",
  },
  {
    name: "Professional",
    price: "3500€",
    description: "Idéal pour les entreprises en croissance",
    features: [
      "Site web complet (jusqu'à 15 pages)",
      "CMS personnalisé",
      "E-commerce intégré",
      "Analytics avancés",
      "3 mois de support",
      "Formation incluse",
      "Optimisation performance",
    ],
    popular: true,
    cta: "Le plus populaire",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Solutions sur mesure pour les grandes entreprises",
    features: [
      "Application web complexe",
      "Architecture scalable",
      "Intégrations API multiples",
      "Dashboard admin",
      "Support prioritaire 24/7",
      "Maintenance continue",
      "Équipe dédiée",
    ],
    popular: false,
    cta: "Nous contacter",
  },
];

const faqs = [
  {
    question: "Combien de temps prend un projet typique ?",
    answer:
      "La durée varie selon la complexité : 2-4 semaines pour un site vitrine, 6-12 semaines pour une application web complète.",
  },
  {
    question: "Proposez-vous des solutions de maintenance ?",
    answer:
      "Oui, je propose des contrats de maintenance mensuels incluant mises à jour, monitoring et support technique.",
  },
  {
    question: "Travaillez-vous avec des équipes existantes ?",
    answer:
      "Absolument ! Je peux m'intégrer à votre équipe ou collaborer avec vos développeurs existants.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Je me spécialise dans React, Next.js, TypeScript, TailwindCSS et l'écosystème JavaScript moderne.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-[#101010] text-white">
        <section className="relative overflow-hidden py-20 pt-[10rem] px-4">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 text-white border-orange-500"
            >
              <Zap className="w-3 h-3 mr-1" />
              Services de développement
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Mes Services
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Je transforme vos idées en solutions digitales modernes et
              performantes. Du concept à la mise en ligne, je vous accompagne
              dans tous vos projets web.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un appel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:border-orange-500"
              >
                Voir mes réalisations
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Ce que je peux faire pour vous
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Des services complets pour répondre à tous vos besoins en
                développement web
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-[#181818] border-gray-800 ${
                      service.popular
                        ? "ring-2 ring-orange-500/20 border-orange-500/30"
                        : ""
                    }`}
                  >
                    {service.popular && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                        Populaire
                      </Badge>
                    )}

                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-orange-500" />
                      </div>
                      <CardTitle className="group-hover:text-orange-500 transition-colors text-white">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-orange-500">
                            {service.price}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="group-hover:bg-orange-500 group-hover:text-white transition-colors bg-transparent border-gray-700 text-white hover:border-orange-500"
                          >
                            En savoir plus
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#181818]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Mon processus de travail
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Une méthodologie éprouvée pour garantir le succès de votre
                projet
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#101010] border-gray-800"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-orange-500" />
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-orange-500 transition-colors text-white">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Packages & Tarifs
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Des solutions adaptées à tous les budgets et tous les besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-[#181818] border-gray-800 ${
                    pkg.popular
                      ? "ring-2 ring-orange-500 border-orange-500 scale-105"
                      : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-2 text-sm font-medium">
                      Le plus populaire
                    </div>
                  )}

                  <CardHeader className={pkg.popular ? "pt-12" : ""}>
                    <CardTitle className="text-2xl text-white">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {pkg.price}
                    </div>
                    <CardDescription className="text-gray-400">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                          : "border-gray-700 text-white hover:border-orange-500"
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      {pkg.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#181818]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Questions fréquentes
              </h2>
              <p className="text-gray-400">
                Les réponses aux questions les plus courantes sur mes services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow bg-[#101010] border-gray-800"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Prêt à donner vie à votre projet ?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la solution parfaite
              pour votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Demander un devis gratuit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:border-orange-500"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un appel
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </>
  );
}
