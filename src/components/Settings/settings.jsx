"use client";

import Link from "next/link";
// import { Link } from "next/navigation"
import ThemeSwitcherModal from "@/components/ThemeModal";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { BiLogOutCircle } from "react-icons/bi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiHelpCircle } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import {
  MdLightMode,
  MdOutlineNavigateNext,
  MdOutlinePrivacyTip,
} from "react-icons/md";

function SettingsComp({ userDetail }) {
  const { theme, setTheme } = useTheme();
  const selectTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      {userDetail.map((user, id) => (
        <div key={id} className="my-6 relative z-0">
          <Card className="py-4 flex max-w-lg mx-auto   flex-col items-center dark:bg-darkSlate bg-white shadow-lg dark:border dark:border-lightSlate rounded-lg">
            <CardHeader className="w-full pb-0 pt-2 px-4 text-center flex justify-center">
              <Image
                alt="User profile image"
                className="object-cover h-40 w-40 rounded-full"
                src={user.profileImage}
                width={150}
                height={50}
              />
            </CardHeader>
            <CardBody className="text-center">
              <p className="text-tiny uppercase font-bold">{user?.userName}</p>
              <small className="text-default-500">{user?.userEmail}</small>

              <Link
                scroll={false}
                prefetch={false}
                href={`/settings${`/edit-user`}`}
                className="font-bold py-2 px-2  hover:ring-1 hover:ring-orange  my-1 text-large w-fit mx-auto"
              >
                Edit Profile
              </Link>
            </CardBody>
          </Card>
        </div>
      ))}
      
      <div className=" grid grid-cols-1 gap-x-5 md:grid-cols-2">
        <div className="py-4 my-3 flex flex-col items-center dark:border rounded-lg shadow-lg dark:bg-darkSlate   dark:border-lightSlate bg-white">
          <div className="w-full gap-y-8">
            <Link
              scroll={false}
              prefetch={false}
              className="hover:bg-lightSlate"
              href={"/"}
            >
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[#d3d3d3]">
                <div className="flex items-center text-gray-600">
                  <IoMdNotificationsOutline className="mx-2" size={22} />
                  Notification
                </div>
                <div>
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
            <Link scroll={false} prefetch={false} href={"/privacy"}>
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[#d3d3d3]">
                <div className="flex items-center text-gray-600">
                  <MdOutlinePrivacyTip className="mx-2" size={22} />
                  Privacy
                </div>
                <div>
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
            <div>
              <div className="flex justify-between px1 py-3 dark:hover:bg-lightSlate relative hover:bg-[#d3d3d3]">
                <div className="flex items-center gap-x-2 text-gray-600">
                  <MdLightMode className="ml-3" size={22} />
                  <span> Appearance</span>
                </div>
                <div className="flex w-[99%] justify-end absolute">
                  <ThemeSwitcherModal selectTheme={selectTheme} theme={theme} />
                </div>
              </div>
            </div>
            <Link scroll={false} prefetch={false} href={"/"}>
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate hover:bg-[#d3d3d3]">
                <div className="flex items-center text-gray-600">
                  <IoLanguage className="mx-2" size={22} />
                  Language
                </div>
                <div className="flex gap-3">
                  {" "}
                  <span className="text-orange-500">EN</span>{" "}
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
            <Link scroll={false} prefetch={false} href={"/"}>
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[lightgrey]">
                <div className="flex items-center text-gray-600">
                  <FaGlobeAfrica className="mx-2" size={22} />
                  Region
                </div>
                <div>
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="py-4 mb-14 md:my-3 flex flex-col items-center rounded-lg shadow-lg dark:bg-darkSlate dark:border dark:border-lightSlate bg-white">
          <div className="w-full gap-y-8">
            <Link scroll={false} prefetch={false} href={"/"}>
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[lightgrey]">
                <div className="flex items-center text-gray-600">
                  <FiHelpCircle className="mx-2" size={22} />
                  Help and Support
                </div>
                <div>
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
            <Link scroll={false} prefetch={false} href={"/"}>
              <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate hover:bg-[lightgrey]">
                <div className="flex items-center text-gray-600">
                  <FcAbout className="mx-2 text-gray-600" size={22} />
                  About
                </div>
                <div>
                  <MdOutlineNavigateNext
                    className=" text-black dark:text-white"
                    size={22}
                  />
                </div>
              </div>
            </Link>
            <Button
              startContent={<BiLogOutCircle />}
              className=" bg-red text-white px-3 py-2 rounded-none  sm:w-auto sm:mx-3 w-full my-2"
            >
              SIGN OUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsComp;
