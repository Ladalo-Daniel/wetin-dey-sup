"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthUser from "./useAuthUser";


function UpdateComment({...props}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [comment, setComment] = useState(null)
  const { user } = useAuthUser()

  async function handleSubmit(e) {
    try {
      e.preventDefault()
      await setComment(comment => ({...comment, name: user?.username, profile: user?.profile, images: ['selectedImage']}))
      // updateList(comment)
      toast.success("Commented updated successfully.")
      onOpenChange(false)
    } catch(error) {
      toast.error(error)
    }
  }

  return (
    <>
    <Button className="bg-inherit" onPress={onOpen}>Edit comment</Button> 
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="bottom"
        className="z-[20000]"
        style={{zIndex: 999}}
      >
        <ModalContent className="dark:bg-darkSlate z-50">
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">Edit Comment</ModalHeader>
              <ModalBody className="flex items-center">
                  <Textarea
                    isRequired
                    label="Make a concise comment."
                    autoFocus
                    onChange={e => setComment({...comment, comment: e.target.value})}
                    maxLength={255}
                    minLength={8}
                    labelPlacement="outside"
                    placeholder="Post a comment..."
                    className="max-w-xs"
                    variant="bordered"
                    defaultValue={"A random comment to be dynamicaly rendered later"}
                  />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button><Button className="bg-orange" type="submit">Update</Button>
                
              </ModalFooter>
          </form>
          </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default UpdateComment
