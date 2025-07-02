import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="mb-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
      Cambiar Tema
    </button>
  );
}