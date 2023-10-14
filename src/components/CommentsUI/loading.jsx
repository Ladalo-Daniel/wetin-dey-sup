"use client"

import { SiFastapi } from "react-icons/si";

export default function LoadingUI() {
  return (
    <div className=" min-h-screen flex items-center flex-col bg-gradient-to-r from-orange to-lightOrange justify-center gap-y-3 text-6xl text-white">
     <SiFastapi className="animate-spin" />
     <p className="text-lg font-bold animate-bounce">WetinDeySup...</p>
    </div>
  );
}
