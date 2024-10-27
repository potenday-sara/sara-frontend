import { HTTPMethod, HTTPParams, HTTPHeaders, HTTPServerOptions } from '@/libs/index';
import API from '@/libs/fetch';

export default class ServerAPI extends API {
  options: HTTPServerOptions;

  call<T>(): Promise<T> {
    const queryString = new URLSearchParams(this.params as string).toString();
    const URL = this.baseURL + this.url + (queryString ? `?${queryString}` : '');
    const { options, ...rest } = this;
    return fetch(URL, {
      body: JSON.stringify(this.data),
      ...options,
      ...rest,
    })
      .then((res: Response) => {
        console.log('Response', res);
        return res.json();
      })
      .catch((error) => {
        console.log('error', error);
        return error;
      });
  }
}
