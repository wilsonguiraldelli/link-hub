import { later } from "@/app/utils";
import { AxiosHttpClient } from "@/services/http/axiosHttpClient";
import { FetchHttpClient } from "@/services/http/fetchHttpClient";
import type { IHttpClient } from "@/services/http/types";

import type { TLink, TLinksResponse } from "./types";

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

  getLinks = async (userId?: string) => {
    later(1000); // force delay

    const url = `/links/${userId}`;
    const response = await this.serverHttpClient.get<TLinksResponse>(url);
    return response.links;
  };

  putLinks = async ({ userId, links }: { userId: string; links: TLink[] }) => {
    const url = `/links/${userId}`;
    await this.clientHttpClient.put(url, {
      id: userId,
      links,
    });
  };
}

export default new DashboardRepository();
