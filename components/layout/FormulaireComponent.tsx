"use client";
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type ApiError = {
  error?: string;
  message?: string;
};

export default function FormulaireComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Le nom est requis");
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Veuillez entrer un email valide");
      return false;
    }
    if (!formData.subject.trim()) {
      setError("Veuillez sélectionner un sujet");
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setError("Le message doit contenir au moins 10 caractères");
      return false;
    }
    return true;
  };

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
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: ApiError = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Erreur lors de l'envoi du message"
        );
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Erreur:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Une erreur inconnue est survenue");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Je suis à votre écoute
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Remplissez ce formulaire et je vous recontacterai dans les plus brefs
          délais pour discuter avec vous.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md"
            >
              {error}
            </motion.div>
          )}

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
              <option value="Demande de devis">Demande de devis</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Support technique">Support technique</option>
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
              minLength={10}
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 10 caractères</p>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg transition-transform hover:scale-[1.01]"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Message envoyé !
              </h3>
              <p className="text-green-700 mb-4">
                Merci pour votre message. Je vous recontacterai dans les 24
                heures. Une copie a été envoyée à votre adresse email.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Envoyer un autre message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
