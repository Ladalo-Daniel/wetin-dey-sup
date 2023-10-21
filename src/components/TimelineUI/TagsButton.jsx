"use client"
import { Button, ButtonGroup } from "@nextui-org/react";

export default function TagsButton() {
  return (
    <ButtonGroup className="mt-3 mb-2 w-[100%]">
      <Button className=" hover:bg-orange bg-white text-darkSlate w-fit">Me</Button>
      <Button className=" hover:bg-orange bg-white text-darkSlate w-fit">Friends</Button>
      <Button className="bg-darkOrange text-white w-fit">Everyone</Button>
    </ButtonGroup>
  )
}

