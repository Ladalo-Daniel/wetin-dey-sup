import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/user";
import { connectMongoDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const Options = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_CLIENT,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDb();
          const users = await Users.findOne({ email });
          if (!users) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, users.password);
          if (!passwordsMatch) {
            return null;
          }
          return users;
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],

  // callbacks: {
  //   async session({ session }) {
  //     const sessionUser = await User.findOne({
  //       email: session.user.email,
  //     });
  //     session.user.id = sessionUser._id;
  //     return session;
  //   },

  //   async signIn({ profile, provider }) {
  //     console.log(profile);
  //     try {
  //       if (profile && profile.email) {
  //         await connectMongoDb();

  //         const userExist = await Users.findOne({
  //           email: profile.email,
  //         });

  //         if (!userExist) {
  //           await Users.create({
  //             name: profile.name,
  //             email: profile.email,
  //             profilePicture: profile.picture,
  //             authProvider: provider, // 'google' or 'github' based on the provider
  //           });
  //         }
  //         return true;
  //       } else {
  //         console.error("Profile or email not available in signIn callback");
  //         return false;
  //       }
  //     } catch (error) {
  //       console.error("Error is : ", error);
  //       return false;
  //     }
  //   },
  // },
  secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(Options);
export { handler as GET, handler as POST };
