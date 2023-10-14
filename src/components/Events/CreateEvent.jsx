"use client";
import { Avatar, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsSendCheck } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import States from "./States";

export default function CreateEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [states, setStates] = useState([]);

  async function handleSubmit(data) {
    try {
    } catch (error) {}
  }

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
  const notify = () => toast.error("Upload an image pls");

  const Data = States;
  return (
    <section className="  font-poppins mt-4  pb-28 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="  w-[95%] bg-white  dark:bg-darkSlate  py-5 rounded-md  px-5 sm:max-w-lg md:max-w-xl "
      >
        <span className=" text-3xl flex mx-auto  justify-center text-orange border-orange border-2 rounded-full h-[50px] w-[50px] items-center">
          <BsSendCheck />
        </span>
        <h1 className=" text-center font-semibold text-lg py-3">
          Create your events and share with others
        </h1>

        <div className=" grid grid-cols-1 gap-2 md:grid-cols-2">
          <span className=" flex flex-col">
            <label className=" text-sm font-medium" htmlFor="Location">
              Event title
            </label>
            <input
              type="text"
              required
              placeholder="Enter event title"
              className="w-full mt-2 px-3 py-2 placeholder:text-sm dark:placeholder:text-white placeholder:text-gray dark:text-white  text-gray bg-transparent outline-none border-[0.12rem] border-orange  shadow-sm rounded-sm"
            />
          </span>

          <div className="flex flex-col">
            <label className="text-sm font-medium" htmlFor="Location">
              Location
            </label>
            <select
              required
              name="State"
              onChange={(event) => setStates(event.target.value)}
              className="w-full mt-2  px-3 text-sm placeholder:text-sm  border-orange py-[0.6rem] text-gray dark:text-white bg-transparent outline-none border-[0.12rem]  shadow-sm rounded-sm"
            >
              {Data.map((state) => (
                <>
                  <option
                    className=" text-gray"
                    key={state.id}
                    value={state.states}
                  >
                    {state.states}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>

        <div className=" flex flex-col">
          <p className=" text-sm font-medium">Start</p>
          <div className=" grid grid-cols-2 w-full gap-2 my-2">
            <input
              type="time"
              required
              className=" py-2 px-3 border text-sm outline-none rounded  bg-transparent  text-gray dark:text-white border-orange   "
            />
            <input
              type="date"
              className=" py-2 px-3 text-sm outline-none border rounded  bg-transparent text-gray dark:text-white border-orange   "
            />
          </div>
        </div>
        <div className=" flex flex-col">
          <p className=" text-sm font-medium">End</p>
          <div className=" grid grid-cols-2 w-full gap-2 my-2">
            <input
              type="time"
              placeholder="date"
              required
              className=" py-2 px-3 border text-sm outline-none rounded  bg-transparent text-gray dark:text-white  border-orange  "
            />
            <input
              type="date"
              className=" py-2 px-3 outline-none text-sm rounded border  bg-transparent  text-gray dark:text-white border-orange   "
            />
          </div>
        </div>

        <div className=" flex flex-col my-2">
          <p className="text-sm pb-[0.1rem]">Groups</p>
          <select
            required
            name="groups"
            className=" w-full rounded outline-none text-sm border border-orange bg-transparent  text-gray dark:text-white  py-2 px-2"
          >
            <option className=" text-gray" value="gruop1">
              Group1
            </option>
            <option className=" text-gray" value="gruop2">
              Group2
            </option>
            <option className=" text-gray" value="gruop3">
              Group3
            </option>
            <option className=" text-gray" value="gruop4">
              Group4
            </option>
            <option className=" text-gray" value="gruop5">
              Group5
            </option>
          </select>
        </div>

        <div className=" flex items-center my-3 gap-x-3 ">
          <input
            type="file"
            accept="image/*"
            id="file-input"
            onChange={handleImageChange}
            className="hidden"
            required
          />

          <Button
            startContent={<FiUploadCloud />}
            className=" rounded text-white text-xl bg-darkOrange   hover:bg-orange "
            onClick={handleUploadButtonClick}
          >
            <p className=" text-sm font-medium">Add a display photo</p>
          </Button>
          <Avatar size="md" src={selectedImage} />
        </div>
        <Toaster
          toastOptions={{
            className: " text-sm",
          }}
        />

        <Button
          onClick={notify}
          type="submit"
          className=" my-3 w-full py-3  bg-darkOrange  hover:bg-orange  text-white rounded"
        >
          Create your event
        </Button>
      </form>
    </section>
  );
}
