import { socialLinks } from "@/app/data/contact-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import FormulaireComponent from "./FormulaireComponent";

export default function ContactSectionComponent() {
  return (
    <section className="py-14 px-8 xs:px-10 sm:px-14 md:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <FormulaireComponent />
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
  );
}
