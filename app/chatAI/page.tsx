"use client";
import { getGeminiResponse } from "@/lib/gemini";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Plus, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChatInterface() {
  const [conversations, setConversations] = useState([
    { id: 1, title: "Nouvelle conversations", messages: [] },
  ]);
  const [currentChat, setCurrentChat] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleNewChat = () => {
    const newChat = {
      id: conversations.length + 1,
      title: "Nouvelle conversations",
      messages: [],
    };
    setConversations([...conversations, newChat]);
    setCurrentChat(newChat.id);
    setMessages([]);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setIsLoading(true);
      const userMessage = { role: "user", content: inputMessage };
      setMessages((prev) => [...prev, userMessage]);

      try {
        const aiResponse = await getGeminiResponse(inputMessage);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: aiResponse,
            },
          ]);
          setIsLoading(false);
        }, 1000);

        if (messages.length === 0) {
          const updatedConversations = conversations.map((conv) => {
            if (conv.id === currentChat) {
              return { ...conv, title: inputMessage.slice(0, 30) };
            }
            return conv;
          });
          setConversations(updatedConversations);
        }
      } catch (error) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "Je n'ai pas pu traiter votre demande. Veuillez réessayer.",
            },
          ]);
          setIsLoading(false);
        }, 1000);
      }

      setInputMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-[#212121] dark:bg-gray-900">
      {/* Left Sidebar with Text Logo */}
      <div className="w-64 bg-[#212121] border-r-[1px]  text-white p-4 flex flex-col">
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl font-bold text-white">
            Yellow
            <span className="text-[#eddb12] text-[16px] font-bold">AI</span>
          </h1>
        </div>

        <button
          onClick={handleNewChat}
          className="flex items-center gap-2 w-full  pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-md bg-[#fff] bg-opacity-20 backdrop-blur-xl hover:bg-[#eddb12] hover:bg-opacity-20 hover:backdrop-blur-xl  transition-colors"
        >
          <Plus size={16} />
          Nouveau chat
        </button>

        <div className="mt-4 flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setCurrentChat(chat.id)}
              className={`flex items-center gap-2  pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-md cursor-pointer hover:bg-[#eddb12] hover:bg-opacity-20 hover:backdrop-blur-xl  transition-colors ${
                currentChat === chat.id ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              <MessageSquare size={16} />
              <span className="truncate">{chat.title}</span>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 w-full  pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-md bg-[#fff] bg-opacity-20 backdrop-blur-xl hover:bg-[#ed1212] hover:bg-opacity-20 hover:backdrop-blur-xl  transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
            />
          </svg>
          Retour acceuil
        </Link>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Centered Text Logo */}
        <AnimatePresence>
          {!isInputFocused && messages.length === 0 && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-1/3 left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <h1 className="text-4xl font-bold text-white">
                Yellow
                <span className="text-[#eddb12]  font-bold">AI</span>
              </h1>
              <div className="space-y-4 mt-5">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MessageSquare size={20} />
                  <span>
                    Demandez-moi tout ce que vous voulez savoir sur le SEO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MessageSquare size={20} />
                  <span>
                    Obtenir des conseils sur l'optimisation des sites web
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MessageSquare size={20} />
                  <span>En savoir plus sur la recherche de mots-clés</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 pl-[5rem] pr-[5rem] pt-[3rem]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] ${
                  message.role === "assistant"
                    ? "bg-[#eddb12] bg-opacity-20 backdrop-blur-xl text-[#FFF] text-[13px]"
                    : "bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-[#FFF] text-[13px]"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-full pl-[20px] pr-[20px] pt-[10px] pb-[10px] bg-[#eddb12] bg-opacity-20 backdrop-blur-xl text-[#FFF] text-[13px]">
                <span className="animate-pulse">Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className=" dark:border-gray-700 p-4 pb-[2rem]">
          <div className="w-[49rem] mx-auto flex flex-col gap-4">
            {/* Quick Message Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setInputMessage(
                    "Comment améliorer le référencement de mon site web ?"
                  )
                }
                className="px-4 py-2 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-[#FFF] rounded-full  text-[13px]  hover:bg-[#eddb12] hover:bg-opacity-20 hover:backdrop-blur-xl hover:text-[#FFF]"
              >
                Améliorer le référencement du site web
              </button>
              <button
                onClick={() =>
                  setInputMessage(
                    "Quels sont les meilleurs outils de recherche de mots-clés ?"
                  )
                }
                className="px-4 py-2 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-[#FFF] rounded-full  text-[13px] hover:bg-[#eddb12] hover:bg-opacity-20 hover:backdrop-blur-xl hover:text-[#FFF]"
              >
                Outils de recherche de mots-clés
              </button>
              <button
                onClick={() =>
                  setInputMessage("Comment optimiser les balises méta ?")
                }
                className="px-4 py-2 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-[#FFF] rounded-full  text-[13px]  hover:bg-[#eddb12] hover:bg-opacity-20 hover:backdrop-blur-xl hover:text-[#FFF]"
              >
                Optimisation des balises méta
              </button>
            </div>

            {/* Main Input */}
            <div className="flex gap-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Tapez votre message ici..."
                className="flex-1 p-4 rounded-full bg-[#f4f4f4] h-[3rem] bg-opacity-20 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#eddb12] focus:ring-opacity-40 text-[#FFF]  text-[13px] placeholder:text-[#FFF]"
              />
              <button
                onClick={handleSendMessage}
                className="p-4 bg-[#eddb12] bg-opacity-20 backdrop-blur-xl h-[3rem] w-[3rem] flex justify-center text-white rounded-full hover:bg-[#eddb12] transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
