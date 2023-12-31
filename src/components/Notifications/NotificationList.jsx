import NotificationItem from "./NotificationItem"

function NotificationList() {
    const events = [
        {
            img: "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorLogo: "https://img.freepik.com/free-photo/portrait-cool-man-with-sunglasses-dancing_23-2148851011.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: ["Gaza"],
            date: "Just now",
            link: "javascript:void(0)",
            eventDate: "Nov 3 2023",
            day: "Friday 4 - 6pm",
            location: "National Stadium Abuja",
            tag:["Football Match"]
        },
        {
            img: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/man-makes-winner-gesture_171337-17706.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName:[ "Ladalo"],
            date: "5hrs Ago",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Chida Event Centre Jabi",
            tag:["Koinonia Service"]
        },
        {
            img: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/portrait-handsome-african-black-young-business-man-working-laptop-office-desk_231208-680.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            link: "javascript:void(0)",
            authorName: ["Nehemiah"],
            date: "Oct 13 2023",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Ultimate Hotel Centre Garki",
            tag:["Pool Event"]
        },
        {
            img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: ["Agape"],
            date: "Oct 13 2023",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Blablue Townhall Lagos",
            tag:["Music Concert"]
        },
        {
            img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: ["Agape"],
            date: "Oct 13 2023",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Blablue Townhall Lagos",
            tag:["Music Concert"]
        },
        {
            img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: ["Agape"],
            date: "Oct 13 2023",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Blablue Townhall Lagos",
            tag:["Music Concert"]
        },
        {
            img: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            authorLogo: "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312703.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=ais",
            authorName: ["Agape"],
            date: "Oct 13 2023",
            link: "javascript:void(0)",
            eventDate: "Oct 27 2023",
            day: "Sunday 5 - 9pm",
            location: "Blablue Townhall Lagos",
            tag:["Music Concert"]
        }
    ]

  return (
    <div className=" overflow-y-scroll h-[500px] px-10">
        <div className="">
            <h2 className="text-lg font-bold text-orange">Notifications</h2>
        </div>
        <section className="flex flex-col gap-3">
            {
                events.map(event => <NotificationItem event={event} key={event.authorName} />)
            }
        </section>
    </div>
  )
}

export default NotificationList
