"use client"

import SearchEvents from "@/components/TimelineUI/SearchEvents";
import TagsButton from "@/components/TimelineUI/TagsButton";
import UpcomingEventCard from "./UpcomingEventCard";
import EventTypeWrapper from "./EventTypeWrapper";
import WhoToFollowCard from "./WhoToFollowCard";
import { Card, Chip } from "@nextui-org/react";
import EventCard from "../CommentsUI/EventCard";

async function TimeLineWrapper() {
 
  const events = [
    {
        img: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
        authorLogo: "https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
        authorName: ["Gaza"],
        date: "Just now",
        link: "#",
        eventDate: "Nov 3 2023",
        day: "Friday 4 - 6pm",
        location: "National Stadium Abuja",
        tag:["Football Match"]
    },
    {
        img: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
        authorLogo: "https://img.freepik.com/free-photo/man-makes-winner-gesture_171337-17706.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
        authorName:[ "Ladalo"],
        date: "5hrs Ago",
        link: "#",
        eventDate: "Oct 27 2023",
        day: "Sunday 5 - 9pm",
        location: "Chida Event Centre Jabi",
        tag:["Koinonia Service"]
    },
    {
        img: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
        authorLogo: "https://img.freepik.com/free-photo/portrait-handsome-african-black-young-business-man-working-laptop-office-desk_231208-680.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
        link: "#",
        authorName: ["Nehemiah"],
        date: "Oct 13 2023",
        eventDate: "Oct 27 2023",
        day: "Sunday 5 - 9pm",
        location: "Ultimate Hotel Centre Garki",
        tag:["Pool Event"]
    },
    {
        img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
        authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
        authorName: ["Agape"],
        date: "Oct 13 2023",
        link: "#",
        eventDate: "Oct 27 2023",
        day: "Sunday 5 - 9pm",
        location: "Blablue Townhall Lagos",
        tag:["Music Concert"]
    }
]

  

  return (
    <div className=" min-h-screen">
      <div className="py-2">
        <SearchEvents events={events} />
        <TagsButton />
      </div>
      <div className=" flex flex-col md:flex-row-reverse justify-start gap-4 lg:flex-row-reverse xl:flex-row-reverse">
        <div className=" flex flex-col gap-5 md:overflow-x-scroll scrollbar-hide">
          <EventTypeWrapper timestamp="Trending" events={events} />
          <EventTypeWrapper timestamp="Today" events={events} />
        </div>
        <div className=" flex flex-col ">
          <UpcomingEventCard events={events} />

          <Card className=" flex flex-col gap-1 w-[90vw] md:w-[400px] lg:w-[400px] xl:w[500px] mx-4 mb-36 bg-white dark:bg-darkSlate font-poppins ">
            <Chip className="text-md font-bold text-white rounded-small bg-darkOrange mt-2 ml-6 mb-2  ">
              Who to follow
            </Chip>
            {events.map((e, i) => (
              <WhoToFollowCard key={i} authName={e.authorName} profileImage={e.img} />
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TimeLineWrapper;
