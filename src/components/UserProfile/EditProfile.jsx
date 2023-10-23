"use client";
import { Button, Avatar, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdSave } from "react-icons/md";
import {ImFilePicture} from "react-icons/im"


export default function EditProfile() {
  const [username, setUsername] = useState("@Nehemiah");
  const [email, setEmail] = useState("codehubby@gmail.com");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleUploadButtonClick = () => {
    document.getElementById("file-input").click();
  };

  return (
    <section className=" w-full  min-h-screen py-5">
      <div className="flex flex-col  items-center  justify-center">
        <div className=" relative">
          <Avatar
            className=" rounded-full relative h-[140px] w-[140px]  object-cover ring-lightSlate ring-2"
            src={selectedImage}
            alt="profile picture"
            width={100}
            height={100}
          />
          <Tooltip
            className=" dark:bg-white dark:text-black  bg-slate rounded text-white "
            content="Upload a picture"
            placement="bottom"
            showArrow
          >
            <Button
              isIconOnly
              onClick={handleUploadButtonClick}
              size={"lg"}
              className=" top-0 absolute z-[99] right-[-0.5rem]  rounded-full text-xl bg-lightOrange text-white "
            >
              <ImFilePicture />
            </Button>
          </Tooltip>
          <input
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div>
          <p className=" font-semibold text-xl text-center pt-2">{username}</p>
          <p className=" text-sm">{email}</p>
        </div>

        <form className="  w-[100%] sm:w-[80%] lg:w-[7  0%]  bg-white shadow-xl rounded-md dark:bg-darkSlate py-10 px-2 gap-x-3 gap-y-3 my-4 items-center">
          <div className=" grid grid-cols-1 gap-2 gap-y-4 md:grid-cols-2">
            <span className=" relative">
              <input
                type="text"
                required
                maxLength={10}
                minLength={3}
                placeholder="username"
                className={`rounded pl-7 pr-2 w-[100%] py-2 text-black border-slate focus:ring-2 border dark:text-white   focus:ring-orange outline-none dark:bg-slate bg-white `}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className=" absolute top-3 left-1">
                <FaUserAlt />
              </span>
            </span>
            <span className="relative">
              <input
                type="email"
                required
                placeholder=" email"
                className={`rounded pl-7 pr-2 w-[100%] py-2 text-black border-slate focus:ring-2 border dark:text-white   focus:ring-orange outline-none dark:bg-slate bg-white `}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className=" absolute top-3 text-xl  left-1">
                <MdEmail />
              </span>
            </span>
          </div>
          <Button
            startContent={<MdSave />}
            size={"xl"}
            type="submit"
            className="bg-orange w-full rounded font-medium my-3 text-white  px-4 py-4"
          >
            Update profile
          </Button>
        </form>
      </div>
    </section>
  );
}
