"use client"

import Mainlayout from "@/components/Mainlayout";
import TagsComp from "@/components/Tags/Tags"
import TagsIcon from "@/components/Tags/TagsIcon"
import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"

export default function TagsPage() {

    const [showContext, setShowContext] = useState(false)

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function handlePlusIcon() {
        setShowContext(!showContext);
    }

    const tagsEvent = [
        {
            id: "1",
            tagName: "Techies",
            events: "2",
            imageName: "/images/team-spirit.jpg"
        },
        {
            id: "2",
            tagName: "Fashion",
            events: "3",
            imageName: "/images/stefan-unsplash.jpg"
        },
        {
            id: "3",
            tagName: "Conference",
            events: "1",
            imageName: "/images/conference.jpg"
        },
    ];


  return (
    <Mainlayout id={tagsEvent.id} image={tagsEvent.imageName}>
        <div className="dark:bg-slate bg-gray-100  pb-4 h-full relative md:h-screen w-[90%] md:w-[90%] mx-auto mb-7 md:mb-0 xl:h-[95vh]">

            <div className="flex justify-between pb-3">
                <h1 className="font-bold">Tags</h1>
                <AiOutlinePlus onClick={handlePlusIcon} className="h-5 w-5"/>
                {showContext && <TagsIcon />}
            </div>
            <TagsComp tags={tagsEvent} />
        </div>
    </Mainlayout>
  );
}
