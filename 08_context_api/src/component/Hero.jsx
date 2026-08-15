import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

function Hero() {
  const [isDark] = useContext(ThemeDataContext);
  return (
    <>
      <div className={`h-[85dvh] ${isDark ? "bg-zinc-950" : "bg-gray-700"}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-8xl font-bold">Hero section</h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
