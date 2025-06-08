import { Hero } from "@/components/ui/animated-hero";
import HeaderComponent from "./HeaderComponent";
export default function HeroHeadersComponent() {
  return (
    <div className="flex flex-col items-center bg-[#000] text-white min-h-[90vh] rounded-b-3xl pb-8 pt-4 relative overflow-hidden">
      <HeaderComponent />
      <Hero />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[70rem] h-[20rem] bg-[#FA9F18] opacity-30 blur-[120px] rounded-full pointer-events-none"
        style={{ zIndex: 1 }}
      ></div>
      <div
        className="absolute bottom-0 left-1/4 w-[30rem] h-[15rem] bg-[#FA9F18] opacity-20 blur-[100px] rounded-full pointer-events-none"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-[30rem] h-[15rem] bg-[#FA9F18] opacity-20 blur-[100px] rounded-full pointer-events-none"
        style={{ zIndex: 0 }}
      ></div>
      <div className="mt-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
          />
        </svg>
      </div>
    </div>
  );
}
