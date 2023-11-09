"use client";
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { BsFillCalendarFill, BsGrid, BsGridFill } from "react-icons/bs";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { PiUsersThree, PiUsersThreeFill } from "react-icons/pi";
import { RiArrowLeftLine } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { GrLogin, GrLogout } from "react-icons/gr";
import Themeswitch from "./Themeswitcher";
import Headroom from "react-headroom";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";

export default function TopNavbar({ el, id, image }) {
  const { data: session } = useSession();
  const Navigation = [
    {
      Link: "/timeline",
      icon: <BsGrid />,
      activeIcon: <BsGridFill />,
      tooltip: "Timeline",
      navigateupName: "Timeline",
    },
    {
      Link: "/tags",
      icon: <PiUsersThree />,
      activeIcon: <PiUsersThreeFill />,
      tooltip: "My Tags",
      navigateupName: "my tags",
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
      Link: "/comments",
      navigateupName: "Comments",
    },
    {
      Link: `/tags/events/${id}`,
      navigateupName: (
        <div className="flex gap-2 items-center">
          {/* <Avatar src="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais" /> */}
          <Avatar src={`image`} />
          <div>
            <h2 className="font-semibold font-poppins light:text-slate">
              Techies
            </h2>
            <p className="font-thin dark:text-lightSlate text-gray-300 text-sm">
              12 members
            </p>
          </div>
        </div>
      ),
    },
    {
      Link: "/settings/edit-user",
      navigateupName: "Edit profile",
    },
    {
      Link: "/privacy",
      navigateupName: "Privacy policy",
    },
    {
      Link: "/notifications",
      navigateupName: "Notifications",
    },
  ];
  const paths = usePathname();
  return (
    <Headroom>
      <nav className="flex justify-between static  w-full items-center dark:bg-darkSlate  bg-white">
        <div className=" flex justify-normal gap-x-[0.10rem] py-3 items-center">
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
              onClick={() => {
                window.history.back();
              }}
              className="font-medium dark:text-white capitalize"
              key={index}
            >
              {paths === items.Link && items.navigateupName}
            </span>
          ))}
        </div>
        <div className="items-center  justify-between  hidden   w-[50%] translate-x-[20%]  md:flex gap-x-4 py-3  ">
          {Navigation.map((items, index) => (
            <Tooltip
              key={index}
              className=" dark:bg-white dark:text-black  bg-slate rounded text-white "
              placement="top"
              content={items.tooltip}
            >
              <Link
                href={items.Link}
                scroll={false}
                prefetch={false}
                className={` cursor-pointer `}
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
              </Link>
            </Tooltip>
          ))}
        </div>

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
            <Themeswitch />
            <Link
              href={"/settings"}
              scroll={false}
              prefetch={false}
              className=" flex w-[100%]  rounded-none items-center px-4 gap-x-3 justify-start bg-transparent py-4 dark:text-white text-black"
            >
              <span>
                <SlSettings />
              </span>
              Settings
            </Link>
            {!session ? (
              <Button
                onClick={(e) => signIn({ callbackUrl: "/" })}
                startContent={<GrLogin />}
                className=" flex w-[100%] bg-[rgb(35,97,35)]  rounded-none items-center justify-start py-4 dark:text-white text-white"
              >
                Sign in
              </Button>
            ) : (
              <Button
                onClick={(e) => signOut({ callbackUrl: "/login" })}
                startContent={<GrLogout />}
                className=" flex w-[100%] bg-red  rounded-none items-center justify-start py-4 dark:text-white text-white"
              >
                Sign out
              </Button>
            )}
          </PopoverContent>
        </Popover>
      </nav>
    </Headroom>
  );
}
