"use client"

import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchEvents({ events }) {
    const [state, setState] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    // console.log(events)

    

    const handleSearch = (events) => {
        console.log(events)
        setState(!state)
        console.log(searchQuery)
    }

  return (

          <form
            onSubmit={(e) => e.preventDefault()} 
            className="max-w-md px-4 mx-auto mt-7">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search events here"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border dark:bg-slate rounded-md outline-none bg-gray-50 dark:focus:bg-lightSlate focus:border-indigo-600"
                    onKeyDown={handleSearch}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
         </form>
    //  <>
    //   <div className="flex w-full  justify-center flex-wrap md:flex-nowrap gap-4">
    //     <BiSearch className=" absolute  mr-10" />
    //     <Input
    //         isClearable
    //         type="text"
    //         onChange={() => {}}
    //         variant="bordered"
    //         placeholder="Search for events with keywords **..."
    //         // defaultValue={"Football"}
    //         onClear={() => {}}
    //         className=" max-w-xs rounded-sm p-2 border border-lightSlate  "
    //     />
    //     {/* {handleSearch && <SearchModal state={state} setState={setState} />} */}
    //    </div>
    //  </>
        )
    }
