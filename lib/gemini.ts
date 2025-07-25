import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey =
  process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
  "AIzaSyBahb-GwJF9if4XnyhPHBwUPbnGXXtqoZA";
const genAI = new GoogleGenerativeAI(apiKey);

export async function getGeminiResponse(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
