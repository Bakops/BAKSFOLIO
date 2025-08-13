import { certifications } from "@/app/data/parcours-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import Image from "next/image";

export default function CertificationsComponenent() {
  return (
    <section className="py-14 px-8 xs:px-10 sm:px-14 md:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold mb-4 flex items-center justify-center gap-2">
            Certifications
          </h2>
          <p className="text-gray-400 max-w-[95vw] sm:max-w-2xl mx-auto text-sm xs:text-base">
            Certifications professionnelles obtenues pour valider mes
            compétences techniques
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-black border-white hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image
                        src={cert.imageUrl || "/placeholder.svg"}
                        alt={`${cert.provider} certification logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div className="lg:mt-2">
                      <Badge
                        variant="default"
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                      >
                        {cert.status}
                      </Badge>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="outline"
                          className="bg-gray-50 border-gray-200 text-black"
                        >
                          {cert.provider}
                        </Badge>
                        <span className="text-xs sm:text-sm text-white font-mono">
                          {cert.credentialId}
                        </span>
                      </div>
                      <p className="text-white leading-relaxed text-xs sm:text-base">
                        {cert.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm sm:text-base">
                        <Target className="w-4 h-4 text-orange-500" />
                        Compétences validées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs bg-transparent border-orange-500 text-white"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
