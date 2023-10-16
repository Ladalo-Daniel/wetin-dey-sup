import Mainlayout from "@/components/Mainlayout";
import SearchEvents from "@/components/TimelineUI/SearchEvents";
import TagsButton from "@/components/TimelineUI/TagsButton";
import TodayWrapper from "@/components/TimelineUI/TodayWrapper";

export default function TimelinePage() {
  return (
    <Mainlayout>
      <section className=" min-h-screen">
        <SearchEvents />
        <TagsButton />
        <TodayWrapper />
      </section>
    </Mainlayout>
  );
}
