export interface HttpRequestOptions {
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean>;
  body?: unknown;
}

export interface HttpClient {
  get<T>(url: string, options?: HttpRequestOptions): Promise<T>;
  post<T>(url: string, options?: HttpRequestOptions): Promise<T>;
  put<T>(url: string, options?: HttpRequestOptions): Promise<T>;
  delete<T>(url: string, options?: HttpRequestOptions): Promise<T>;
}
