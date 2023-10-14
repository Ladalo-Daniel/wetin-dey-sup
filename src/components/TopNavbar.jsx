"use client";
import {
  Button,
  Navbar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { BsFillCalendarFill, BsGrid, BsGridFill } from "react-icons/bs";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThree, PiUsersThreeFill } from "react-icons/pi";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { GrLogout } from "react-icons/gr";
import Themeswitch from "./Themeswitcher";

export default function TopNavbar() {
  const Navigation = [
    {
      Link: "/timeline",
      icon: <BsGrid />,
      activeIcon: <BsGridFill />,
      tooltip: "Timeline",
      navigateupName: "Timeline",
    },
    {
      Link: "/my-people",
      icon: <PiUsersThree />,
      activeIcon: <PiUsersThreeFill />,
      tooltip: "My people",
      navigateupName: "my people",
    },
    {
      Link: "/calender",
      icon: <LuCalendarDays />,
      activeIcon: <BsFillCalendarFill />,
      tooltip: "Calender",
      navigateupName: "Calender",
    },
    {
      Link: "/settings",
      icon: <SlSettings />,
      activeIcon: <IoMdSettings />,
      tooltip: "Settings",
      navigateupName: "settings",
    },
    {
      Link: "/create-an-event",
      navigateupName: "Create event",
    },
    {
      // for testing purpose
      Link: "/comments",
      navigateupName: "Comments",
    },
  ];
  const paths = usePathname();
  const router = useRouter();
  return (
    <>
      <nav  className=" flex justify-between static  w-full items-center dark:bg-darkSlate  bg-white">
        <div className=" flex justify-normal gap-x-[0.20rem] py-3 items-center">
          <Tooltip
            placement="bottom"
            className=" dark:bg-white bg-slate text-white dark:text-black  rounded"
            content="Navigate up"
          >
            <Button
              isIconOnly
              onClick={() => {
                window.history.back();
              }}
              className=" bg-transparent dark:text-white text-xl"
            >
              <RiArrowLeftLine />
            </Button>
          </Tooltip>
          {Navigation.map((items, index) => (
            <span
              className="font-medium dark:text-white capitalize"
              key={index}
            >
              {paths === items.Link && items.navigateupName}
            </span>
          ))}
        </div>
        <nav className=" items-center  justify-between z-[99] hidden  w-[50%] lg:w-[40%] md:flex gap-x-4 py-3  ">
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
                className="cursor-pointer"
              >
                <span
                  className={`${
                    paths === items.Link
                      ? "text-orange dark:text-orange  "
                      : "text-black dark:text-white"
                  }  text-2xl`}
                >
                  {paths === items.Link ? items.activeIcon : items.icon}
                </span>
              </div>
            </Tooltip>
          ))}
        </nav>

        <Popover placement="bottom" className=" dark:border-white border">
          <PopoverTrigger>
            <Button
              isIconOnly
              className=" text-2xl rounded-full mr-2 bg-transparent"
            >
              <IoMdMore />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className=" w-[180px] px-0 py-3 h-[140px] bg-white dark:bg-darkSlate rounded
          "
          >
            <Button
              startContent={<SlSettings />}
              onClick={() =>
                router.push("/settings", { scroll: false, prefetch: false })
              }
              className=" flex w-[100%]  rounded-none items-center justify-start bg-transparent py-4 dark:text-white text-black"
            >
              Settings
            </Button>
            <Button
              startContent={<GrLogout />}
              className=" flex w-[100%] bg-lightRed  rounded-none items-center justify-start py-4 dark:text-white text-white"
            >
              Logout
            </Button>
            <Themeswitch />
          </PopoverContent>
        </Popover>
      </nav>
    </>
  );
}
