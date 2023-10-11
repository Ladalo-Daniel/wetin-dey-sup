"use client";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { BsPlus } from "react-icons/bs";

export default function EventButton() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Button
      isIconOnly
      onClick={() => {
        router.push("/create-an-event", { scroll: false, prefetch: false });
        window.navigator.vibrate([100, 30, 50]);
      }}
      className={` ${
        pathname === "/create-an-event" ? "hidden" : "flex"
      } rounded-full  drop-shadow-xl  h-[50px] w-[50px] fixed z-[99] cursor-default items-center hover:bg-lightOrange justify-center md:cursor-pointer text-2xl bottom-32 lg:bottom-28 right-7 bg-orange text-white`}
    >
      <BsPlus />
    </Button>
  );
}
