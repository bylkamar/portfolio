"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoonFill, PiSunBold } from "react-icons/pi";
const ButtonSwitchTheme = () => {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="flex justify-end"
      >
        {theme === "dark" || theme === undefined ? (
          <PiSunBold size={25} />
        ) : (
          <PiMoonFill size={25} />
        )}
      </button>
    </div>
  );
};

export default ButtonSwitchTheme;
