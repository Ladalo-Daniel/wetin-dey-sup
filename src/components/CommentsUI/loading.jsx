"use client"

import { SiFastapi } from "react-icons/si";

export default function LoadingUI() {
  return (
    <div className="loading min-h-screen flex items-center flex-col  justify-center gap-y-3 text-6xl text-white">
     <SiFastapi  />
     <p className="text-lg font-bold">WetinDeySup</p>
    </div>
  );
}
