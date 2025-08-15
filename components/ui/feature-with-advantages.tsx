import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function Feature() {
  return (
    <section className="w-full my-10 sm:my-16 md:my-20 py-12 px-8 xs:px-10 sm:px-14 md:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 items-start"
        >
          <Badge variant="outline" className="bg-black text-white">
            Développement Fullstack
          </Badge>

          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Développeur nocturne - Du concept au déploiement !
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
              Étudiant passionné en développement fullstack, je conçois des
              applications web modernes, performantes et évolutives, du
              front-end au back-end. Je réalise également des sites WordPress
              sur-mesure et du maquettage/design sur Figma.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full mt-8">
            <FeatureCard
              icon={<LightningIcon />}
              title="Développement moderne"
              text="Interfaces réactives et intuitives avec React, Next.js et TailwindCSS."
            />
            <FeatureCard
              icon={<ServerIcon />}
              title="Back-end robuste"
              text="API performantes, gestion de bases de données et sécurité des données."
            />
            <FeatureCard
              icon={<CustomIcon />}
              title="Projet sur-mesure"
              text="Adaptation à vos besoins, design personnalisé et accompagnement."
            />
            <FeatureCard
              icon={<DesignIcon />}
              title="WordPress & Figma"
              text="Sites WordPress personnalisés et maquettes professionnelles sur Figma."
            />
            <FeatureCard
              icon={<DatabaseIcon />}
              title="Gestion de données"
              text="Conception et optimisation de bases de données MySQL, PostgreSQL et MariaDB."
            />
            <FeatureCard
              icon={<MobileIcon />}
              title="Responsive Design"
              text="Applications web adaptatives pour tous les écrans et appareils mobiles."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex-shrink-0 p-2 rounded-lg text-gray-600">{icon}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

const TechCategory = ({
  title,
  technologies,
}: {
  title: string;
  technologies: string[];
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-900 mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const LightningIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
  </svg>
);

const ServerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
    <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0z" />
  </svg>
);

const CustomIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
  </svg>
);

const DesignIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M7.999 0a8 8 0 1 0 0 16A8 8 0 0 0 7.999 0zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 1.2a5.3 5.3 0 1 0 0 10.6A5.3 5.3 0 0 0 8 2.7zm.001 1.3c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm4.5 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm2.25 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm2.25 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.313-.967-2.5-2.678-3.162C10.317.163 9.218 0 8 0c-1.218 0-2.317.163-3.322.838C3.967 1.5 3 2.687 3 4v9c0 1.313.967 2.5 2.678 3.162C6.683 16.837 7.782 17 9 17c1.218 0 2.317-.163 3.322-.838C13.033 15.5 14 14.313 14 13V4ZM3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12s2.766-.27 3.682-.687C12.644 10.875 13 10.373 13 10V8.698c-.271.202-.58.378-.904.525C11.022 9.711 9.573 10 8 10s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698Zm10 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z" />
  </svg>
);

const MobileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="text-gray-600"
  >
    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export { Feature };
