import CreateEvent from "@/components/Events/CreateEvent";
import Mainlayout from "@/components/Mainlayout";
import { Options } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function EventPage() {
  // const  session  = await getServerSession(Options);
  // if (!session) {
  //   redirect("/timeline");
  // }
  return (
    <Mainlayout>
      <CreateEvent />
    </Mainlayout>
  );
}
