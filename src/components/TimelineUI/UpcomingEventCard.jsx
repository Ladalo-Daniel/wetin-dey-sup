"use client"

import { Avatar, Card, Chip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

export default function UpcomingEventCard({ events }) {
    
    return(
        <div className='flex relative z-0 flex-col gap-4 w-[90vw] md:w-[400px] lg:w-[400px] xl:w[500px] mx-4 mb-9 font-poppins'>
            <Chip className='text-md font-bold text-white rounded-small bg-darkOrange  '>Upcoming</Chip>
            {events.map((item, index) => (
                <Link href={item.link} key={index} className='relative z-0'>
                    <Card className='dark:bg-darkSlate py-4 px-2 flex flex-row justify-between items-center gap-1'>
                        <div className=' flex-[10%]'>
                            <Avatar src={item.img} alt={item.title} size='lg' radius="rounded"/>
                        </div>
                        <div className=' flex-[90%]'>
                           <div className=' flex justify-between mx-4'>
                             <h3 className=' font-bold'>{item.tag}</h3>
                             <h3 className=' dark:text-orange text-lightRed
                             '>{item.date}</h3>
                           </div>
                           <div>
                              <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between text-xs">
                                    <div className='flex items-center gap-2'>
                                    <BsCalendar2  color='orange' />
                                    <span>{item?.eventDate}</span>
                                    </div>
                                    <div className='flex items-center gap-1 '>
                                        <BsClock  color='orange' />
                                        <span>{item?.day}</span>
                                    </div>
                              </div>
                              <div className='flex items-center gap-1 ml-4 text-sm'>
                                <SlLocationPin  color='orange' />
                                <span>{item?.location}</span>
                              </div>
                           </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )

}
