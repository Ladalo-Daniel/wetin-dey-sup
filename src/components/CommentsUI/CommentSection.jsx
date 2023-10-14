"use client"

import formatTimeToAMPM from "@/utils/formatTimeToAMPM"
// import Image from "next/image"
import { Avatar, AvatarGroup, Card, CardBody, Image } from "@nextui-org/react"

function CommentSection() {

    const comments = [
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
    ]


  return (
    <section className="mx-auto max-w-screen-lg flex flex-col gap-4">
      {comments.map(comment => (<div className="flex gap-2 p-2" key={comment.name}>
        <div className="">
            <Avatar
                src={comment.profile}
                className="w-[40px] h-[40px] rounded-[50%]" 
             />
        </div>
        <Card className="bg-inherit">
            <CardBody className="bg-inherit text-tiny">
                <span className="float-right py-2 leading-3 text-[10px] font-bold">{comment?.timestamp}</span>
                <h4 className="text-orange leading-4 font-medium">{comment?.name}</h4>
                <p>{comment?.comment}</p>
            </CardBody>
            {(comment?.images.length === 1) && 
            <CardBody className="bg-inherit text-tiny">
            <Image
                src={comment?.images[0]}
                className="object-contain rounded-lg sm:w-[300px] w-full md:w-[400px] lg:w-[400px] xl:w-[400px]"
                isZoomed
            />
            </CardBody>}
            {/* {(comment?.images.length > 1) && 
            <CardBody className="bg-inherit text-tiny">
                <AvatarGroup isBordered max={2}>
                   { comment?.images?.map(image => (<Avatar src={image}
                   radius="sm"
                   className="w-[300px] h-[300px]" 
                   key={image?.strip?.(15)}/>))}
                    
                </AvatarGroup>
            </CardBody>} */}
        </Card>
      </div>))}
    </section>
  )
}

export default CommentSection
