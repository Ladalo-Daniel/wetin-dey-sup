"use client";
import { usePathname, useRouter } from "next/navigation";
import { BsGrid } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThreeLight } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";

export default function BottomNavbar() {
  const Navigation = [
    { name: " Timeline", Link: "", icon: <BsGrid /> },
    { name: "My people", Link: "", icon: <PiUsersThreeLight /> },
    { name: "Calender", Link: "", icon: <LuCalendarDays /> },
    { name: "Setings", Link: "", icon: <SlSettings /> },
  ];
  const paths = usePathname();
  const router = useRouter()
  return (
    <>
      <nav className="flex items-center bg-white dark:bg-darkSlate justify-around z-[99] lg:hidden  gap-x-4 w-full py-3 fixed bottom-0 shadow-lg">
        {Navigation.map((items, index) => (
          <div key={index} onClick={() => router.push(items.Link)} className="flex items-center flex-col lg:flex-row lg:gap-x-2 lg:items-center gap-y-2">
            <span className={` text-black dark:text-white text-xl`}>{items.icon}</span>
            <p className={` text-black   dark:text-white font-poppins text-sm`}>{items.name}</p>
          </div>
        ))}
      </nav>
    </>
  );
}
