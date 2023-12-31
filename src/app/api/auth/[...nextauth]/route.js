import prisma from "@/utils/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
    // ...add more providers here
  ],
}

export const getAuthSession = ()=> getServerSession(authOptions)

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};