export default function TexteComponent() {
  return (
    <div className="flex justify-center mt-10 sm:mt-16 md:mt-20 px-6">
      <h2 className="max-w-[95vw] sm:max-w-[70rem] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[35px] leading-tight text-[#000] text-center font-regular">
        Passionné par le{" "}
        <span className="font-light text-[#FA9F18] italic">
          développement fullstack
        </span>
        , <br className="hidden sm:block" />
        je crée des{" "}
        <span className="font-light text-[#FA9F18] italic">
          applications web
        </span>{" "}
        et{" "}
        <span className="font-light text-[#FA9F18] italic">sites modernes</span>{" "}
        alliant performance, design et expérience utilisateur.
        <br />
      </h2>
    </div>
  );
}
