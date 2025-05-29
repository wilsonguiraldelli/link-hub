/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

import type { TAuthTokens, TUser } from "@repository/auth/types";

declare module "next-auth" {
  interface Session {
    user: TUser;
    authTokens: TAuthTokens;
    error?: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    authTokens: TAuthTokens;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: TUser;
    authTokens: TAuthTokens;
    error?: string;
  }
}
