export default function TexteComponent() {
  return (
    <div className="flex justify-center mt-20">
      <h2 className="max-w-[70rem] text-[35px]/10 text-[#000] text-center font-regular">
        Étudiant passionné en{" "}
        <span className="font-light text-[#FA9F18] italic">
          développement fullstack
        </span>
        ,<br />
        je crée des{" "}
        <span className="font-light text-[#FA9F18] italic">
          applications web
        </span>{" "}
        et{" "}
        <span className="font-light text-[#FA9F18] italic">sites modernes</span>
        alliant performance, design et expérience utilisateur.
        <br />
      </h2>
    </div>
  );
}
