import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

interface ApiWrapperOptions {
  baseURL?: string;
  headers?: Record<string, string>;
}

class ApiWrapper {
  private axiosInstance: AxiosInstance;

  constructor(options: ApiWrapperOptions = {}) {
    this.axiosInstance = axios.create({
      baseURL: options.baseURL || "",
      headers: options.headers || {},
    });
  }

  async request<T>(
    method: string,
    endpoint: string,
    data: any = {},
    params: any = {}
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance({
        method,
        url: endpoint,
        data,
        params,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Error making API request: ${error.message}`);
    }
  }
}

export default ApiWrapper;
