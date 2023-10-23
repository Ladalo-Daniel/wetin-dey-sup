import Mainlayout from "@/components/Mainlayout";
import SettingsComp from "@/components/Settings/settings";

export default function Settings() {
  const userProfile = [
    {
      userName: "Salome Adams",
      userEmail: "salome357@gmail.com",
      profileImage: "images/stefan-unsplash.jpg",
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
