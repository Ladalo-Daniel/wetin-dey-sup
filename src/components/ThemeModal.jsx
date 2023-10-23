// import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import { HiCheckCircle } from "react-icons/hi";
import { MdOutlineNavigateNext } from "react-icons/md";

const ThemeSwitcherModal = ({ selectTheme, theme }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        className="w-full flex justify-end p-0 m-0 h-auto bg-transparent min-w-unit-1"
        onClick={onOpen}
      >
        <MdOutlineNavigateNext size={24} />
      </button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2md"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        className="-top-[40%] sm:top-0 bg-white mr-5 text-black font-medium text-xl dark:bg-darkSlate dark:text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Appearance
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-y-2">
                  <Button
                    onClick={() => selectTheme("light")}
                    className="w-full flex rounded-none bg-transparent justify-start cursor-default md:cursor-pointer items-center"
                  >
                    <IoIosSunny className="mx-2" /> Light Mode {theme === "light" && <span className=" pl-5 text-lg text-orange"><HiCheckCircle/></span>}
                  </Button>
                  <Button
                    onClick={() => selectTheme("dark")}
                    className="w-full flex rounded-none justify-start bg-transparent  cursor-default md:cursor-pointer items-center"
                  >
                    <PiMoonLight className="mx-2" /> Dark Mode {theme === "dark" && <span className=" pl-5 text-lg"><HiCheckCircle/></span>}
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThemeSwitcherModal;
