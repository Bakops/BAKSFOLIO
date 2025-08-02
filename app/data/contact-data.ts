import { Clock, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const contactInfo = [
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

export const socialLinks = [
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

export const projectTypes = [
  "Site vitrine",
  "E-commerce",
  "Application web",
  "Application mobile",
  "UI/UX Design",
  "Consultation",
  "Maintenance",
  "Autre",
];
