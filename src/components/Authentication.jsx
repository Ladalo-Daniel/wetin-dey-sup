"use client";
import { Button } from "@nextui-org/react";
export default function Authentication() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="flex min-h-screen  flex-col items-center  p-3">
      <Button className=" bg-darkOrange font-poppins my-3 font-medium">Welcome to watin Dey Sup</Button>
    </main>
  );
}
