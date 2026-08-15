import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
    <ThemeContext>
        <App />
    </ThemeContext>
);
