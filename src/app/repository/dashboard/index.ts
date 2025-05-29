import { later } from "@/app/utils";
import { AxiosHttpClient } from "@/services/http/axiosHttpClient";
import { FetchHttpClient } from "@/services/http/fetchHttpClient";
import type { IHttpClient } from "@/services/http/types";

import type { TProfile, TProfileResponse } from "./types";

export class DashboardRepository {
  private serverHttpClient: IHttpClient;
  private clientHttpClient: IHttpClient;

  constructor(
    serverHttpClient: IHttpClient = new FetchHttpClient(),
    clientHttpClient: IHttpClient = new AxiosHttpClient(),
  ) {
    this.serverHttpClient = serverHttpClient;
    this.clientHttpClient = clientHttpClient;
  }

  getProfile = async (userId?: string) => {
    await later(); // force delay

    const url = `/profile/${userId}`;
    const response = await this.serverHttpClient.get<TProfileResponse>(url);
    return response;
  };

  putProfile = async (profile: TProfile) => {
    await later(); // force delay

    const url = `/profile/${profile.id}`;
    await this.clientHttpClient.put(url, profile);
  };
}

export default new DashboardRepository();
