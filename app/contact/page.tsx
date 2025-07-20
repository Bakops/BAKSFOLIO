"use client";

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
import { Input } from "@/components/ui/input";
import {
  Calendar,
  CheckCircle,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@baktoure.dev",
    description: "Réponse sous 24h",
    action: "mailto:contact@baktoure.dev",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 6 XX XX XX XX",
    description: "Lun-Ven 9h-18h",
    action: "tel:+33600000000",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Paris, France",
    description: "Disponible en remote",
    action: "#",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    value: "Lun-Ven 9h-18h",
    description: "Réponse rapide",
    action: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/Bakops",
    color: "hover:text-gray-900",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/toure-bakou-a2b05921a/",
    color: "hover:text-blue-600",
  },
];

const projectTypes = [
  "Site vitrine",
  "E-commerce",
  "Application web",
  "Application mobile",
  "UI/UX Design",
  "Consultation",
  "Maintenance",
  "Autre",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-black">
        <section className="relative overflow-hidden py-20 pt-[10rem] px-4">
          <div className="absolute inset-0 bg-black" />
          <div className="relative max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="w-fit border-orange-500 text-white mb-10"
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Je suis à votre écoute
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              Contactez-moi
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Vous avez un projet en tête ? Une question ? N'hésitez pas à me
              contacter. Je serais ravi de discuter avec vous et de voir comment
              je peux vous aider à concrétiser vos idées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Planifier un appel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-50 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Envoyer un email
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Je suis à votre écoute
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Remplissez ce formulaire et je vous recontacterai dans les
                    plus brefs délais pour discuter avec vous.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Entreprise
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-orange-200 focus:border-orange-500 focus:ring-orange-500/20"
                        placeholder="Nom de votre entreprise (optionnel)"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Sujet de votre message *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Renseignement">Renseignement</option>
                        <option value="Offre d'emploi">Offre d'emploi</option>
                        <option value="Demande de devis">
                          Demande de devis
                        </option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Support technique">
                          Support technique
                        </option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>

                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-orange-200 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition placeholder:text-sm placeholder:text-gray-400"
                        placeholder="Décrivez votre demande, vos besoins, vos objectifs..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-green-700 mb-4">
                        Merci pour votre message. Je vous recontacterai dans les
                        24 heures.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-green-300 text-green-700 hover:bg-green-100"
                      >
                        Envoyer un autre message
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>


              <div className="space-y-8">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Suivez-moi</CardTitle>
                    <CardDescription>
                      Restez connecté sur les réseaux sociaux
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <FooterComponent />
      </div>
    </>
  );
}
