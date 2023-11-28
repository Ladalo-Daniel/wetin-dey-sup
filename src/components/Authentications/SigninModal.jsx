"use client";
import { registerValidation } from "@/lib/validation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Avatar,
} from "@nextui-org/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UploadDropzone, } from "@/lib/uploadthing";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiMail, CiUser } from "react-icons/ci";

export default function AuthSignIn({ isOpen, onOpenChange }) {
  const [showpassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(false);
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      profilePicture: "",
    },
    validate: registerValidation,
    onSubmit,
  });

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
        navigator.vibrate([100, 30, 50]);
        return;
      }

      const res = await fetch("api/register/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          redirect: false,
          name: values.name,
          email: values.email,
          password: values.password,
          profilePicture: values.profilePicture,
        }),
      });
      if (res.ok) {
        toast.success("Account Created sucessfully", { duration: 2000 });
        setDisable(true);
        setTimeout(() => {
          toast.loading("Redirecting to login...", {
            className: "border border-orange",
            duration: 3000,
          });
          router.replace("/login");
        }, 5000);
      } else {
        toast.error("User registration failed.");
        navigator.vibrate([100, 30, 50]);
      }
    } catch (error) {
      alert("Error durig registration:", error);
    }
  }

  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
              duration: 2000,
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
      {/* <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className=" rounded bg-white py-3 "
        isDismissable={false}
      >
        <ModalContent> */}

      {/* <ModalHeader className="flex flex-col gap-1"> */}
      {/* <div className="flex flex-col gap-1">
        <h1 className=" text-black text-2xl font-semibold">Sign up</h1>
        <div className=" h-1 bg-orange w-[120px]"></div>
      </div> */}
      {/* </ModalHeader>
            <ModalBody> */}
      <form onSubmit={formik.handleSubmit} className="w-full h-auto">
        <div className="text-black my-2  bg-white">
          {formik.values.profilePicture ? (
            <div className="flex items-center flex-col justify-center w-full">
              <span className=" py-2">
                This picture will be used on your profile
              </span>
              <Avatar
                src={formik.values.profilePicture}
                size="xl"
                isBordered
                alt="Profile picture"
                width={100}
                height={100}
                className="w-64 rounded-full h-64 border object-cover"
              />
            </div>
          ) : (
            <UploadDropzone
              endpoint="ProfileImage"
              appearance={{
                button: {
                  background: "#f97316",
                  color: "white",
                  padding: "4px",
                },
                // borderRadi
              }}
              onClientUploadComplete={(res) => {
                console.log("Upload Response:", res);
                if (res[0] && res[0].url) {
                  setImageUrl(res[0].url);
                  formik.setFieldValue("profilePicture", res[0].url);
                  formik.getFieldProps("profilePicture");
                }

                // Do something with the response
                console.log("Files:", res);
                // toast.success("Uploaded");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                toast.error("something went wrong!!");
              }}
            />
          )}
        </div>
        <div className=" flex mb-3 flex-col">
          <label className=" font-medium text-gray text-sm" htmlFor="Name">
            Name
          </label>
          <div className=" relative">
            <input
              type="text"
              {...formik.getFieldProps("name")}
              disabled={disable}
              className={` ${
                formik.errors.name && formik.touched.name ? "border-orange" : ""
              } w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm  text-black rounded-lg`}
            />
            <span className="absolute right-2 text-xl text-gray top-[1.2rem]">
              <CiUser />
            </span>
          </div>
        </div>
        <div className=" flex mb-3 flex-col">
          <label className=" font-medium text-gray text-sm" htmlFor="Email">
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
          <label className=" font-medium text-gray text-sm" htmlFor="password">
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
              {showpassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </div>
        {formik.values.profilePicture ? (
          <Button
            isLoading={disable}
            type="submit"
            className=" bg-orange rounded hover:bg-lightOrange cursor-default md:cursor-pointer text-white font-medium py-6 w-full mt-3"
          >
            {disable ? "redirecting..." : "Sign up"}
          </Button>
        ) : (
          <Button
            type="button"
            disabled
            className=" bg-slate rounded hover:bg-darkSlate cursor-default md:cursor-pointer text-white font-medium py-6 w-full mt-3"
          >
            Get ready
          </Button>
        )}
      </form>
      {/* </ModalBody> */}

      {/*</ModalContent>
      </Modal>*/}
    </>
  );
}
