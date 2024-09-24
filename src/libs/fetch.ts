import { HTTPHeaders, HTTPMethod, HTTPParams } from '@/libs/index';

export default class API {
  readonly method: HTTPMethod;

  readonly url: string;

  baseURL?: string;

  headers?: HTTPHeaders;

  params?: HTTPParams;

  data?: unknown;

  timeout?: number;

  withCredentials?: boolean;

  constructor(method: HTTPMethod, url: string) {
    this.method = method;
    this.url = url;
  }
}



