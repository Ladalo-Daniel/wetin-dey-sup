'use client'

import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";

const NoEvent = ({ isOpen, onClose }) => {
    const { onOpenChange } = useDisclosure();


    if(!isOpen) {
        return null;
    }

    return (
        <Modal 
            backdrop="opaque" 
            isOpen={isOpen} 
            onClose={onClose}
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
                    <ModalHeader className="flex flex-col gap-1">No Event</ModalHeader>
                    <ModalBody className="text-sm">
                        <p className="flex justify-center">No events are scheduled for this date.</p>
                    </ModalBody>
                </>
            )}
            </ModalContent>
        </Modal>
    );
  };
export default NoEvent;

