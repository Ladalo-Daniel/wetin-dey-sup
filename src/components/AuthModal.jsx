"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";

export default function AuthModal({ isOpen, onOpenChange }) {
  const [showpassword, setShowPassword] = useState(false);

  async function handleSubmit(data) {
    data.preventDefault()
    try {
    } catch (error) {}
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className=" rounded bg-white py-3 "
        isDismissable={false}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className=" text-black text-2xl font-semibold">Sign up</h1>
              <div className=" h-1 bg-orange w-[120px]"></div>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div className=" flex mb-3 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <div className=" relative">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className=" border-[0.15rem] rounded focus:border-orange border-lightSlate  bg-white px-2 w-full py-2 outline-none text-black"
                    />
                    <span className="absolute right-2 text-xl text-black top-3">
                      <RiUserLine />
                    </span>
                  </div>
                  {/* <span className="text-sm  text-red ">
                    fullname is a required field
                  </span> */}
                </div>
                <div className=" flex mb-3 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="Email"
                  >
                    Email:
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      className=" border-[0.15rem] rounded border-lightSlate focus:border-orange dark:bg-white  bg-white px-2 w-full py-2 outline-none text-black"
                    />
                    <span className="absolute text-xl text-black  right-2 top-3">
                      <RiMailLine />
                    </span>
                  </div>
                  {/* <span className="text-sm  text-red ">
                    email is a required field
                  </span> */}
                </div>
                <div className=" flex mb-2 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <div className=" relative">
                    <input
                      required
                      minLength={5}
                      placeholder="Your password"
                      type={`${showpassword ? "text" : "password"}`}
                      className=" border-[0.15rem] border-lightSlate rounded focus:border-orange  bg-white px-2 w-full py-2 outline-none text-black"
                    />
                    <span
                      onClick={() => setShowPassword(!showpassword)}
                      className=" absolute text-xl  text-black  right-2 top-3"
                    >
                      {showpassword ? <RiEyeLine /> : <RiEyeOffLine />}
                    </span>
                  </div>
                  {/* <span className="text-sm text-red">
                    password is a required field
                  </span> */}
                </div>

                <Button
                type="submit"
                  onClick={() => {
                    navigator.vibrate([100, 30, 50]);
                  }}
                  className=" bg-orange rounded hover:bg-lightOrange cursor-default md:cursor-pointer text-white font-medium py-6 w-full my-3"
                >
                  Sign up
                </Button>
              </form>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
