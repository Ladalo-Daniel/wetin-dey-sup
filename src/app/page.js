import AuthenticationSignin from "@/components/Authentications/Authentication";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session  = await  getServerSession(Options);
  if (session) {
    redirect("/timeline");
  }
  return (
    <>
      <AuthenticationSignin />
    </>
  );
}
