"use client"

import { Chip } from "@nextui-org/react"
import EventItemCard from "./EventItemCard"
import { useSession } from "next-auth/react"



export default function EventTypeWrapper( { timestamp, events} ) {
  const { data:user } = useSession()
  return (
    <section className="flex flex-col gap-2 overflow-x-scroll scrollbar-default  mx-1 px-3">
       <Chip className='bg-darkOrange rounded-md text-white font-poppins '>{timestamp}</Chip>
       <EventItemCard user={user} events={events} />
    </section>
  )
}
