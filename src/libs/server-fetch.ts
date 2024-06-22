import { HTTPMethod, HTTPParams, HTTPHeaders, HTTPServerOptions } from '@/libs/index';
import API from '@/libs/fetch';

export default class ServerAPI extends API{
  options: HTTPServerOptions

  constructor(method: HTTPMethod, url: string) {
    super(method, url);
  }

  call<T>(): Promise<T> {
    const URL = this.baseURL + this.url
    return fetch(URL, {
      body: JSON.stringify(this.data),
      ...this
    }).then((res: Response) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.statusText)
      }
    })
  }
}

