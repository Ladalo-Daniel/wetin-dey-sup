'use client'

import Link from "next/link";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {AiOutlineRight} from "react-icons/ai"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdOutlinePrivacyTip} from "react-icons/md"
import {RiApps2Line} from "react-icons/ri"
import {IoLanguage} from "react-icons/io5"
import {FaGlobeAfrica} from "react-icons/fa"
import {FiHelpCircle} from "react-icons/fi"
import {FcAbout} from "react-icons/fc"
import { useTheme } from "next-themes";
import ThemeSwitcherModal from "@/components/ThemeModal";




function SettingsComp({ userDetail }) {
    const { theme, setTheme } = useTheme();
    const selectTheme = (newTheme) => {
        setTheme(newTheme);
      }


  return (
    <div>
        {userDetail.map((user) => (
            <div key={user.id} className="my-6 relative z-0">
                <Card className="py-4 flex flex-col items-center dark:bg-slate shadow-md dark:border dark:border-lightSlate rounded-md">
                    <CardHeader className="w-full pb-0 pt-2 px-4 text-center flex justify-center">
                        <Image
                        alt="Card background"
                        className="object-cover h-40 w-40 rounded-full"
                        src={user.profileImage}
                        width={150}
                        height={50}
                        
                        />
                    </CardHeader>
                    <CardBody className="text-center">
                        <p className="text-tiny uppercase font-bold">{user.userName}</p>
                        <small className="text-default-500">{user.userEmail}</small>
                        <Link href={'/profile'} className="font-bold text-large">Edit Profile</Link>
                    </CardBody>
                </Card>
            </div>
        ))}
        
        <div className="py-4 my-3 flex flex-col items-center dark:border dark:bg-slate dark:border-lightSlate bg-white">
            <div className="w-full gap-y-8">
                <Link 
                    scroll={false}
                    prefetch={false} 
                    className="hover:bg-lightSlate" 
                    href={'/'}
                >
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[#d3d3d3]">
                        <div className="flex items-center text-gray-600">
                            <IoMdNotificationsOutline className="mx-2" size={24}/>
                            Notification
                        </div>
                        <div><AiOutlineRight size={24}/></div>
                    </div>
                </Link>
                <Link 
                    scroll={false}
                    prefetch={false} href={'/'}
                >
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[#d3d3d3]">
                        <div className="flex items-center text-gray-600">
                            <MdOutlinePrivacyTip className="mx-2" size={24}/>
                            Privacy
                        </div>
                        <div><AiOutlineRight size={24}/></div>
                    </div>
                </Link>
                <di>
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate relative hover:bg-[#d3d3d3]">
                        <div className="flex items-center text-gray-600">
                            <RiApps2Line className="mx-2" size={24}/>
                            Appearance
                        </div>
                        <div className="flex w-[99%] justify-end absolute">
                            <ThemeSwitcherModal selectTheme={selectTheme} />
                        </div>
                    </div>
                </di>
                <Link 
                    scroll={false}
                    prefetch={false} 
                    href={'/'}
                >
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate hover:bg-[#d3d3d3]">
                        <div className="flex items-center text-gray-600">
                            <IoLanguage className="mx-2" size={24}/>
                            Language
                        </div>
                        <div className="flex gap-3"> <span className="text-orange-500">EN</span> <AiOutlineRight  size={24}/></div>
                    </div>
                </Link>
                <Link 
                    scroll={false}
                    prefetch={false} 
                    href={'/'}
                >
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[lightgrey]">
                        <div className="flex items-center text-gray-600">
                            <FaGlobeAfrica className="mx-2" size={24}/>
                            Region 
                        </div>
                        <div><AiOutlineRight size={24}/></div>
                    </div>
                </Link>

            </div>
        </div>
        <div className="py-4 my-3 flex flex-col items-center dark:bg-slate dark:border dark:border-lightSlate bg-white">
            <div className="w-full gap-y-8">
                <Link
                    scroll={false}
                    prefetch={false} href={'/'}>
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate  hover:bg-[lightgrey]">
                        <div className="flex items-center text-gray-600">
                            <FiHelpCircle className="mx-2" size={24}/>
                            Help and Support
                        </div>
                        <div><AiOutlineRight size={24}/></div>
                    </div>
                </Link>
                <Link
                    scroll={false}
                    prefetch={false} href={'/'}>
                    <div className="flex justify-between px-2 py-3 dark:hover:bg-lightSlate hover:bg-[lightgrey]">
                        <div className="flex items-center text-gray-600">
                            <FcAbout className="mx-2 text-gray-600" size={24}/>
                            About
                        </div>
                        <div><AiOutlineRight size={24}/></div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    
  )
}

export default SettingsComp
