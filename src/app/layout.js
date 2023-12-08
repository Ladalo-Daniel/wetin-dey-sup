
import Themeprovider from "@/components/Themeprovider";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
// import { getServerSession } from "next-auth"
import ReactQuery from "./ReacrQuery";
import { ContextProvider } from "@/context/Context";

export const metadata = {
  title: "Wetin-dey-sup",
  description: "Welcome to WDS...",
};

export default  function RootLayout({ children }) {
  // const session = await getServerSession()
  return (
    <html lang="en">
      <body>
        <Themeprovider>
            <AuthProvider>
                <ReactQuery>
                 <ContextProvider>
                  {children}
                 </ContextProvider>
                </ReactQuery>
            </AuthProvider>
        </Themeprovider>
      </body>
    </html>
  );
}
