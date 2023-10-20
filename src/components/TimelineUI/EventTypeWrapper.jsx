import EventItemCard from "./EventItemCard"



export default function EventTypeWrapper( { events } ) {
  return (
    <section className="flex flex-col gap-2 overflow-y-auto scrollbar-hide  mx-1 px-3">
       <EventItemCard timestamp="Today" events={events} data={[]} />
    </section>
  )
}