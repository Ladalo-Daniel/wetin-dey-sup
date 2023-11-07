"use client";
import { registerValidation } from "@/lib/validation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiMail, CiUser } from "react-icons/ci";

export default function AuthModalSignIn({ isOpen, onOpenChange }) {
  const [showpassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: registerValidation,
    onSubmit,
  });

  // async function onSubmit(values) {
  //   try {
  //     const checkUsers = await fetch("api/checkuser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     const { user } = await checkUsers.json();
  //     if (user) {
  //       toast.error("User already exist!!");
  //       // navigator.vibrate([100, 30, 50])
  //       return;
  //     }

  //     const res = await fetch("api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         redirect: false,
  //         name: values.name,
  //         email: values.email,
  //         password: values.password,
  //       }),
  //     });
  //     if (res.ok) {
  //       toast.success("Account Created sucessfully");
  //       setDisable(true);
  //       setTimeout(() => {
  //         router.push("/login");
  //       }, 5000);
  //     } else {
  //       toast.error("User registration failed.");
  //       navigator.vibrate([100, 30, 50])
  //     }
  //   } catch (error) {
  //     alert("Error durig registration:", error);
  //   }
  // }

  async function onSubmit(values) {
    try {
      const resUserExists = await fetch("api/checkuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const { user } = await resUserExists.json();
      if (user) {
        toast.error("User already exist!!");
        navigator.vibrate([100, 30, 50])
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          redirect: false,
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });
      if (res.ok) {
        toast.success("Account Created sucessfully");
        setDisable(true);
        setTimeout(() => {
          router.push("/login");
        }, 5000);
      } else {
        toast.error("User registration failed.");
        navigator.vibrate([100, 30, 50])
      }
    } catch (error) {
      alert("Error durig registration:", error);
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
              <h1 className=" text-black text-2xl font-semibold">Sign up</h1>
              <div className=" h-1 bg-orange w-[120px]"></div>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={formik.handleSubmit}>
                <div className=" flex mb-3 flex-col">
                  <label
                    className=" font-medium text-gray text-sm"
                    htmlFor="Name"
                  >
                    Name
                  </label>
                  <div className=" relative">
                    <input
                      type="text"
                      {...formik.getFieldProps("name")}
                      disabled={disable}
                      className={` ${
                        formik.errors.name && formik.touched.name
                          ? "border-orange"
                          : ""
                      } w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm  text-black rounded-lg`}
                    />
                    <span className="absolute right-2 text-xl text-gray top-[1.2rem]">
                      <CiUser />
                    </span>
                  </div>
                </div>
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
                      className=" absolute text-xl  text-gray right-2 top-[1.2rem]"
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
