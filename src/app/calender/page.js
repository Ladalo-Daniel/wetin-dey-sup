'use client'

import CalenderComp from "@/components/Calender/CalenderEvent";
import Mainlayout from "@/components/Mainlayout";

export default function Calender() {
  return (
    <Mainlayout>
        <div className="dark:bg-slate bg-gray-100 pb-4 h-full relative md:h-screen w-[90%] md:w-3/5 mx-auto mb-7">
            <CalenderComp /> 
        </div>      
    </Mainlayout>
  );
}
