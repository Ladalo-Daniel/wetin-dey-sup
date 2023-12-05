import BottomNavbar from "./BottomNavbar";
import EventButton from "./Events/EventButton";
import TopNavbar from "./TopNavbar";

export default function Mainlayout({ children }) {
  return (
    <>
      <TopNavbar />
      <EventButton />
      {children}
      <BottomNavbar />
    </>
  );
}
