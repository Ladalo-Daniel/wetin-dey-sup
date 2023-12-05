import Mainlayout from "@/components/Mainlayout";
import SettingsComp from "@/components/Settings/settings";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await getServerSession(Options);
  if (!session) {
    redirect("/timeline");
  }
  const userProfile = [
    {
      userName: session.user?.name,
      userEmail: session.user?.email,
      profileImage: session.user?.image,
    },
  ];

  return (
    <Mainlayout>
      <div className="p-4 bg-gray-100 h-full  dark:bg-slate">
        <SettingsComp userDetail={userProfile} />
      </div>
    </Mainlayout>
  );
}
