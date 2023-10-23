"use client"

import { Chip } from "@nextui-org/react"
import EventItemCard from "./EventItemCard"



export default function EventTypeWrapper( { timestamp, events } ) {
  return (
    <section className="flex flex-col gap-2 overflow-y-auto scrollbar-hide  mx-1 px-3">
       <Chip className='bg-darkOrange rounded-md text-white font-poppins '>{timestamp}</Chip>
       <EventItemCard events={events} />
    </section>
  )
}
