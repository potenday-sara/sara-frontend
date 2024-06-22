import { HTTPHeaders, HTTPMethod, HTTPParams, HTTPServerOptions } from '@/libs';
import ServerAPI from '@/libs/server-fetch';

export default class ServerAPIBuilder {
  _instance: ServerAPI;

  constructor(method: HTTPMethod, url: string, data?: unknown) {
    this._instance = new ServerAPI(method, url);
    this._instance.data = data;
    this._instance.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
    this._instance.timeout = 5000;
    this._instance.withCredentials = false;
    this._instance.options= {
      cache: 'no-store',
      next: {
        revalidate: false,
        tage: [],
      },
    }
  }

  baseURL(value: string): ServerAPIBuilder {
    this._instance.baseURL = value;
    return this;
  }

  headers(value: HTTPHeaders): ServerAPIBuilder {
    this._instance.headers = value;
    return this;
  }

  timeout(value: number): ServerAPIBuilder {
    this._instance.timeout = value;
    return this;
  }

  params(value: HTTPParams): ServerAPIBuilder {
    this._instance.params = value;
    return this;
  }

  data(value: unknown): ServerAPIBuilder {
    this._instance.data = value;
    return this;
  }

  withCredentials(value: boolean): ServerAPIBuilder {
    this._instance.withCredentials = value;
    return this;
  }

  options(value: HTTPServerOptions): ServerAPIBuilder {
    this._instance.options = value;
    return this;
  }

  build(): ServerAPI {
    return this._instance;
  }
}

