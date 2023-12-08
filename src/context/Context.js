"use client"
import { useGetUsers } from "@/lib/react-query/queriesMutations"
import { useSession } from "next-auth/react"
import { createContext, useEffect } from "react"

export const UserContext = createContext()

export function ContextProvider({ children }) {

   const { data } = useSession()


    const {data:usersData, isLoading, error} = useGetUsers()
  
    //Filter user details based on the given name and email
     const creatorData = usersData?.data?.filter(user => user?.name === data?.user?.name && user?.email === data?.user?.email ) || [{}];

     // Filter out sensitive information (e.g., password) before storing in localStorage
     const sanitizedCreatorData = creatorData.map(({ password, ...rest }) => rest);

   // useEffect to store usersData in localStorage when it changes
   useEffect(() => {
    // Check if localStorage is available to avoid runtime error
    if (typeof localStorage !== 'undefined' && sanitizedCreatorData) {
      // Convert usersData to a JSON string
      const creatorDataJSON = JSON.stringify(sanitizedCreatorData);

      // Store usersData in localStorage under the key 'usersData'
      localStorage.setItem('creatorData', creatorDataJSON);
    }
  }, [sanitizedCreatorData]);

    // Retrieve storedCreatorDataJSON from localStorage using the key 'creatorData'
    const storedCreatorDataJSON = localStorage.getItem('creatorData');

    // Parse the JSON string back to an object
    const storedCreatorData = JSON.parse(storedCreatorDataJSON);


  return (
    <UserContext.Provider value={{storedCreatorData, isLoading, error}}>
      {children}
    </UserContext.Provider>
  )
}
