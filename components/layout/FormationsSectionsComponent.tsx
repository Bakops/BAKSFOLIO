import { formations } from "@/app/data/propos-data";
import { GraduationCap, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function FormationsSectionsComponent() {
  return (
    <section className="py-14 px-8 xs:px-10 sm:px-14 md:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl xs:text-3xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-white">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
            Formations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base">
            Mon parcours académique et professionnel dans le développement web
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {formations.map((formation, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-orange-500 bg-[#101010] border-gray-800 flex flex-col h-full"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      formation.status === "En cours" ? "default" : "secondary"
                    }
                    className={
                      formation.status === "En cours"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-white"
                    }
                  >
                    {formation.status}
                  </Badge>
                  <span className="text-xs xs:text-sm text-gray-400 font-medium">
                    {formation.period}
                  </span>
                </div>
                <CardTitle className="group-hover:text-orange-500 transition-colors text-white text-base xs:text-lg sm:text-xl">
                  {formation.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1 text-gray-400 text-xs xs:text-sm">
                  <MapPin className="w-3 h-3" />
                  {formation.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs xs:text-sm sm:text-base text-gray-400 leading-relaxed">
                  {formation.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
