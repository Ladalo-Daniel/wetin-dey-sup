import SearchEvents from "@/components/TimelineUI/SearchEvents";
import TagsButton from "@/components/TimelineUI/TagsButton";
import UpcomingEventCard from "./UpcomingEventCard";
import EventTypeWrapper from "./EventTypeWrapper";


function TimeLineWrapper() {
  return (
    <div className=" min-h-screen">
         <div className="py-2">
            <SearchEvents />
            <TagsButton />
         </div>
         <div className="flex gap-4 justify-center xl:gap-10 flex-col gap-y-6 lg:flex-row-reverse xl:flex-row-reverse">
            <EventTypeWrapper />
            <UpcomingEventCard />
         </div>
    </div>
  )
}

export default TimeLineWrapper
