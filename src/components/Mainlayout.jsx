import { Toaster } from "react-hot-toast";
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
    </>
  );
}
