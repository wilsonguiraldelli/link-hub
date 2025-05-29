import { later } from "@/app/utils";

import type { TLoginCredentials, TLoginResponse } from "./types";

export class AuthRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login = async (_credentials: TLoginCredentials) => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL || ""}/login`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer login");
    }

    const data = await response.json();
    await later(); // force delay

    return data as TLoginResponse;
  };
}

export default new AuthRepository();
