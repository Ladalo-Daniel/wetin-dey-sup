"use client";
import { Button, useDisclosure, ButtonGroup } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { NotUserModal } from "../Events/EventButton";

export default function TagsButton() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();
  const { data: session } = useSession();
  return (
    <>
      <ButtonGroup className="mt-3 mb-2 w-[100%]">
        {session ? (
          <Button className=" hover:bg-orange bg-white text-darkSlate w-fit">
            Me
          </Button>
        ) : (
          <>
            <Button
              onPress={onOpen}
              className=" hover:bg-orange bg-white text-darkSlate w-fit"
            >
              Me
            </Button>
          </>
        )}

        {session ? (
          <Button className=" hover:bg-orange bg-white text-darkSlate w-fit">
            Friends
          </Button>
        ) : (
          <Button
            onPress={onOpen}
            className=" hover:bg-orange bg-white text-darkSlate w-fit"
          >
            Friends
          </Button>
        )}
        <Button className="bg-darkOrange text-white w-fit">Everyone</Button>
      </ButtonGroup>
      <NotUserModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        textToDisplay={"You must be signed in to run that command"}
      />
    </>
  );
}
