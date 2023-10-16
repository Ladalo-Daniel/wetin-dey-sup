import TodayEventCard from "./TodayEventCard";


export default function EventTypeWrapper() {
  return (
    <section className=" flex flex-col gap-2 mt-4 mx-5 h-[90vh] px-3 overflow-y-auto scrollbar-hide">
       <TodayEventCard timestamp="today" data={[]} />
       <TodayEventCard timestamp="Trending" data={[]} />
       <TodayEventCard timestamp="Following" data={[]} />
    </section>
  )
}
