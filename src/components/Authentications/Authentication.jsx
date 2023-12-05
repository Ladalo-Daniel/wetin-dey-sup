"use client";
import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import AuthSignIn from "./SigninModal";
import AuthLogin from "./LoginModal";
import { signIn } from "next-auth/react";

export default function AuthenticationSignin() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // async function handleGoogleSignIn() {
  //   signIn("google", { callbackUrl: "/timeline" });
  // }

  // async function handleGithubSignIn() {
  //   signIn("github", { callbackUrl: "/timeline" });
  // }
  return (
    <main className="w-full   min-h-screen bottom-0 py-14  bg-formbackground flex flex-col font-poppins items-center justify-center px-3">
      <div className=" w-[98%] sm:max-w-md rounded-xl shadow-xl py-2  relative bg-white text-slate px-2 sm:px-3 space-y-8">
        <div className="text-center mt-9">
          <div className="mt-5 ">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome on board!
            </h3>
            <p className=" font-medium px-2">Sign up to get started.</p>
          </div>
        </div>
        <div className="absolute p-4 flex  justify-center -top-[3.2rem] rounded-full bg-orange text-white left-[45%]">
          <span className=" text-3xl">
            <SiFastapi />
          </span>
        </div>

        {/* <Button
          onPress={onOpen}
          className="w-full mt-4 px-4 py-6 cursor-default md:cursor-pointer text-white font-medium bg-darkOrange hover:bg-orange rounded-lg duration-150"
        >
          Sign up with email
        </Button> */}

        <AuthSignIn />

        {/* <div className="relative">
          <span className="block w-full h-px bg-lightSlate "></span>
          <p className="inline-block w-fit text-white text-sm bg-lightSlate px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div> */}
        <div className="text-sm  font-medium">
          {/* <Button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center cursor-default md:cursor-pointer justify-center gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black "
          >
            <span className=" text-xl">
              {" "}
              <FcGoogle />
            </span>
            Continue with Google
          </Button>
          <Button
            onClick={handleGithubSignIn}
            className="w-full flex items-center justify-center cursor-default md:cursor-pointer gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black "
          >
            <span className="text-xl">
              <FaGithub />
            </span>
            Continue with Github
          </Button> */}
          <div className="text-center  font-medium flex gap-x-2 justify-center">
            <span> Already have an account?</span>
            <Link
              href="/login"
              className="text-black underline font-semibold text-sm hover:underline hover:text-orange"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export function AuthenticationLogin() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // async function handleGoogleSignIn() {
  //   signIn("google", { callbackUrl: "/timeline" });
  // }
  // async function handleGithubSignIn() {
  //   signIn("github", { callbackUrl: "/timeline" });
  // }

  return (
    <main className="w-full h-screen  bg-formbackground flex flex-col font-poppins items-center justify-center px-3">
      <div className=" w-[98%] sm:max-w-md rounded-xl shadow-xl py-2 relative bg-white text-slate px-2 sm:px-3 space-y-8">
        <div className="text-center mt-9">
          <div className="mt-5 ">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Welcome on board!
            </h3>
            <p className=" font-medium px-2">Login to explore all potentials</p>
          </div>
        </div>
        <div className="absolute p-4 flex ite justify-center -top-[3.2rem] rounded-full bg-orange text-white left-[45%]">
          <span className=" text-3xl">
            <SiFastapi />
          </span>
        </div>

        {/* <Button
          onPress={onOpen}
          className="w-full mt-4 px-4 py-6 cursor-default md:cursor-pointer text-white font-medium bg-darkOrange hover:bg-orange rounded-lg duration-150"
        >
          Login and continue
        </Button> */}
        <AuthLogin />

        {/* <div className="relative">
          <span className="block w-full h-px bg-lightSlate "></span>
          <p className="inline-block w-fit text-white text-sm bg-lightSlate px-2 absolute -top-2 inset-x-0 mx-auto">
            Or continue with
          </p>
        </div> */}
        <div className=" text-sm  font-medium">
          {/* <Button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center cursor-default md:cursor-pointer justify-center gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black "
          >
            <span className=" text-xl">
              {" "}
              <FcGoogle />
            </span>
            Continue with Google
          </Button>
          <Button
            onClick={handleGithubSignIn}
            className="w-full flex items-center justify-center cursor-default md:cursor-pointer gap-x-3 py-5 border-[0.16rem] border-lightSlate rounded-lg bg-white text-black "
          >
            <span className="text-xl">
              <FaGithub />
            </span>
            Continue with Github
          </Button> */}
          <div className="text-center font-medium flex gap-x-2 justify-center">
            <span> Don&apos;t have an account?</span>
            <Link
              href="/"
              className="text-black underline font-semibold text-sm hover:underline hover:text-orange"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
