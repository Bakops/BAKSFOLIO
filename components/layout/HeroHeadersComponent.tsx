import { Hero } from "@/components/ui/animated-hero";
import HeaderComponent from "./HeaderComponent";
export default function HeroHeadersComponent() {
  return (
    <>
      <HeaderComponent />
      <div className="flex flex-col items-center shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] bg-[#000] text-white min-h-[65vh] md:min-h-[70vh] pb-8 pt-4 relative overflow-hidden px-4 sm:px-8">
        <Hero />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90vw] max-w-[70rem] h-[8vh] max-h-[10rem] md:h-[12vh] bg-[#FA9F18] opacity-30 blur-[40px] md:blur-[100px] rounded-full pointer-events-none"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-[40vw] max-w-[20rem] h-[5vh] max-h-[8rem] md:h-[7vh] bg-[#FA9F18] opacity-20 blur-[24px] md:blur-[70px] rounded-full pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-[40vw] max-w-[20rem] h-[5vh] max-h-[8rem] md:h-[7vh] bg-[#FA9F18] opacity-20 blur-[24px] md:blur-[70px] rounded-full pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>
        <div className="mt-10 md:mt-20 flex justify-center w-full animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="mx-auto"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
