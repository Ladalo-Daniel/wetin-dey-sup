"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";
import Image from "next/image";

export default function EditProfile() {
  const [username, setUsername] = useState("@Nehemiah");
  const [edit, setEdit] = useState(false);

  return (
    <section className="  min-h-screen py-5">
      <div className="flex flex-col  items-center  justify-center">
        <Image
          className=" rounded-full h-[100px] w-[100px] bg-white object-cover ring-lightSlate ring-2"
          src={''}
          alt="profile picture"
          width={100}
          height={100}
        />
        <div>
          <h1 className=" font-semibold text-xl text-center pt-2">
            {username}
          </h1>
        </div>

        <form className=" flex flex-col md:flex-row gap-x-3 gap-y-3 my-4 items-center">
          <input
            type="text"
            // required
            placeholder="New username"
            className={`rounded px-2 w-[100%] py-2 text-black bg-white ${
              !edit && " hidden"
            }`}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            startContent={`${edit ? <MdSave /> : <MdEdit />}`}
            onClick={() => setEdit(!edit)}
         
            // type="submit"
            className="bg-orange rounded font-medium text-white w-max px-3 py-4"
          >
            {edit ? " Update profile" : "Edit profile"}
          </Button>
        </form>
      </div>
    </section>
  );
}
