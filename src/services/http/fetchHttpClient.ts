import { getServerSession } from "next-auth";

import authOptions from "@config/nextAuth";

import { IHttpClient } from "./types";

export class FetchHttpClient implements IHttpClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  }

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    return this.fetchData<T>(url, options);
  }

  async post<T>(url: string, data: unknown, options?: RequestInit): Promise<T> {
    return this.fetchData<T>(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async put<T>(url: string, data: unknown, options?: RequestInit): Promise<T> {
    return this.fetchData<T>(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  async delete<T>(url: string, options?: RequestInit): Promise<T> {
    return this.fetchData<T>(url, { ...options, method: "DELETE" });
  }

  private async fetchData<T>(
    url: string,
    options: RequestInit = {},
  ): Promise<T> {
    try {
      const session = await getServerSession(authOptions);
      const headers = new Headers(
        options.headers ?? { "Content-Type": "application/json" },
      );

      if (session?.authTokens?.accessToken) {
        headers.append("Authorization", session?.authTokens.accessToken);
      }

      const fetchOptions: RequestInit = {
        ...options,
        headers,
      };

      let response;
      if (!["http://", "https://"].includes(url)) {
        response = await fetch(`${this.baseUrl}${url}`, fetchOptions);
      }

      if (!response?.ok) {
        console.error(
          `HTTP error! Status: ${response?.status}, ${response?.statusText}`,
        );
        throw new Error(
          `HTTP error! Status: ${response?.status}, ${response?.statusText}`,
        );
      }

      return await response?.json();
    } catch (e) {
      const error = e as Error;
      console.error(`Fetch error in ${url}:`, error.message || error);
      throw error;
    }
  }
}
