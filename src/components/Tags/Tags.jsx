'use client'

import Image from "next/image"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export default function TagsComp({ tags }) {
    
     return (
        <div className="flex overflow-x-auto h-[70vh] scrollbar-hide">
            {tags.map(({id, tagName, events, imageName}) => (
                <>
                    <div className="flex justify-center w-[80%] lg:w-[50%] flex-grow-1 flex-shrink-0">
                        {/* <Link href={`/tags/events/${id}`}> */}
                            <div key={id} className="dark:shadow-xl shadow-gray border  flex-shrink-0 mx-2 dark:border-lightSlate rounded-md text-black h-[90%] w-[90%] flex flex-col ">
                                <div key={id} className="w-full  h-[-webkit-fill-available] md:h-4/5">
                                    <Image 
                                        src={imageName}
                                        width={50}
                                        height={20}
                                        alt="hello"
                                        className="w-full h-full rounded-t-md"
                                    />            
                                </div>
                                <div key={id} className=" md:h-1/5 py-1 h-[20%] dark:bg-darkSlate dark:text-white flex justify-between px-2 items-center bg-white rounded-b-md">
                                    <h1 className="font-bold">{tagName}</h1>
                                    <Link href={`/tags/events/${id}`}>
                                        <Button className=" p-3 md:p-5 bg-darkOrange border-r-0"  variant="light">
                                            <h1 className="font-bold">{events} Events</h1>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        {/* </Link> */}
                    </div>
                </>
            ))}
        </div>           
    )
}
