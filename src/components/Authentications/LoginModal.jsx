"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { useFormik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import loginValidation from "@/lib/validation";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function AuthModalLogin({ isOpen, onOpenChange }) {
  const [showpassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    onSubmit,
  });


  async function onSubmit(values) {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res.error) {
        toast.error("Access denied!");
        navigator.vibrate([100, 30, 50]);
        return;
      }
      if (res.ok) {
        toast.success("Logged in succesfully");
        setDisable(true);
        setTimeout(() => {
          router.replace("/timeline");
        }, 5000);
      }
    } catch (error) {
      console.log(" failed to go to home page", error);
    }
  }

  return (
    <div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
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
              <h1 className=" text-black text-2xl font-semibold">Log in</h1>
              <div className=" h-1 bg-orange w-[120px]"></div>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={formik.handleSubmit}>
                <div className=" flex mb-3 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      {...formik.getFieldProps("email")}
                      disabled={disable}
                      // placeholder="Your email"
                      className={` ${
                        formik.errors.email && formik.touched.email
                          ? "border-orange"
                          : ""
                      } w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm  text-black rounded-lg`}
                    />
                    <span className="absolute text-xl text-gray  right-2 top-[1.2rem]">
                      <CiMail />
                    </span>
                  </div>
                </div>
                <div className=" flex mb-2 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className=" relative">
                    <input
                      // placeholder="Your password"
                      type={`${showpassword ? "password" : "text"}`}
                      {...formik.getFieldProps("password")}
                      disabled={disable}
                      className={` ${
                        formik.errors.password && formik.touched.password
                          ? "border-orange"
                          : ""
                      } w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm  text-black rounded-lg`}
                    />
                    <span
                      onClick={() => setShowPassword(!showpassword)}
                      className=" absolute text-xl  text-gray  right-2 top-[1.2rem]"
                    >
                      {showpassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </span>
                  </div>
                </div>

                <Button
                  isLoading={disable}
                  type="submit"
                  className=" bg-orange rounded hover:bg-lightOrange cursor-default md:cursor-pointer text-white font-medium py-6 w-full my-3"
                >
                  Log in
                </Button>
              </form>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
