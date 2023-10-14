"use client";
import { Button } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";

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
    navigator.vibrate([100, 30, 50]);
    navigator.vibrate([100, 30, 50]);
  };

  return (
    <div className=" flex flex-col gap-y-2">
      {theme === "dark" ? (
        <h1 className=" font-medium text-xl">Dark theme</h1>
      ) : (
        <h1 className=" font-medium text-xl">Light theme</h1>
      )}
      <Button
        isIconOnly
        onClick={toggleTheme}
        className=" flex justify-center cursor-default md:cursor-pointer w-[120px] rounded-none items-center text-xl"
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
