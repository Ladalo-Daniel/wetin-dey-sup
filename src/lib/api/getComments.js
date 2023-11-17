export async function getComments(eventId) {
    try {
        const req = await fetch(`/api/events/${eventId}/comments`, )

        const data = await req.json()

        return data
    } catch (error) {
       console.log(error)
       return error 
    }
}