'use client'

import Image from "next/image";
import {BsClock} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"

export default function CalenderEventsAccordion({events}) {
  return (
    <>
      {events.map((event) => (

        <div key={event.id} className="bg-white dark:border my-5 dark:bg-slate dark:border-[lightgrey] w-full flex rounded-md">
            <div className="p-2 flex items-center">
                {/* <image src="../../public/images/stefan-unsplash.jpg" alt='image' className="w-10 h-10" /> */}
                <Image 
                    src={event.image}
                    width={50}
                    height={30}
                    alt="hello"
                    className="h-10 w-10 rounded-full"
                />
            </div>
            <div className="py-3 px-1">
                  <h2 className="font-bold">{event.title}</h2>
                  <p className="flex items-center gap-x-2 text-gray-500" >
                    <span><BsClock className="text-gray-500" /></span> 
                    {event.start.toDateString()} - {event.end.toDateString()} 
                  </p>
                  <p className="flex items-center gap-x-2 text-gray-500" ><CiLocationOn className="text-gray-500" /> {event.location}</p>   
            </div>
        </div>
      ))}
    </>
    
  );
}

