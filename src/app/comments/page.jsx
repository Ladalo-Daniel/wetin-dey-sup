import CommentSection from "@/components/CommentsUI/CommentSection";
import EventCard from "@/components/CommentsUI/EventCard";
import Mainlayout from "@/components/Mainlayout";

export default function TimelinePage() {
  return (
     <Mainlayout>
        <div className=" min-h-screen mx-auto p-4 flex  gap-4 flex-col justify-center sm:flex-row md:flex-row lg:flex-row sticky xl:flex-row" >
            <div className="flex items-center flex-col relative">
                <div className="p-4">
                    <h3 className="leading-4 text-orange fontsemibold">Today</h3>
                </div>
                <EventCard />
            </div>
            <div className="flex justify-center overflow-y-auto">
                <CommentSection />
            </div>
        </div>
     </Mainlayout>
  )
}