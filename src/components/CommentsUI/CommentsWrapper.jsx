"use client"
"use strict"

import CommentSection from "@/components/CommentsUI/CommentSection";
import EventCard from "@/components/CommentsUI/EventCard";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import useComments from "./useComments";


export const CommentContext = createContext()

function CommentsWrapper() {
  
  const [comment, setComment] = useState({})
  const {comments, appendComment} = useComments()

  return (
    <CommentContext.Provider value={{comment, setComment, comments, appendComment }}>
      <section className="relative min-h-screen">
        <div className="mx-auto p-4 flex gap-4 flex-1 overflow-hidden flex-col justify-center lg:flex-row xl:flex-row">
            <div className="sticky flex items-center flex-col overflow-auto md:items-start md:justify-start">
              <div className="p-4">
                  <h3 className="leading-4 text-orange font-semibold">Today</h3>
              </div>
              <EventCard />
            </div>
            <div className="flex justify-center overflow-y-auto flex-1 max-h-[100vh] scrollbar-hide">
            <CommentSection />
            </div>
        </div>
        </section>
        <Toaster
          position='top-right'
          gutter={12}
          containerStyle={{margin: '12px'}}

          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
              padding: '11px 20px',
              fontSize: '14px',
              maxWidth: '500px',
            }
          }}
      />
    </CommentContext.Provider>
  )
}

export default CommentsWrapper
