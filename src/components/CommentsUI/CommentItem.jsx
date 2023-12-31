import CommentActionCard from "./CommentActionCard";

import { Avatar, Card, CardBody, CardFooter, Image, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { UserFollowCard } from "./UserFollowCard"
import useAuthUser from "./useAuthUser";
import useCopyText from "./useCopyText";
import LikeButton from "./LikeButton";


function CommentItem({comment}) {
  const { user } = useAuthUser()
  const {ref, isCopied, copyText} = useCopyText()

  return (
    <div className="flex gap-2 p-2">
        <div className="">
            <Popover showArrow placeholder="bottom">
                <PopoverTrigger>
                    <Avatar
                        isBordered
                        color="secondary"
                        src={comment?.creator?.profileImage || '/assets/profile-placeholder.svg'}
                        className="w-[40px] h-[40px] rounded-[50%] cursor-pointer" 
                    />
                </PopoverTrigger>
                <PopoverContent className="p-1 dark:bg-darkSlate">
                    <UserFollowCard
                        fullName={comment?.creator}
                        username={comment?.creator?.split(" ").at(0)}
                        profileImg={comment?.creator?.profileImage}
                        bio="An upcoming software engineer and cloud computing expert."
                    />
                </PopoverContent> 
            </Popover>
        </div>
        <Card className="rounded-tl-none dark:bg-darkSlate">
            <CardBody className="text-tiny flex flex-row-reverse">
                <span className="float-right py-4 justify-start gap-4 leading-3 text-[10px] font-bold flex flex-[30px]">{comment?.timestamp}</span>
                <span className="pt-2">
                    <h4 className="text-orange py-2 leading-4 font-medium">{comment?.creator?.name}</h4>
                    <p ref={ref}>{comment?.title}</p>
                </span>
            </CardBody>
            {(comment?.imageUrl) && 
                <CardBody className="text-tiny">
                <Image
                    src={comment?.images[0] || comment?.images}
                    className="object-contain rounded-lg sm:w-[300px] w-full md:w-[400px] lg:w-[400px] xl:w-[400px]"
                    isZoomed
                    alt="event picture"
                />
                </CardBody>}
            
            <CardFooter className="dark:bg-darkSlate flex items-center gap-6">
                <CommentActionCard isAuthor={(user?._id === comment?.creator?._id)} copyText={copyText} isCopied={isCopied} />
                <LikeButton likes={comment?.likes} />
            </CardFooter>
        </Card>
      </div>
  )
}

export default CommentItem
