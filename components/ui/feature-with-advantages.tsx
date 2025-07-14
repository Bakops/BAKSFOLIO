import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full px-2 sm:px-6 md:px-10 py-10 sm:py-20 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 items-start mx-2 sm:mx-0">
          <Badge>Développement Fullstack</Badge>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000] tracking-tighter lg:max-w-[44rem]">
              Construire des projets web de A à Z !
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-[44rem] leading-relaxed tracking-tight text-muted-foreground">
              Étudiant passionné en développement fullstack, je conçois des
              applications web modernes, performantes et évolutives, du
              front-end au back-end. Je réalise également des sites WordPress
              sur-mesure et du maquettage/design sur Figma.
            </p>
          </div>
          <div className="flex flex-col gap-10 pt-8 sm:pt-12 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[#FA9F18]"
                  >
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                  </svg>
                }
                title="Développement moderne"
                text="Interfaces réactives et intuitives avec React, Next.js et TailwindCSS."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[#FA9F18]"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                    <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0z" />
                  </svg>
                }
                title="Back-end robuste"
                text="API performantes, gestion de bases de données et sécurité des données."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[#FA9F18]"
                  >
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                  </svg>
                }
                title="Projet sur-mesure"
                text="Adaptation à vos besoins, design personnalisé et accompagnement."
              />
              <FeatureCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[#FA9F18]"
                  >
                    <path d="M7.999 0a8 8 0 1 0 0 16A8 8 0 0 0 7.999 0zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 1.2a5.3 5.3 0 1 0 0 10.6A5.3 5.3 0 0 0 8 2.7zm.001 1.3c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm4.5 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm2.25 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm-2.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zm2.25 0c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5z" />
                  </svg>
                }
                title="WordPress & Figma"
                text="Sites WordPress personnalisés et maquettes professionnelles sur Figma."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-row gap-3 sm:gap-4 items-start bg-white/70 rounded-xl shadow-sm p-4 transition hover:shadow-md">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="text-base sm:text-lg font-semibold text-[#222]">
          {title}
        </p>
        <p className="text-muted-foreground text-sm sm:text-base">{text}</p>
      </div>
    </div>
  );
}

export { Feature };
