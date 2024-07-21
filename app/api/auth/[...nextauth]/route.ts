import prisma from "@/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        if(!credentials){
          return null
        }

        const { username , password } = credentials as {
          username : string,
          password : string
        }

        const user = await prisma.user.findUnique({
          where: { Email: username },
        });

        if (user) {
          
          const isValid = await bcrypt.compare(password, user.Password);

          if (isValid) {
            return {
              id: String(user.id), 
              name: user.Firstname,
              email: user.Email,
            };
          }
        }

        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
});

export { handler as GET, handler as POST };
