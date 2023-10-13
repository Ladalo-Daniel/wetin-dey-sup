//import Link from 'next/link'
import React from 'react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

export default function TodayEventCard() {
    const events = [
        {
            img: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorLogo: "https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: "Gaza",
            date: "Just now",
            link: "javascript:void(0)",
            eventDate: "Nov 3 2023",
            day: "Friday 4 - 6pm",
            location: "National Stadium Abuja",
            tag:"Football Match"
        },
        {
            img: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/man-makes-winner-gesture_171337-17706.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: "Ladalo",
            date: "5hrs Ago",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Chida Event Centre Jabi",
            tag:"Koinonia Service"
        },
        {
            img: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/portrait-handsome-african-black-young-business-man-working-laptop-office-desk_231208-680.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            link: "javascript:void(0)",
            authorName: "Nehemiah",
            date: "Oct 13 2023",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Ultimate Hotel Centre Garki",
            tag:"Pool Event"
        },
        {
            img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: "Agape",
            date: "Oct 13 2023",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Blablue Townhall Lagos",
            tag:"Music Concert"
        }
    ]


 return (
    <div className=' w-screen overflow-x-scroll scrollbar-hide font-poppins '>
      <div className=" flex w-max gap-4">
        {
          events.map((items, key) => (
            <article className=" w-[90vw] h-[60vh]  md:w-[40vw] xl:w-[33vw] lg:h-[75vh] mx-auto mt-4 mb-4 shadow-2xl border-lightSlate border rounded-md duration-300 hover:shadow-sm text-darkSlate dark:text-white" key={key}>
                <a to={items.link}>
                    <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-[35vh] lg:h-[45vh] rounded-t-md object-cover" />
                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                        <div className="flex-none w-10 h-10 rounded-full">
                            <img src={items.authorLogo} className="w-full h-full rounded-full object-cover" alt={items.authorName} />
                        </div>
                        <div className="ml-3">
                            <span className="block text-gray-900">{items.authorName}</span>
                            <span className="block text-gray-400 text-sm">{items.date}</span>
                        </div>
                    </div>
                    <h1 className=' ml-4 mt-2 bg-darkOrange rounded-md font-poppins px-2 w-max text-white'>{items.tag}</h1>
                    <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row items-center justify-between">
                        <div className='flex items-center gap-x-1'>
                        <BsCalendar2 />
                        <span>{items.eventDate}</span>
                        </div>
                        <div className='flex items-center gap-x-1 '>
                            <BsClock />
                            <span>{items.day}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-1 ml-4'>
                        <SlLocationPin />
                        <span>{items.location}</span>
                    </div>
                </a>
            </article>
            ))
        }
       </div>
    </div>
  )
}
