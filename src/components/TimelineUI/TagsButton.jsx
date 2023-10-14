"use client"
import { Button } from "@nextui-org/react";

export default function TagsButton() {
  return (
    <div className=" flex flex-row justify-center md:justify-center mx-4  gap-2 items-center mt-4">
       <Button className="  w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-white text-darkSlate active:bg-orange active:text-white">Me</Button>
       <Button className="  w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-white text-darkSlate active:bg-orange active:text-white">Friends</Button>
       <Button className=" w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-orange text-white  active:bg-orange active:text-white">Everyone</Button>
    </div>
  )
}
