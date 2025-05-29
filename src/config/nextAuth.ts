import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import authRepository from "@/app/repository/auth";

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "E-mail", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await authRepository.login({
            email: credentials?.email || "",
            password: credentials?.password || "",
          });

          if (response?.user) {
            return {
              ...response.user,
              authTokens: response.authTokens,
            };
          }
          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          user: {
            id: user.id,
            name: user.name ?? "",
            email: user.email ?? "",
          },
          authTokens: user.authTokens,
          iat: token.iat,
          exp: token.exp,
          jti: token.jti,
        };
      }
      return token;
    },
    session({ session, token }) {
      session.user = {
        id: token.user.id,
        name: token.user.name,
        email: token.user.email,
      };

      session.authTokens = token.authTokens;

      if (token.error) {
        session.error = token.error;
      }

      return session;
    },
  },

  pages: {
    signIn: "/",
  },
  debug: false,
};

export default nextAuthOptions;
