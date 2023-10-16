import formatTimeToAMPM from "@/utils/formatTimeToAMPM"

export default function useAuthUser() {
    
    const user = {
        id: 1,
        username: "John Lada",
        authenticated: "true",
        profile: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?size=626&ext=jpg&ga=GA1.1.1035386768.1682762339&semt=sph",
        images: [],
        image: '',
        date: formatTimeToAMPM(new Date()),
        bio: ''
    }

    
    const isAuthenticated = user?.authenticated === 'true' ? true : false

    return {isAuthenticated, user}
}