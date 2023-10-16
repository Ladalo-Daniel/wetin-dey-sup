"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link, Tooltip, Textarea} from "@nextui-org/react";
import { PiMicrophone } from "react-icons/pi";
import useAuthUser from "./useAuthUser";
import { useContext, useState } from "react";
import { FcGallery } from "react-icons/fc";
import { CommentContext } from "./EventCard";
// import useComments from "./useComments";

function CommentFormModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {isAuthenticated, user} = useAuthUser()
  // const [comment, setComment] = useState({})
  // const {comments, appendComment: updateList} = useComments()

  const {comment, setComment, comments, appendComment: updateList} = useContext(CommentContext)

  function handleSubmit(e) {
    e.preventDefault()
    setComment({...comment, name: user?.username, profile: user?.profile, images: [this?.image]})
    updateList(comment)
    onOpenChange(false)
    
  }

  return (
    <>
        <Tooltip
            content={
                <div className="px-1 py-2">
                <div className="text-small font-bold">Hi there!</div>
                <div className="text-tiny">Comments helps other people to derive interest and inspiration from an Event.</div>
                </div>
            }
            className="dark:bg-darkSlate"
            >
            <Button onPress={onOpen} className="w-[100%] bg-darkOrange font-bold text-white">Post a Comment</Button> 
        </Tooltip>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent className="dark:bg-darkSlate">
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">Post a Comment</ModalHeader>
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
                  />
                    <div className="flex py-2 px-1 justify-between items-center gap-2">
                      <label htmlFor="image" className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center bg-lightOrange rounded-full">
                        <FcGallery size={30} aria-label="input element for images." color="white" />
                      </label>
                      <span style={{display: "none"}}><Input style={{display: "none", }} type="file" accept="image/*" id="image" onChange={e => setComment({...comment, image: e.target.files.at(0)})}  className="w-0 h-0 rounded-full flex justify-center items-center bg-inherit" /></span>

                      <Button className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-darkOrange font-bold text-white">
                        <PiMicrophone color="white" />
                      </Button>
                    </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                {!isAuthenticated ? 

                <Tooltip className="dark:bg-darkSlate" content={<p>You must be logged in to be able to comment on this Event. Visit <Link href ='/signup'>Sign Up page</Link> to Sign up</p>}>
                  <Button className= "cursor-not-allowed bg-lightOrange" onPress={onClose} disabled={!isAuthenticated}>
                    Post
                  </Button>
                </Tooltip>
                
                : <Button className="bg-orange" type="submit">Post</Button>}
                
              </ModalFooter>
          </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default CommentFormModal
