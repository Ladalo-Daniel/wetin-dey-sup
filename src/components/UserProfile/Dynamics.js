import EditProfile from "./EditProfile";

export default function Edithuserprofile( profile ) {
  const NavigateTo = [
    {
      name: "edit-user",
      Element: <EditProfile />,
    },
  ];
  if (profile) {
    return NavigateTo.filter((post) => post.profile == profile);
  }
  return NavigateTo;
}
