import Edithuserprofile from "@/components/UserProfile/Dynamics";
import Mainlayout from "@/components/Mainlayout";

export default function UserProfilePage({ params }) {
  const { profile } = params;
  const user = Edithuserprofile(profile);
  return (
    <Mainlayout>
      <>
        {user.map((post) => (
          <section
            key={post.name}
            className=" w-[97%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] h-auto my-10 mx-auto"
          >
            {post.Element}
          </section>
        ))}
      </>
    </Mainlayout>
  );
}

export async function generateStaticParams() {
  const myprofile = Edithuserprofile();

  return myprofile.map(() => ({
    profile: myprofile.profile,
    fallback: false,
  }));
}
