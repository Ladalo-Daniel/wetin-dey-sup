import CommentSection from "@/components/CommentsUI/CommentSection";
import EventCard from "@/components/CommentsUI/EventCard";
import Mainlayout from "@/components/Mainlayout";

export default function TimelinePage() {
  return (
     <Mainlayout>
        <section className="">
            <div className="mx-auto p-4 flex  gap-4 flex-1 overflow-hidden flex-col justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row" >
            <div className="flex items-center flex-col relative overflow-auto ">
                <div className="p-4">
                    <h3 className="leading-4 text-orange font-semibold">Today</h3>
                </div>
                <EventCard />
            </div>
            <div className="flex justify-center h-full overflow-y-auto flex-1 overflow-auto flex-col0">
                <CommentSection />
            </div>
        </div>
        </section>
     </Mainlayout>
  )
}