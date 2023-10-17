'use client'

import { useState, useRef } from "react";
// import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
// import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import CalenderEventsAccordion from "./CalenderEventAccordion";
import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "./CalenderModal";
import NoEvent from "./NoEventModal";


function CalenderComp() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { onOpen } = useDisclosure();

    const handleDateClick = (date) => {
      setSelectedDate(date);
      const event = events.find((event) => {
        const dates = date.toDateString();
        const eventDate = event.start.toDateString()

        if (dates === eventDate) {
          console.log("Successful");
          console.log(`${eventDate} matches ${dates}`);
          return true;
        } else{
          return false;
        }

    });

      if (event) {
        setSelectedEvent(event);
        setIsModalOpen(true);
        // onOpen();
      } else {
        setIsModalOpen(true);
        console.log("Event not found");
      }
    };
    const closeModal = () => {
      console.log("Closing Modal")
      setSelectedEvent(null);
      setIsModalOpen(false);
      
    };

    const events = [
      {
        id: "1",
        title: "Road Trip",
        start: new Date(2023, 9, 16, 0, 0, 0),
        end: new Date(2023, 9, 17),
        location: "Ireland Greenway, Ireland.",
        description: "Gooding to be a nice trip",
        image: '/images/stefan-unsplash.jpg',
      },
      {
        id: "2",
        title: "Hiking",
        start: new Date(2023, 9, 19),
        end: new Date(2023, 9, 21),
        location: "Mount Everest, Nepal.",
        description: "Looking forward to a nice hiking trip",
        image: '/images/team1.jpg'
      },
      {
        id: "3",
        title: "Meeting",
        start: new Date(2023, 9, 18),
        end: new Date(2023, 9, 18),
        location: "Conference Room, Abu Dhabi.",
        description: "My First Business Meeting",
        image: '/images/techie.jpg',
      },
    ];
    

  return (
    <div className='bg-gray-100 dark:bg-slate mt-5 h-full'>
      <div className="flex content-center w-full py-3">
        <Calendar 
          value={selectedDate}
          className="dark:bg-slate w-full dark:hover:text-lightSlate dark:shadow-lightSlate"
          onClickDay={handleDateClick}
          goToRangeStartOnSelect={false}
          // selectRange
        />

        {/* <ModalComponent
          isOpen={selectedEvent !== null}
          event={selectedEvent || { title: "No Event" }}
          onClose={closeModal}
        /> */}

        {selectedEvent ? (
          <ModalComponent
          isOpen={selectedEvent !== null}
          event={selectedEvent || { title: "No Event" }}
          onClose={closeModal}
        />
        ): (
          <NoEvent
            isOpen={isModalOpen}
            event={{ title: "No Event" }}
            onClose={closeModal}
          />
        )}
        

      </div>
      <div>
        <div className="py-4 font-bold">
          <h1>Events</h1>
        </div>
        
        <CalenderEventsAccordion events={events} />
        
      </div>
    </div>
  )
}

export default CalenderComp