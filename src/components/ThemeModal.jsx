// import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import { PiMoonLight } from "react-icons/pi";
import { MdOutlineDevices } from "react-icons/md";



const ThemeSwitcherModal = ({ selectTheme }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button className="w-full flex justify-end p-0 m-0 h-auto bg-transparent min-w-unit-1" onClick={onOpen}><AiOutlineRight size={24}/></button>
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
        className="-top-[40%] sm:top-0 bg-white text-black font-medium text-xl dark:bg-slate dark:text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Appearance</ModalHeader>
              <ModalBody>
              <div className="flex flex-col gap-y-2">
                <button onClick={() => selectTheme("light")} className="w-full flex justify-start items-center">
                <IoIosSunny className="mx-2" /> Light Mode
                </button>
                <button onClick={() => selectTheme("dark")} className="w-full flex justify-start items-center">
                  <PiMoonLight className="mx-2" /> Dark Mode
                </button>
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
