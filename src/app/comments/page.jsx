import CommentSection from "@/components/CommentsUI/CommentSection";
import EventCard from "@/components/CommentsUI/EventCard";
import Mainlayout from "@/components/Mainlayout";

export default function TimelinePage() {
  return (
     <Mainlayout>
        <section className="relative">
        <div className="mx-auto p-4 flex gap-4 flex-1 overflow-hidden flex-col justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row">
            <div className="sticky flex items-center flex-col overflow-auto">
            <div className="p-4">
                <h3 className="leading-4 text-orange font-semibold">Today</h3>
            </div>
            <EventCard />
            </div>
            <div className="flex justify-center overflow-y-auto flex-1 max-h-[700px] scrollbar-hide">
            <CommentSection />
            </div>
        </div>
        </section>

     </Mainlayout>
  )
}
