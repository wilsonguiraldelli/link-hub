import { later } from "@/app/utils";
import { FetchHttpClient } from "@/services/http/fetchHttpClient";
import type { IHttpClient } from "@/services/http/types";

import type { TLoginCredentials, TLoginResponse } from "./types";

export class AuthRepository {
  private serverHttpClient: IHttpClient;

  constructor(serverHttpClient: IHttpClient = new FetchHttpClient()) {
    this.serverHttpClient = serverHttpClient;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login = async (_credentials: TLoginCredentials) => {
    // Force delay
    later(1000);

    const url = `/login`;
    const response = await this.serverHttpClient.get<TLoginResponse>(url);

    return response;
  };
}

export default new AuthRepository();
