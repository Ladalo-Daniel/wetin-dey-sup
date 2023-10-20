"use client"

//import { Chip } from '@nextui-org/react'
//import React from 'react'
// import EventItem from './EventItem'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { Card, Chip, Image, Link, User } from '@nextui-org/react'
import { BsCalendar2, BsClock } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'



export default function EventItemCard({timestamp, events, data}) {
    // const events = [
    //     {
    //         img: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    //         authorLogo: "https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    //         authorName: "Gaza",
    //         date: "Just now",
    //         link: "javascript:void(0)",
    //         eventDate: "Nov 3 2023",
    //         day: "Friday 4 - 6pm",
    //         location: "National Stadium Abuja",
    //         tag:"Football Match"
    //     },
    //     {
    //         img: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
    //         authorLogo: "https://img.freepik.com/free-photo/man-makes-winner-gesture_171337-17706.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    //         authorName: "Ladalo",
    //         date: "5hrs Ago",
    //         link: "javascript:void(0)",
    //         eventDate: "Oct 27 2023",
    //         day: "Sunday 5 - 9pm",
    //         location: "Chida Event Centre Jabi",
    //         tag:"Koinonia Service"
    //     },
    //     {
    //         img: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
    //         authorLogo: "https://img.freepik.com/free-photo/portrait-handsome-african-black-young-business-man-working-laptop-office-desk_231208-680.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    //         link: "javascript:void(0)",
    //         authorName: "Nehemiah",
    //         date: "Oct 13 2023",
    //         eventDate: "Oct 27 2023",
    //         day: "Sunday 5 - 9pm",
    //         location: "Ultimate Hotel Centre Garki",
    //         tag:"Pool Event"
    //     },
    //     {
    //         img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
    //         authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
    //         authorName: "Agape",
    //         date: "Oct 13 2023",
    //         link: "javascript:void(0)",
    //         eventDate: "Oct 27 2023",
    //         day: "Sunday 5 - 9pm",
    //         location: "Blablue Townhall Lagos",
    //         tag:"Music Concert"
    //     }
    // ]


 return (
    <div className=' font-poppinsf flex flex-col gap-5 relative items-start '>
      <div className="flex flex-col">
        <Chip className='bg-darkOrange rounded-md cursor-pointer'>{timestamp}</Chip>
      </div>
      <div className=" flex gap-4 flex-1 overflow-x-scroll">
        {
          events.map((event) => (
            <Card className="dark:bg-darkSlate pb-4 w-[300px] rounded-sm" key={event.authorName}>
                <Link href="#" className='flex flex-col gap-2 items-start text-inherit w-auto '>       
                <Image 
                    src={event?.img} 
                    alt={event?.title}  
                    style={{width: 300, height: 200, objectFit: "cover",}}
                    className="object-contain rounded-sm "
                    />
                    <div className="flex flex-col gap-2 event?-center mt-2 pt-3 ml-4 mr-2">
                        <User   
                            name={event?.authorName}
                            description={(
                                <Link href='#' size="sm" isExternal>
                                @{event?.authorName}
                                </Link>
                            )}
                            avatarProps={{
                                src: event?.authorLogo
                            }} />
                    </div>
                    <Chip className=' ml-4 mt-2 bg-darkOrange p-1 rounded-md font-poppins w-max text-inherit'>{event?.tag}</Chip>
                    <div className="pt-3 ml-4 mr-2 mb-3 flex flex-row gap-2 items-center justify-between">
                        <div className='flex items-center gap-2'>
                        <BsCalendar2 />
                        <span>{event?.eventDate}</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <BsClock />
                            <span>{event?.day}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 ml-4'>
                        <SlLocationPin />
                        <span>{event?.location}</span>
                    </div>
                </Link>
            </Card>
            // <SwiperSlide style={{width:300, maxWidth: 400}}>
                // <EventItem event={event} key={`${event?.authorName}-${Math.random()}`}/>
            // </SwiperSlide>
            ))
        }
       </div>
    </div>
  )
}


/* <Swiper
scrollbar={{
hide: true,
}}
modules={[Scrollbar]}
className="mySwiper"
> */
