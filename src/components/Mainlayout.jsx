import BottomNavbar from "./BottomNavbar";

export default function Mainlayout({ children }) {
  return (
    <>
      {children}
      <BottomNavbar />
    </>
  );
}
