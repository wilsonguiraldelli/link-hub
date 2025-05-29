import { later } from "@/app/utils";
import { FetchHttpClient } from "@/services/http/fetchHttpClient";
import type { IHttpClient } from "@/services/http/types";

import type { TProfileResponse } from "../dashboard/types";

export class LandingRepository {
  private serverHttpClient: IHttpClient;

  constructor(serverHttpClient: IHttpClient = new FetchHttpClient()) {
    this.serverHttpClient = serverHttpClient;
  }

  getProfileByUsername = async (
    username: string,
  ): Promise<TProfileResponse | undefined> => {
    await later(); // force delay

    const url = `/profile?username=${username}`;
    const response = await this.serverHttpClient.get<TProfileResponse[]>(url);
    return response[0];
  };
}

export default new LandingRepository();
