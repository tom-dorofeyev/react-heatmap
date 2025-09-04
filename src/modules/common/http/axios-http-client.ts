import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpClient, HttpRequestOptions } from "./http-client.interface";

export class AxiosHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor(defaultHeaders: Record<string, string> = {}) {
    this.client = axios.create({
      headers: {
        "Content-Type": "application/json",
        ...defaultHeaders,
      },
    });
  }

  private buildConfig(options?: HttpRequestOptions): AxiosRequestConfig {
    const config: AxiosRequestConfig = {};
    if (options?.headers) {
      config.headers = options.headers;
    }
    if (options?.query) {
      config.params = options.query;
    }
    if (options?.body) {
      config.data = options.body;
    }
    return config;
  }

  async get<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const response = await this.client.get<T>(path, this.buildConfig(options));
    return response.data;
  }

  async post<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const response = await this.client.post<T>(
      path,
      options?.body,
      this.buildConfig(options)
    );
    return response.data;
  }

  async put<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const response = await this.client.put<T>(
      path,
      options?.body,
      this.buildConfig(options)
    );
    return response.data;
  }

  async delete<T>(path: string, options?: HttpRequestOptions): Promise<T> {
    const response = await this.client.delete<T>(
      path,
      this.buildConfig(options)
    );
    return response.data;
  }
}
