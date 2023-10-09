"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import { Button } from "@nextui-org/react";

export default function Themeswitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className=" flex flex-col gap-y-2">
      {theme === 'dark' ? <h1>Dark theme</h1> : <h1>Light theme</h1>}
      <Button
        isIconOnly
        onClick={toggleTheme}
        className=" flex justify-center items-center text-xl"
      >
        {theme === "dark" ? (
          <span className="active:rotate-[360deg] duration-500">
            <IoIosSunny />
            <span className=" sr-only">Dark Theme</span>
          </span>
        ) : (
          <span className="active:rotate-[360deg] duration-500">
            <PiMoonLight />
            <span className=" sr-only">Light Theme</span>
          </span>
        )}
      </Button>
    </div>
  );
}
