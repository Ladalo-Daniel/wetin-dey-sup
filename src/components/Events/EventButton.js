"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPlus } from "react-icons/bs";
import { FaRegFaceSadCry } from "react-icons/fa6";

export default function EventButton() {
  const { data: session } = useSession();

  return <>{session ? <EventButton1 /> : <EventButton2 />}</>;
}

export function EventButton1() {
  const pathname = usePathname();
  return (
    <Button
      isIconOnly
      as={Link}
      href={"/create-an-event"}
      className={` ${
        (pathname === "/create-an-event" && "hidden") ||
        (pathname === "/notifications" && "hidden") ||
        (pathname === "/settings" && "hidden")
      }

      rounded-full shadow-xl  h-[50px] w-[50px] fixed z-[99] cursor-default items-center hover:bg-lightOrange justify-center md:cursor-pointer text-2xl bottom-32 lg:bottom-28 right-10 bg-orange text-white`}
    >
      <BsPlus />
    </Button>
  );
}

export function EventButton2() {
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        onClick={() => {
          window.navigator.vibrate([100, 30, 50]);
        }}
        className={` ${
          (pathname === "/create-an-event" && "hidden") ||
          (pathname === "/notifications" && "hidden") ||
          (pathname === "/settings" && "hidden")
        }       
        rounded-full shadow-xl h-[50px] w-[50px] fixed z-[99] cursor-default items-center hover:bg-lightOrange justify-center md:cursor-pointer text-2xl bottom-32 lg:bottom-28 right-10 bg-orange text-white`}
      >
        <BsPlus />
      </Button>
      <NotUserModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        textToDisplay={"You must be signed in before creating an event!"}
      />
    </>
  );
}

export function NotUserModal({ isOpen, onOpenChange, textToDisplay }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      className="rounded bg-white z-[999]  dark:bg-darkSlate py-3 "
      isDismissable={true}
    >
      <ModalContent>
        <ModalBody className="flex flex-col justify-center  items-center">
          <span className="text-6xl py-2">
            <FaRegFaceSadCry />
          </span>
          <h1 className="text-center ">{textToDisplay}</h1>
          <Button
            onClick={() => signIn({ callbackUrl: "/register" })}
            className="bg-darkOrange text-white w-[100%]  rounded-none hover:bg-orange"
          >
            Sign in now
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
