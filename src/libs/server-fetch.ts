import { HTTPMethod, HTTPParams, HTTPHeaders, HTTPServerOptions } from '@/libs/index';
import API from '@/libs/fetch';

export default class ServerAPI extends API {
  options: HTTPServerOptions;

  constructor(method: HTTPMethod, url: string) {
    super(method, url);
  }

  call<T>(): Promise<T> {
    const queryString = new URLSearchParams(this.params).toString();
    const URL = this.baseURL + this.url + (queryString ? `?${queryString}` : '');
    return fetch(URL, {
      body: JSON.stringify(this.data),
      ...this,
    })
      .then((res: Response) => {
        return res.json();
      })
      .catch((error) => {
        return error.json();
      });
  }
}
