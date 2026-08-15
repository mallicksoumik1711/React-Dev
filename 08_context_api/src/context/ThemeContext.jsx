import { createContext } from "react";
import { useState } from "react";

export const ThemeDataContext = createContext();

function ThemeContext({ children }) {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <ThemeDataContext.Provider value={[isDark, setIsDark]}>
        {children}
      </ThemeDataContext.Provider>
    </>
  );
}

export default ThemeContext;
