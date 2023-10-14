"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import AuthModal from "./AuthModal";

export default function Authentication() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="w-full h-screen  bg-formbackground flex flex-col font-poppins items-center justify-center px-3">
      <div className=" w-[95%] sm:max-w-md rounded-xl shadow-xl py-2  relative bg-white text-slate px-2 sm:px-3 space-y-8">
        <div className="text-center mt-9">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome on board!
            </h3>
            <p className=" font-medium px-2">
              Explore a wide range of events happening in your area. We have
              something for everyone.
            </p>
          </div>
        </div>
        <div className="absolute p-4 flex ite justify-center -top-[3.2rem] rounded-full bg-orange text-white left-[44%]">
          <span className=" text-3xl">
            <SiFastapi />
          </span>
        </div>

        <Button
          onPress={onOpen}
          className="w-full mt-4 px-4 py-6 cursor-default md:cursor-pointer text-white font-medium bg-darkOrange hover:bg-orange rounded-lg duration-150"
        >
          Sign up with email
        </Button>
        <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />

        <div className="relative">
          <span className="block w-full h-px bg-lightSlate "></span>
          <p className="inline-block w-fit text-white text-sm bg-lightSlate px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div>
        <div className="space-y-4 text-sm  font-medium py-4">
          <Button className="w-full flex items-center cursor-default md:cursor-pointer justify-center gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black ">
            <span className=" text-xl">
              {" "}
              <FcGoogle />
            </span>
            Continue with Google
          </Button>
          <Button className="w-full flex items-center justify-center cursor-default md:cursor-pointer gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black ">
            <span className="text-xl">
              <RiTwitterXFill />
            </span>
            Continue with X
          </Button>
          <div className="text-center">
            <Link
              href=""
              className="text-black font-semibold text-sm hover:underline hover:text-orange"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
