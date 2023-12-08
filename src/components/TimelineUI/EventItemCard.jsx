"use client"
import { useGetEvents } from '@/lib/react-query/queriesMutations'
import { Card, Chip, Image, Link, Skeleton, Spinner, User } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
// import SkeletonApp from './Skeleton'
// import Reveal from './Reveal'
import EventCardSkeleton from './SkeletonUIs'



export default function EventItemCard({events:skeletonEvent}) {
    // const { data: user } = useSession()
    // console.log(user)
   
    const {data:events, isLoading, error} = useGetEvents()
    // console.log(events);


 return (
    <div className=' font-poppinsf flex flex-col gap-5 relative items-start '>
      <div className=" flex gap-3 flex-1 overflow-x-scroll scrollbar-hide mt-2">
        {isLoading || events?.data?.length === 0 || error ? (
            <EventCardSkeleton />
        ) :
          (events?.data?.map((event) => (
            <Card className="dark:bg-darkSlate pb-4 w-[300px] rounded-md" key={event?.authorName || event?.userId}>
                <Link href={`/timeline/${event._id}`} className='flex flex-col gap-1 items-start text-inherit w-auto '>       
                <Image 
                    src={event?.eventImage} 
                    alt={event?.eventTitle}  
                    style={{width: 300, height: 200, objectFit: "cover",}}
                    className="object-contain relative z-0 rounded-sm "
                    />
                    <div className="flex flex-col gap-1 event?-center pt-3 ml-4 mr-2">
                        <User   
                            name={event?.creator?.name || event?.userId}
                            description={(
                                <Link href='#' size="sm" isExternal>
                                @{event?.creator?.name?.split(" ").at(0) || event?.userId}
                                </Link>
                            )}
                            avatarProps={{
                                src: event?.creator?.profilePicture
                            }} />
                    </div>
                    <Chip className=' ml-4 mt-1 bg-darkOrange p-1 rounded-md font-poppins w-max text-white'>{event?.eventTitle}</Chip>
                    <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between">
                        <div className='flex items-center gap-2 text-xs'>
                        <BsCalendar2 color='orange' />
                        <span>{event?.eventMonth + ", " + event?.eventDate}</span>
                        </div>
                        <div className='flex items-center gap-1 ml-5 '>
                            <BsClock  color='orange' />
                            <span>{event?.eventDay + " " + event?.eventTime}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 ml-4 text-sm'>
                        <SlLocationPin  color='orange' />
                        <span>{event?.eventLocation}</span>
                    </div>
                </Link>
            </Card>
            )))
        }
       </div>
    </div>
  )
}
