"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
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
  };

  return (
    <Button
      isIconOnly
      startContent={theme === "dark" ? <PiMoonLight /> : <IoIosSunny />}
      onClick={toggleTheme}
      className="flex justify-start px-3 bg-transparent  cursor-default md:cursor-pointer w-[100%] rounded-none items-center text-xl"
    >
      <span className=" pl-3 text-sm">
        {theme === "dark" ? "Dark theme" : "Light theme"}
      </span>
    </Button>
  );
}
