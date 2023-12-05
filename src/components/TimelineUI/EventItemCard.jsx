"use client"
import { Card, Chip, Image, Link, User } from '@nextui-org/react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'



export default function EventItemCard({ events}) {


 return (
    <div className=' font-poppinsf flex flex-col gap-5 relative items-start '>
      <div className=" flex gap-3 flex-1 overflow-x-scroll scrollbar-hide mt-2">
        {
          events.map((event) => (
            <Card className="dark:bg-darkSlate pb-4 w-[300px] rounded-md" key={event.authorName}>
                <Link href="#" className='flex flex-col gap-1 items-start text-inherit w-auto '>       
                <Image 
                    src={event?.img} 
                    alt={event?.title}  
                    style={{width: 300, height: 200, objectFit: "cover",}}
                    className="object-contain relative z-0 rounded-sm "
                    />
                    <div className="flex flex-col gap-1 event?-center pt-3 ml-4 mr-2">
                        <User   
                            name={event?.authorName}
                            description={(
                                <Link href='#' size="sm" isExternal>
                                @{event?.authorName}
                                </Link>
                            )}
                            avatarProps={{
                                src: event?.authorLogo
                            }} />
                    </div>
                    <Chip className=' ml-4 mt-1 bg-darkOrange p-1 rounded-md font-poppins w-max text-white'>{event?.tag}</Chip>
                    <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between">
                        <div className='flex items-center gap-2 text-xs'>
                        <BsCalendar2 color='orange' />
                        <span>{event?.eventDate}</span>
                        </div>
                        <div className='flex items-center gap-1 ml-5 '>
                            <BsClock  color='orange' />
                            <span>{event?.day}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 ml-4 text-sm'>
                        <SlLocationPin  color='orange' />
                        <span>{event?.location}</span>
                    </div>
                </Link>
            </Card>
            ))
        }
       </div>
    </div>
  )
}
