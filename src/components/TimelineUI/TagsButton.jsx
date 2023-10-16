"use client"
import { Button, ButtonGroup } from "@nextui-org/react";

export default function TagsButton() {
  return (
    <ButtonGroup className="mt-3 mb-2 w-[100%]">
      <Button className="bg-darkOrange text-white w-fit">Me</Button>
      <Button className="bg-darkOrange text-white w-fit">Friends</Button>
      <Button className="bg-darkOrange text-white w-fit">Everyone</Button>
    </ButtonGroup>
  )
}

// <div className=" flex flex-row justify-center md:justify-center mx-4  gap-2 items-center mt-4">
//    <Button className="  w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-white text-darkSlate active:bg-orange active:text-white">Me</Button>
//    <Button className="  w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-white text-darkSlate active:bg-orange active:text-white">Friends</Button>
//    <Button className=" w-[28%] md:w-1/6 rounded-md md:py-4 py-2 font-poppins bg-orange text-white  active:bg-orange active:text-white">Everyone</Button>
// </div>