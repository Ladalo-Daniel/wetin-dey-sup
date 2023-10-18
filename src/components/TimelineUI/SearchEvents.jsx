"use client"

import { BsSearch } from "react-icons/bs";
import SearchModal from "./SearchModal";
import { useState } from "react";
import { Input } from "@nextui-org/react";

export default function SearchEvents() {
    // const [state, setState] = useState(false)

    // const handleSearch = (data) => {
    //     console.log(data)
    //     setState(!state)
    // }

  return (
     <>
      <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4">
        <Input
            isClearable
            type="text"
            onChange={() => {}}
            variant="bordered"
            placeholder="Search for events with keywords **..."
            // defaultValue={"Football"}
            onClear={() => {}}
            className="max-w-xl p-2"
        />
        {/* {handleSearch && <SearchModal state={state} setState={setState} />} */}
       </div>
     </>
        )
    }
