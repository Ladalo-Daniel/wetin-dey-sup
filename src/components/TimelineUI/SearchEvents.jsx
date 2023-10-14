"use client"

import { BsSearch } from "react-icons/bs";
import SearchModal from "./SearchModal";
import { useState } from "react";

export default function SearchEvents() {
    const [state, setState] = useState(false)

    const handleSearch = (data) => {
        console.log(data)
        setState(!state)
    }

  return (
     <>
      <div
      className=" md:w-[60%] px-4 mx-auto mt-5">
            <div className="relative" 
            >
                <BsSearch 
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-slate dark:text-white left-3"
                onClick={handleSearch}
                />
                <input
                    type="text"
                    placeholder="Search events"
                    className="w-full py-3 font-poppins pl-12 pr-4 text-slate border-1 border-lightSlate rounded-md outline-none dark:bg-gray dark:border-lightSlate focus:bg-white dark:focus:bg-gray focus:border-darkSlate dark:text-white"
                    />
            </div>
        </div>
       {handleSearch && <SearchModal state={state} setState={setState} />}
     </>
        )
    }
