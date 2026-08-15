import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

function Navbar() {
  const [isDark, setIsDark] = useContext(ThemeDataContext);
  console.log(isDark);

  const themeToggle = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <div
        className={`flex flex-wrap justify-between items-center px-10 py-4 h-[15dvh] ${isDark ? "bg-zinc-900" : "bg-gray-500"}`}
      >
        <div className="h-20 w-20">
          <img
            className="h-full w-full object-cover rounded-full"
            src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div>
          <button
            onClick={themeToggle}
            className={`px-10 py-4 rounded-full font-bold ${isDark ? "bg-black" : "bg-gray-400"}`}
          >
            {isDark ? "Light Theme" : "Dark Theme"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
