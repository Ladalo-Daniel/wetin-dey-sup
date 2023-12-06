"use client";
import { Avatar, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsSendCheck } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
//import States from "./States";
import Months from "./Months";
import Days from "./Days";
import Tags from "./Tags";
import { useFormik } from "formik";
import { eventsValidation } from "@/lib/validation";
import { useSession } from "next-auth/react";
import { UploadButton } from "@uploadthing/react";
import { useRouter } from "next/navigation";
import { useGetUsers } from "@/lib/react-query/queriesMutations";

export default function CreateEvent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [disable, setDisable] = useState(false);

  const { data } = useSession();
  //  console.log(data)
  const router = useRouter();

  const { data: usersData, isLoading, error } = useGetUsers();
  // console.log(usersData);

  // Filter user details based on the given name and email
  const [creatorData] = usersData?.data?.filter(
    (user) =>
      user?.name === data?.user?.name && user?.email === data?.user?.email
  ) || [{}];
  // const {_id, name, email, profilePicture } = creatorData;
  console.log(creatorData);

  const formik = useFormik({
    initialValues: {
      creator: {
        _id: creatorData?._id,
        name: creatorData?.name,
        email: creatorData?.email,
        profilePicture: creatorData?.profilePicture,
      },
      eventTitle: "",
      eventLocation: "",
      eventMonth: "",
      eventDay: "",
      eventDate: "",
      eventTime: "",
      eventTag: "",
      eventImage: "",
    },
    validate: eventsValidation,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
    try {
      const res = await fetch("/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res) {
        toast.success("Event has been created successfully");
        setDisable(true);
        setTimeout(() => {
          router.push("/timeline");
        }, 2000);
      } else {
        toast.error("Event creation Failed!");
      }
      console.log(res);
    } catch (error) {
      // alert(error)
      toast.error("Failed to create event, Try again!");
      console.log("Error creating event:", error);
    }
  }

  // const Data = States;
  const MonthsData = Months;
  const DaysData = Days;
  const TagsData = Tags;

  return (
    <section className="font-poppins mt-4  pb-28 flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="  w-[95%] bg-white  dark:bg-darkSlate  py-5 rounded-md  px-1 sm:max-w-lg md:max-w-xl "
      >
        <span className=" text-3xl flex mx-auto  justify-center text-orange border-orange border-2 rounded-full h-[50px] w-[50px] items-center">
          <BsSendCheck />
        </span>
        <h1 className=" text-center font-semibold text-lg py-3">
          Create your events and share with others
        </h1>

        <div className=" grid grid-cols-1 gap-2 md:grid-cols-2">
          <span className=" flex flex-col">
            <label className=" text-sm font-medium" htmlFor="Title">
              Event title
            </label>
            <input
              type="text"
              {...formik.getFieldProps("eventTitle")}
              placeholder="Enter event title"
              className="w-full mt-2 px-3 py-2 placeholder:text-sm dark:placeholder:text-white placeholder:text-gray dark:text-white  text-gray bg-transparent outline-none border-[0.12rem] border-orange  shadow-sm rounded-sm"
            />
            {formik.errors.eventTitle && formik.touched.eventTitle ? (
              <span className="text-red text-sm">
                {formik.errors.eventTitle}
              </span>
            ) : (
              ""
            )}
          </span>

          <span className=" flex flex-col">
            <label className=" text-sm font-medium" htmlFor="Location">
              Location
            </label>
            <input
              type="text"
              {...formik.getFieldProps("eventLocation")}
              placeholder="Enter event Location"
              className="w-full mt-2 px-3 py-2 placeholder:text-sm dark:placeholder:text-white placeholder:text-gray dark:text-white  text-gray bg-transparent outline-none border-[0.12rem] border-orange  shadow-sm rounded-sm"
            />
            {formik.errors.eventLocation && formik.touched.eventLocation ? (
              <span className="text-red text-sm">
                {formik.errors.eventLocation}
              </span>
            ) : (
              ""
            )}
          </span>
        </div>

        <div className=" flex flex-col">
          <label className=" text-sm font-medium">Month/Date</label>
          <div className=" grid grid-cols-2 w-full gap-2 my-2">
            <div className=" flex flex-col w-full">
              <select
                name="months"
                {...formik.getFieldProps("eventMonth")}
                className=" py-2 px-3 border w-full text-sm outline-none rounded  bg-transparent  text-gray dark:text-white border-orange    "
              >
                {MonthsData.map((month, index) => (
                  <option
                    className=" text-gray"
                    key={index}
                    value={month.months}
                  >
                    {month.months}
                  </option>
                ))}
              </select>
              {formik.errors.eventMonth && formik.touched.eventMonth ? (
                <span className=" text-red text-sm">
                  {formik.errors.eventMonth}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className=" flex flex-col w-full">
              <input
                type="date"
                {...formik.getFieldProps("eventDate")}
                className=" py-2 px-3 text-sm w-full outline-none border rounded  bg-transparent text-gray dark:text-white border-orange   "
              />
              {formik.errors.eventDate && formik.touched.eventDate ? (
                <span className=" text-red text-sm">
                  {formik.errors.eventDate}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <p className=" text-sm font-medium">Day/Time</p>
          <div className=" grid grid-cols-2 w-full gap-2 my-2">
            <div className=" flex flex-col w-full">
              <select
                name="days"
                {...formik.getFieldProps("eventDay")}
                className=" py-2 px-3 border text-sm w-full outline-none rounded  bg-transparent  text-gray dark:text-white border-orange    "
              >
                {DaysData.map((day, index) => (
                  <option className=" text-gray" key={index} value={day.days}>
                    {day.days}
                  </option>
                ))}
              </select>
              {formik.errors.eventDay && formik.touched.eventDay ? (
                <span className=" text-red text-sm">
                  {formik.errors.eventDay}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className=" flex flex-col w-full">
              <input
                {...formik.getFieldProps("eventTime")}
                type="time"
                className=" py-2 px-3 outline-non w-full text-sm rounded border  bg-transparent  text-gray dark:text-white border-orange   "
              />
              {formik.errors.eventTime && formik.touched.eventTime ? (
                <span className=" text-red text-sm">
                  {formik.errors.eventTime}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className=" flex flex-col my-2">
          <p className="text-sm pb-[0.1rem]">Tags</p>
          <select
            name="groups"
            {...formik.getFieldProps("eventTag")}
            className=" w-full rounded outline-none text-sm border border-orange bg-transparent  text-gray dark:text-white  py-2 px-2"
          >
            {TagsData.map((tag, index) => (
              <option className=" text-gray" key={index} value={tag.tags}>
                {tag.tags}
              </option>
            ))}
          </select>
          {formik.errors.eventTag && formik.touched.eventTag ? (
            <span className="text-red text-sm">{formik.errors.eventTag}</span>
          ) : (
            ""
          )}
        </div>

        <div className=" flex items-center my-3 gap-x-3 ">
          <UploadButton
            endpoint="eventImage"
            appearance={{
              button: {
                background: "#e5660b",
                color: "white",
                padding: "4px",
              },
              allowedContent: "Add a display image",
            }}
            onClientUploadComplete={(res) => {
              

                formik.setFieldValue("eventImage", res.url);
                formik.getFieldProps("eventImage");
              
              // Do something with the response
              console.log("Files:", res);
              // toast.success("Uploaded");
            }}
            onUploadError={(error) => {
              // Do something with the error.
              // alert(`ERROR! ${error.message}`);
              toast.error("something went wrong!");
            }}
          />
          <div className=" flex items-center gap-x-2">
            <Avatar size="lg" src={formik.values.eventImage} />
            {formik.errors.eventImage && formik.touched.eventImage ? (
              <span className="text-red text-sm">
                {formik.errors.eventImage}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <Toaster
          toastOptions={{
            className: " text-sm",
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

        <Button
          isLoading={disable}
          type="submit"
          className={` my-3 w-full py-3 ${
            disable ? "bg-slate" : "bg-darkOrange hover:bg-orange"
          }     text-white rounded`}
        >
          {disable ? "please wait..." : " Create your event"}
        </Button>
      </form>
    </section>
  );
}
