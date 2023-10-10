import Themeprovider from "@/components/Themeprovider";
import "../globals.css";

export const metadata = {
  title: "create-an-event || WDS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Themeprovider>{children}</Themeprovider>
      </body>
    </html>
  );
}