import TodayEventCard from "./TodayEventCard";
import UpcomingEventCard from "./UpcomingEventCard";

export default function TodayWrapper() {
  return (
    <section className=" flex flex-col gap-2 mt-4 mx-5">
       <h1 className=" font-bold text-white w-max dark:text-white bg-darkOrange rounded-md px-2">Trending</h1>
       <TodayEventCard />
       <h1 className=" font-bold text-white w-max dark:text-white bg-darkOrange rounded-md px-2">Today</h1>
       <TodayEventCard />
       <h1 className=" font-bold text-white w-max dark:text-white bg-darkOrange rounded-md px-2">Upcoming</h1>
       <TodayEventCard />
       <h1 className=" font-bold text-white w-max dark:text-white bg-darkOrange rounded-md px-2">Upcoming</h1>
       <UpcomingEventCard />
    </section>
  )
}
