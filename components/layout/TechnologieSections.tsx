import {
  SiAngular,
  SiAuth0,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { Card, CardContent } from "../ui/card";

const technologies = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  { name: "Stripe", icon: <SiStripe className="text-[#635BFF]" /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
  { name: "Auth0", icon: <SiAuth0 className="text-white" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#219b3b]" /> },
];

export default function TechnologieSections() {
  return (
    <section className="py-12 px-4 flex align-middle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
            Technologies & Outils
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Les technologies que j'utilise quotidiennement pour créer des
            expériences web modernes.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
"
        >
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group bg-black border border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-[180px] h-[110px] min-w-[100px]"
            >
              <CardContent className="aspect-square p-4 flex flex-col items-center justify-center text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-white">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
