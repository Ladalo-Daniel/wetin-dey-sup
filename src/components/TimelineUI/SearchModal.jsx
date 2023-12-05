"use client"

import { Avatar, Card, Spinner} from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

export default function SearchEventCard({ events, setSearchQuery, searchQuery, isLoading, error}) {
  console.log(events);

    if(searchQuery.length < 2){
        return (<Spinner color='warning' />)
    }

    if(error){
        console.log(error)
    }
    
    if (events?.length === 0) return <p className=' text-darkSlate dark:text-white mb-4 text-center break-words mx-2'>Search results for <b className='text-orange'>{searchQuery}</b> not found.</p>

    return(
      <>
       <div onClick={(e) => setSearchQuery("")} className='flex flex-col gap-4 w-[80vw] md:w-[380px] lg:w-[380px] xl:w[380px] mx-3 mb-20 font-poppins'>
            {events?.map((item, index) => (
                <Link href={`/timeline/${item._id}`} key={index}>
                    <Card className='dark:bg-darkSlate py-4 px-2 flex flex-row justify-between items-center gap-1'>
                        <div className=' flex-[10%]'>
                            <Avatar src={item?.eventImage} alt={item?.eventTitle} size='lg' radius="rounded"/>
                        </div>
                        <div className=' flex-[90%]'>
                           <div className=' flex justify-between mx-4'>
                             <h3 className=' font-bold'>{item?.eventTitle}</h3>
                             <h3 className=' text-lightRed
                             '>{item?.eventDate}</h3>
                           </div>
                           <div>
                              <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-1 items-center justify-between text-xs">
                                    <div className='flex items-center gap-2'>
                                    <BsCalendar2  color='orange' />
                                    <span>{item?.eventDate}</span>
                                    </div>
                                    <div className='flex items-center gap-1 '>
                                        <BsClock  color='orange' />
                                        <span>{item?.eventDay}</span>
                                    </div>
                              </div>
                              <div className='flex items-center gap-1 ml-4 text-sm'>
                                <SlLocationPin  color='orange' />
                                <span>{item?.eventLocation}</span>
                              </div>
                           </div>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
      </>
    )

}
