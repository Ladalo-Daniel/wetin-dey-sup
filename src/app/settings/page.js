'use client'

import {BiDotsVerticalRounded} from 'react-icons/bi'
import {Button} from "@nextui-org/react";
import Mainlayout from "@/components/Mainlayout";
import SettingsComp from '@/components/Settings/settings';

export default function Settings() {

  const userProfile = [
    {
      userName: "Salome Adams",
      userEmail: "salome357@gmail.com",
      profileImage: "images/stefan-unsplash.jpg",
    }
  ]
  
  return (
    <Mainlayout>
      <div className="p-4 bg-gray-100 h-full dark:bg-slate">
        <div className="flex justify-between relative pb-4">
          <h1 className="font-bold">Settings</h1>
          <BiDotsVerticalRounded className="w-6 h-6 text-gray-500"/>
        </div>
        <SettingsComp userDetail={userProfile} />
        <div className="my-2 flex flex-wrap gap-4 justify-center w-full items-center">
          <Button color="primary" className="p-4 rounded-md hover:text-white" variant="light">
            <span className='text-[#f56d6df2]'>SIGN OUT</span>
          </Button>
        </div>
      </div>
    </Mainlayout>
  );
}
