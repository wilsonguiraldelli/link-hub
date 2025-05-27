import { AxiosRequestConfig } from "axios";

export interface IErrorResponse {
  message: string;
}

export interface IHttpClient {
  get<T>(url: string, options?: RequestInit | AxiosRequestConfig): Promise<T>;
  post<T>(
    url: string,
    data: unknown,
    options?: RequestInit | AxiosRequestConfig,
  ): Promise<T>;
  put<T>(
    url: string,
    data: unknown,
    options?: RequestInit | AxiosRequestConfig,
  ): Promise<T>;
  delete<T>(
    url: string,
    options?: RequestInit | AxiosRequestConfig,
  ): Promise<T>;
}
