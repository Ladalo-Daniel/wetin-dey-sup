import { AuthenticationLogin } from "@/components/Authentications/Authentication";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Options } from "../api/auth/[...nextauth]/route";

export default async function LoginPage() {
  const session  = await  getServerSession(Options);
  if (session) {
    redirect("/timeline");
  }
  return <AuthenticationLogin/>;
}
