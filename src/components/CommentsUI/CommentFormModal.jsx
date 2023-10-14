"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Tooltip} from "@nextui-org/react";
import { BsMailbox } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { PiMicrophone, PiPlus } from "react-icons/pi";


function CommentFormModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
        <Tooltip
            content={
                <div className="px-1 py-2">
                <div className="text-small font-bold">Hi there!</div>
                <div className="text-tiny">Comments helps other people to derive interest and inspiration from an Event.</div>
                </div>
            }
            >
            <Button onPress={onOpen} className="w-[100%] bg-darkOrange font-bold text-white">Post a Comment</Button>
        </Tooltip>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Post a Comment</ModalHeader>
              <ModalBody className="flex items-center">
                <Input
                  autoFocus
                  placeholder="Post a comment..."
                  variant="bordered"
                  className="border-orange"
                />
                <div className="flex py-2 px-1 justify-between gap-2">
                  <Button className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-lightOrange font-bold text-white">
                    <GrGallery />
                  </Button>
                  <Button className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-darkOrange font-bold text-white">
                    <PiMicrophone color="white" />
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-orange" onPress={onClose}>
                  Post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommentFormModal
