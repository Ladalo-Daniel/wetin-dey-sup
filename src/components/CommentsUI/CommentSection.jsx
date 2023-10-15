"use client"

import { UserFollowCard } from "./UserFollowCard"
import useAuthUser from "./useAuthUser";
import CommentActionCard from "../TimelineUI/CommentActionCard";
import { Avatar, Card, CardBody, CardFooter, Image, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import useCopyText from "./useCopyText";
import LikeButton from "./LikeButton";
import useComments from "./useComments";
import { useEffect, useState } from "react";

function CommentSection() {

    const [all_comments, setAllComments] = useState([])

    const { user } = useAuthUser()
    const {ref, isCopied, copyText} = useCopyText()
    const {comments} = useComments()
    
  return (
    <section className="mx-auto max-w-screen-lg flex flex-col flex-1 gap-4 scrollbar-hide">
      {comments.map(comment => (<div className="flex gap-2 p-2" key={comment?.name}>
        <div className="">
            <Popover showArrow placeholder="bottom">
                <PopoverTrigger>
                    <Avatar
                        isBordered
                        color="secondary"
                        src={comment?.profile}
                        className="w-[40px] h-[40px] rounded-[50%] cursor-pointer" 
                    />
                </PopoverTrigger>
                <PopoverContent className="p-1 dark:bg-darkSlate">
                    <UserFollowCard
                        fullName={comment?.name}
                        username={comment?.name?.split(" ").at(0)}
                        profileImg={comment?.profile}
                        bio="An upcoming software engineer and cloud computing expert."
                    />
                </PopoverContent> 
            </Popover>
        </div>
        <Card className="rounded-tl-none dark:bg-darkSlate">
            <CardBody className="text-tiny flex flex-row-reverse">
                <span className="float-right py-4 justify-start gap-4 leading-3 text-[10px] font-bold flex flex-[30px]">{comment?.timestamp}</span>
                <span className="pt-2">
                    <h4 className="text-orange py-2 leading-4 font-medium">{comment?.name}</h4>
                    <p ref={ref}>{comment?.comment}</p>
                </span>
            </CardBody>
            {(comment?.images.length === 1) && 
            <CardBody className="text-tiny">
            <Image
                src={comment?.images[0] || comment?.images}
                className="object-contain rounded-lg sm:w-[300px] w-full md:w-[400px] lg:w-[400px] xl:w-[400px]"
                isZoomed
            />
            </CardBody>}
            
            <CardFooter className="dark:bg-darkSlate flex items-center gap-6">
                <CommentActionCard isAuthor={(user?.username === comment?.name)} copyText={copyText} isCopied={isCopied} />
                <LikeButton />
            </CardFooter>
        </Card>
      </div>))}
    </section>
  )
}

export default CommentSection
