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
  Calendar,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "GitHub", icon: "🐙" },
  { name: "Linux", icon: "🐧" },
];

const formations = [
  {
    title: "Licence Informatique",
    institution: "Université de Paris",
    period: "2022 - 2025",
    status: "En cours",
    description:
      "Formation complète en informatique avec spécialisation en développement web",
  },
  {
    title: "Certification React",
    institution: "OpenClassrooms",
    period: "2023",
    status: "Certifié",
    description:
      "Maîtrise approfondie de React et de l'écosystème moderne JavaScript",
  },
  {
    title: "Formation UI/UX Design",
    institution: "Udemy",
    period: "2022",
    status: "Complété",
    description: "Principes de design d'interface et d'expérience utilisateur",
  },
];

const projects = [
  {
    title: "Portfolio Créatif",
    description: "Site portfolio personnel avec animations modernes",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Boutique Shopify",
    description: "E-commerce personnalisé avec intégrations avancées",
    tech: ["Shopify", "Liquid", "JavaScript"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Blog WordPress",
    description: "Blog moderne avec thème personnalisé",
    tech: ["WordPress", "PHP", "CSS"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-orange-500/5 dark:to-yellow-500/5" />
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">
                    <Calendar className="w-3 h-3 mr-1" />
                    Disponible pour de nouveaux projets
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    À propos de moi
                  </h1>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Je m'appelle{" "}
                      <span className="font-semibold text-orange-500">
                        Bakou Touré
                      </span>
                      , étudiant passionné et développeur front-end basé à
                      Paris.
                    </p>
                    <p>
                      J'aime concevoir des interfaces modernes, dynamiques et
                      accessibles qui offrent une expérience utilisateur
                      exceptionnelle.
                    </p>
                    <p>
                      J'utilise principalement{" "}
                      <span className="font-medium">
                        React, Next.js, TailwindCSS
                      </span>{" "}
                      et d'autres outils du web moderne pour créer des
                      expériences uniques.
                    </p>
                    <p>
                      Toujours curieux, j'apprends en continu pour rester à la
                      pointe des technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Me contacter
                  </Button>
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="lg">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
                  <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-1 rounded-3xl">
                    <div className="bg-background rounded-3xl p-2">
                      <Image
                        src="/placeholder.svg?height=400&width=320"
                        alt="Bakou Touré"
                        width={320}
                        height={400}
                        className="rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies & Outils</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les technologies que j'utilise quotidiennement pour créer des
                expériences web modernes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium">{tech.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="w-8 h-8 text-orange-500" />
                Formations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mon parcours académique et professionnel dans le développement
                web
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((formation, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-orange-500"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant={
                          formation.status === "En cours"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {formation.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-medium">
                        {formation.period}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-orange-500 transition-colors">
                      {formation.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {formation.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {formation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Aperçu de mes réalisations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quelques projets qui illustrent mes compétences et ma passion
                pour le développement
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Button
                      size="sm"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="group bg-transparent"
              >
                Voir tous mes projets
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 dark:from-orange-500/5 dark:to-yellow-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à collaborer sur votre prochain projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets
              passionnants. N'hésitez pas à me contacter pour discuter de vos
              idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactez-moi
              </Button>
              <Button size="lg" variant="outline">
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
