import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "@/models/user";
import { connectMongoDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import ProviderUser from "@/models/ProviderUsers";

export const Options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT,
    }),
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

  callbacks: {
    async session({ session }) {
      const sessionUser = await Users.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id;
      return session;
    },

    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectMongoDb();
        
        const userExist = await ProviderUser.findOne({
          email: profile.email,
        });
        if (!userExist) {
        await ProviderUser.create({
          email: profile.email,
          name: profile.name,
          image: profile.picture,
        });
        }
        return true;
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
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
