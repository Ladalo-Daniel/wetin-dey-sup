//Function to get all the events
export default async function getEvents(){
    try{
        const res = await fetch("http://localhost:3000/api/events/all", {
          cache : "no-store",
        });
        const events = res.json();
        return events
      } catch(err){
        console.log(err)
      }
}


//Function to get a single Event
export async function getSingleEvent(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/events/${id}`, {
        cache: "no-store",
      });
      const event = await res.json();
      return event;
    } catch (err) {
      console.log(err);
    }
  }
  