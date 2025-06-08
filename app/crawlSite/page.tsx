"use client";
import HeaderComponent from "@/components/layout/HeaderComponent";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Progress } from "@radix-ui/react-progress";
import { useState } from "react";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);

interface CrawlResults {
  title: string;
  h1Tags: string[];
  h2Tags: string[];
  metaDescription: string;
  seoScore: number;
  keywords: string[];
  loadTime: string;
  mobileResponsive: boolean;
  imageOptimization: {
    total: number;
    optimized: number;
    needsOptimization: string[];
  };
  internalLinks: number;
  externalLinks: number;
  sslCertificate: boolean;
  structuredData: boolean;
  accessibility: {
    score: number;
    issues: string[];
  };
}

export default function CrawlPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<CrawlResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeSiteWithGemini = async (url: string) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Analysez le site ${url} et retournez strictement ce format JSON sans commentaires ni explications:
    {
      "title": "titre de la page",
      "h1Tags": ["h1"],
      "h2Tags": ["h2"],
      "metaDescription": "description",
      "seoScore": 85,
      "keywords": ["mot1", "mot2"],
      "loadTime": "2.5s",
      "mobileResponsive": true,
      "imageOptimization": {
        "total": 10,
        "optimized": 8,
        "needsOptimization": ["image1.jpg"]
      },
      "internalLinks": 15,
      "externalLinks": 5,
      "sslCertificate": true,
      "structuredData": true,
      "accessibility": {
        "score": 90,
        "issues": ["issue1"]
      }
    }`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const cleanedResponse = response
        .text()
        .replace(/```json|```/g, "")
        .replace(/(\r\n|\n|\r)/gm, "")
        .trim();

      const parsedData = JSON.parse(cleanedResponse);
      return parsedData;
    } catch (error) {
      console.error("JSON parsing error:", error);
      throw new Error("Erreur lors de l'analyse des données");
    }
  };

  const handleCrawl = async () => {
    try {
      setLoading(true);
      setError(null);
      setProgress(25);

      const analysisData = await analyzeSiteWithGemini(url);
      setProgress(75);

      setResults(analysisData);
      setProgress(100);
    } catch (error) {
      setError("Erreur lors de l'analyse. Veuillez réessayer.");
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#000]">
        <HeaderComponent />
        <div className="container mx-auto px-4 py-8 w-[85rem]">
          {/* Search Section */}
          <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6 mb-8 mt-20">
            <div className="flex gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Entrez l'URL du site à analyser"
                className="flex-1 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white"
              />
              <button
                onClick={handleCrawl}
                disabled={loading}
                className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white px-8 py-3 rounded-lg hover:bg-yellow-600 disabled:opacity-50 transition-colors"
              >
                {loading ? "Analyse en cours..." : "Analyser"}
              </button>
            </div>

            {loading && (
              <div className="mt-4">
                <Progress value={progress} className="w-full h-2" />
                <p className="text-center mt-2 text-sm text-gray-600">
                  {progress}%
                </p>
              </div>
            )}
          </div>

          {results && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Score Global */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Score SEO Global</h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {results.seoScore}%
                      </span>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#FCD34D"
                        strokeWidth="3"
                        strokeDasharray={`${results.seoScore}, 100`}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Informations Principales */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Informations Principales
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-[#FA9F18]">Titre</p>
                    <p className="font-medium">{results.title}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#FA9F18]">
                      Temps de chargement
                    </p>
                    <p className="font-medium">{results.loadTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#FA9F18]">Responsive</p>
                    <p className="font-medium">
                      {results.mobileResponsive ? "Oui" : "Non"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Liens */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Liens</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg">
                    <p className="text-2xl font-bold text-white">
                      {results.internalLinks}
                    </p>
                    <p className="text-sm text-[#FA9F18]">Internes</p>
                  </div>
                  <div className="text-center p-4 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg">
                    <p className="text-2xl font-bold text-white">
                      {results.externalLinks}
                    </p>
                    <p className="text-sm text-[#FA9F18]">Externes</p>
                  </div>
                </div>
              </div>

              {/* Mots-clés */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Mots-clés</h2>
                <div className="flex flex-wrap gap-2">
                  {results.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Optimisation Images
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Images optimisées</span>
                    <span className="font-bold">
                      {results.imageOptimization.optimized}/
                      {results.imageOptimization.total}
                    </span>
                  </div>
                  <Progress
                    value={
                      results.imageOptimization.total > 0
                        ? Math.round(
                            (results.imageOptimization.optimized /
                              results.imageOptimization.total) *
                              100
                          )
                        : 0
                    }
                    className="w-full h-2"
                  />
                </div>
              </div>

              {/* Accessibilité */}
              <div className="bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Accessibilité</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Score</span>
                    <span className="font-bold">
                      {results.accessibility.score}%
                    </span>
                  </div>
                  <Progress
                    value={
                      typeof results.accessibility.score === "number"
                        ? Math.min(
                            Math.max(results.accessibility.score, 0),
                            100
                          )
                        : 0
                    }
                    className="w-full h-2"
                  />
                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">
                      Problèmes détectés
                    </h3>
                    <ul className="list-disc pl-4 text-sm text-red-600">
                      {results.accessibility.issues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
