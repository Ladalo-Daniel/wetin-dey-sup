"use client"

import formatTimeToAMPM from "@/utils/formatTimeToAMPM"
import { Avatar, Card, CardBody, CardFooter, Image, Popover, PopoverContent, Checkbox, PopoverTrigger, Tooltip } from "@nextui-org/react"
import { UserFollowCard } from "./UserFollowCard"
import {HeartIcon} from './HeartIcon'; 

function CommentSection() {

    const comments = [
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Gaza Nehemiah',
            profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Chinaza Daniel',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
    ]


  return (
    <section className="mx-auto max-w-screen-lg flex flex-col flex-1 gap-4 scrollbar-hide">
      {comments.map(comment => (<div className="flex gap-2 p-2" key={comment.name}>
        <div className="">
            <Popover showArrow placeholder="bottom">
                <PopoverTrigger>
                    <Avatar
                        isBordered
                        color="secondary"
                        src={comment.profile}
                        className="w-[40px] h-[40px] rounded-[50%] cursor-pointer" 
                    />
                </PopoverTrigger>
                <PopoverContent className="p-1">
                    <UserFollowCard
                        fullName={comment?.name}
                        username={comment?.name?.split(" ").at(0)}
                        profileImg={comment?.profile}
                        bio="An upcoming software engineer and cloud computing expert."
                    />
                </PopoverContent> 
            </Popover>
        </div>
        <Card className="rounded-tl-none">
            <CardBody className="text-tiny flex flex-row-reverse">
                <span className="float-right py-4 justify-start gap-4 leading-3 text-[10px] font-bold flex flex-[30px]">{comment?.timestamp}</span>
                <span className="pt-2">
                    <h4 className="text-orange py-2 leading-4 font-medium">{comment?.name}</h4>
                    <p>{comment?.comment}</p>
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
            <CardFooter>
                {/* <Tooltip content="Like" >
                     Causing run time errors
                    <Checkbox color="danger" icon={<HeartIcon />} />

                </Tooltip> */}
            </CardFooter>
        </Card>
      </div>))}
    </section>
  )
}

export default CommentSection
