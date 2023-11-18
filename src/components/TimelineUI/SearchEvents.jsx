"use client"

import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchEventCard from "./SearchModal";
import { Card } from "@nextui-org/react";

export default function SearchEvents({ events }) {
    const [state, setState] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const searchModalRef = useRef()



    useEffect(() => {
        const handleModalClose = (e) => {
            if (searchModalRef.current && !searchModalRef.current.contains(e.target)) { 
                setSearchQuery("")
            }
        }
        document.addEventListener('click', handleModalClose)

        return () => {
            document.removeEventListener('click', handleModalClose);
        };
    }, [])
     
    const filteredEvents = events.filter((event) =>( 
          event?.tag?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
         // event.authorName.some((name) => name.toLowerCase().includes(searchQuery.toLowerCase()))
    ))


    

    const handleSearch = (events) => {
        console.log(events)
        setState(!state)
        console.log(searchQuery)
    }

  return (

          <form
            onSubmit={(e) => e.preventDefault()} 
            className="max-w-md px-4 mx-auto mt-5">
            <div className="relative">
                <BiSearch  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"  />
                <input
                    type="search"
                    placeholder="Search events here"
                    className="w-full py-2 pl-12 pr-4 text-gray-500 border dark:bg-slate rounded-md outline-none bg-gray-50 dark:focus:bg-lightSlate focus:border-indigo-600"
                    onKeyDown={handleSearch}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
           {searchQuery &&
            <Card ref={searchModalRef} className=" absolute w-[92vw]  md:w-[420px] flex flex-col justify-center items-center lg:w-[420px] pt-4 mt-1 bg-gray dark:bg-gray z-20  text-white dark:text-darkSlate rounded-md">
              <SearchEventCard setSearchQuery={setSearchQuery} events={filteredEvents} searchQuery={searchQuery} /> 
            </Card>}
         </form>
        )
    }
