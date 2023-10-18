import { useState } from "react"
import formatTimeToAMPM from "@/utils/formatTimeToAMPM"



function useComments() {
    const _comments = [
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 5,
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Gaza Nehemiah',
            profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 2,
            images: [
                "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Chinaza Daniel',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 235,
            images: [
                "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 5,
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Gaza Nehemiah',
            profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 2,
            images: [
                "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Chinaza Daniel',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 235,
            images: [
                "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'John Lada',
            profile: "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you. Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 5,
            images: [
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
                "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Gaza Nehemiah',
            profile: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 2,
            images: [
                "https://img.freepik.com/free-photo/view-pool-hotel-ocean-water_1203-4730.jpg?size=626&ext=jpg&ga=GA1.2.1035386768.1682762339&semt=sph",
            ]
        },
        {
            name: 'Chinaza Daniel',
            profile: "https://img.freepik.com/premium-psd/church-praise-worship-flyer-instagram-social-media-post-template_533308-134.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            comment: 'Hello, I don\'t want to miss that... Catch up with you.',
            timestamp: formatTimeToAMPM(new Date()),
            likes: 235,
            images: [
                "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
            ]
        },
    ]
    
  const [comments, setComments] = useState(_comments);

  const appendComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
    console.log(comments)
  };

  return { comments, appendComment };
}

export default useComments;

