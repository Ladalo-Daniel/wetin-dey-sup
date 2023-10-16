"use client"

import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Divider, Image } from "@nextui-org/react"
import { BsCalendar, BsClock, BsMap } from "react-icons/bs"
import CommentFormModal from "./CommentFormModal"
import { createContext, useState } from "react";
import useComments from "./useComments";


export const CommentContext = createContext()

function EventCard() {

  const eventData = {
    img: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    authorLogo: "https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    authorName: "Gaza",
    date: "Just now",
    link: "javascript:void(0)",
    eventDate: "Nov 3 2023",
    day: "Friday 4 - 6pm",
    location: "National Stadium Abuja",
    tag:"Football Match",
    group: "Sports"
}

  const [comment, setComment] = useState({})
  const {comments, appendComment} = useComments()
  console.log(comments)
  return (
    <CommentContext.Provider value={{comment, setComment, comments, appendComment }}>
    <div className="overflow-auto sticky">
      <Card className="p-0 rounded-[5px] border-0 dark:bg-darkSlate ">
        <Image
          alt="Card background"
          className="object-cover w-[100%] rounded-[5px] rounded-br-none rounded-bl-none "
          src={eventData?.img}
          
          />
        <CardBody className="pb-2 pt-2 px-4 flex-col items-start">
            <p className="text-tiny font-bold">{eventData?.tag}</p>
            <p className="flex tracking-tighter py-2 gap-3 items-center text-tiny text-slate-500">
              <span className="flex text-slate-500 items-center gap-2"><BsCalendar /> {eventData?.eventDate}</span>
              <span className="flex text-slate-500 items-center gap-2"><BsClock /> {eventData?.day}</span>
            </p>
            <p className="items-center text-slate-500 tracking-tighter text-tiny flex gap-2">
              <BsMap />
              {eventData?.location}
            </p>
        </CardBody>
        <CardBody className="py-1"> 
          <Divider />
        </CardBody>
        <CardFooter className="overflow-visible justify-start flex items-start flex-col gap-2">
          <Checkbox className="text-orange text-tiny text-slate-500">{`Check box to invite to ${eventData?.group}`}</Checkbox>
          <Button className="w-[100%] bg-orange font-bold text-white">
            Share
          </Button>
          
          <CommentFormModal />
        </CardFooter>
        </Card>
    </div>
    </CommentContext.Provider>
  )
}

export default EventCard
