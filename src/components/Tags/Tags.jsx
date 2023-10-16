'use client'

import Image from "next/image"
import { Button } from "@nextui-org/react"

export default function TagsComp({ tags }) {
    
     return (
        <>
            {tags.map(({id, tagName, events, imageName}) => (
                <div key={id} className="border dark:border-lightSlate rounded-md h-1/5 text-black md:h-2/5 flex flex-col my-10 bg-transparent">
                    <div key={id} className="w-full h-[150px] md:h-4/5">
                        <Image 
                            src={imageName}
                            width={50}
                            height={20}
                            alt="hello"
                            className="w-full h-full rounded-t-md  "
                        />            
                    </div>
                    <div key={id} className=" md:h-1/5 py-1 dark:bg-slate dark:text-white flex justify-between px-2 items-center bg-white rounded-b-md">
                        <h1 className="font-bold">{tagName}</h1>
                        <Button className=" p-3 md:p-5 bg-darkOrange"  variant="light">
                            <h1 className="font-bold">{events} Events</h1>
                        </Button>    
                    </div>
                </div>

            ))}
        </>           
    )
}