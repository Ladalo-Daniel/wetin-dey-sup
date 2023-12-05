//Function to get all the users
export default async function getUsers(){
    try{
        const res = await fetch("/api/register/getuser", {
          cache : "no-store",
        });
        const users = res.json();
        return users
      } catch(err){
        console.log(err)
      }
}
