import EventItemCard from "./EventItemCard"



export default function EventTypeWrapper() {
  return (
    <section className=" flex flex-col gap-2 mt-4 mx-5 h-[65vh] lg:h-[90vh] px-3 overflow-y-auto scrollbar-hide">
       <EventItemCard timestamp="Today" data={[]} />
       {/* <EventItemCard timestamp="Trending" data={[]} />
       <EventItemCard timestamp="Following" data={[]} /> */}
    </section>
  )
}
