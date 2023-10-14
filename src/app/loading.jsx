"use client"
import LoadingUI from "@/components/CommentsUI/loading";
import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    // <div className=" min-h-screen flex items-center flex-col justify-center gap-y-3 bg-slate">
    //  <Spinner size="lg"  color="warning" />
    //  <p className=" text-white">Loading...</p>
    // </div>
    <LoadingUI />
  );
}
