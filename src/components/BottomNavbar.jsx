"use client";
import { Tooltip } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { BsFillCalendarFill, BsGrid, BsGridFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThree, PiUsersThreeFill } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";

export default function BottomNavbar() {
  const Navigation = [
    {
      name: " Timeline",
      Link: "/timeline",
      icon: <BsGrid />,
      activeIcon: <BsGridFill />,
      tooltip: "Timeline",
    },
    {
      name: "My people",
      Link: "/my-people",
      icon: <PiUsersThree />,
      activeIcon: <PiUsersThreeFill />,
      tooltip: "My people",
    },
    {
      name: "Calender",
      Link: "/calender",
      icon: <LuCalendarDays />,
      activeIcon: <BsFillCalendarFill />,
      tooltip: "Calender",
    },
    {
      name: "Settings",
      Link: "/settings",
      icon: <SlSettings />,
      activeIcon: <IoMdSettings />,
      tooltip: "Settings",
    },
  ];
  const paths = usePathname();
  const router = useRouter();
  return (
    <>
      <nav className="flex items-center bg-white dark:bg-darkSlate justify-around z-[99] md:hidden gap-x-4 w-full py-3 fixed bottom-0 shadow-lg">
        {Navigation.map((items, index) => (
          <Tooltip
            key={index}
            className=" dark:bg-white dark:text-black  bg-slate rounded text-white "
            placement="top"
            content={items.tooltip}
          >
            <div
              onClick={() =>
                router.push(items.Link, { scroll: false, prefetch: false })
              }
              className="flex items-center flex-col gap-y-2"
            >
              <span
                className={`${
                  paths === items.Link
                    ? "text-orange dark:text-orange"
                    : "text-black dark:text-white"
                }  text-xl`}
              >
                {paths === items.Link ? items.activeIcon : items.icon}
              </span>
              <p
                className={` ${
                  paths === items.Link
                    ? "text-orange dark:text-orange"
                    : "text-black dark:text-white"
                }   font-poppins text-sm`}
              >
                {items.name}
              </p>
            </div>
          </Tooltip>
        ))}
      </nav>
    </>
  );
}