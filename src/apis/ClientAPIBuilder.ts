import ClientAPI from '@/libs/client-fetch';
import { HTTPHeaders, HTTPMethod, HTTPParams } from '@/libs';

export default class ClientAPIBuilder {
  _instance: ClientAPI;

  constructor(method: HTTPMethod, url: string, data?: unknown) {
    this._instance = new ClientAPI(method, url);
    this._instance.data = data;
    this._instance.headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };
    this._instance.timeout = 5000;
    this._instance.withCredentials = false;
  }

  baseURL(value: string): ClientAPIBuilder {
    this._instance.baseURL = value;
    return this;
  }

  headers(value: HTTPHeaders): ClientAPIBuilder {
    this._instance.headers = value;
    return this;
  }

  timeout(value: number): ClientAPIBuilder {
    this._instance.timeout = value;
    return this;
  }

  params(value: HTTPParams): ClientAPIBuilder {
    this._instance.params = value;
    return this;
  }

  data(value: unknown): ClientAPIBuilder {
    this._instance.data = value;
    return this;
  }

  withCredentials(value: boolean): ClientAPIBuilder {
    this._instance.withCredentials = value;
    return this;
  }

  build(): ClientAPI {
    return this._instance;
  }
}

