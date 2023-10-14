import Themeprovider from "@/components/Themeprovider";
import "./globals.css";

export const metadata = {
  title: "Wetin-dey-sup",
  description: "Welcome to WDS...",
};

export default function RootLayout33({ children }) {
  return (
    <html lang="en">
      <body>
        <Themeprovider>{children}</Themeprovider>
      </body>
    </html>
  );
}
