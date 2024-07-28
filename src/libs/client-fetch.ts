import axios, { AxiosPromise } from 'axios';
import { FetchOptions } from 'react-query/types/core/query';
import { HTTPHeaders, HTTPMethod, HTTPParams } from '@/libs/index';
import API from '@/libs/fetch';

export default class ClientAPI extends API {
  constructor(method: HTTPMethod, url: string) {
    super(method, url);
  }

  call<T>(): AxiosPromise<T> {
    const http = axios.create();

    if (this.withCredentials) {
      http.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response && error.response.status === 401) {
            /* 에러 처리 진행 */
          }
          return Promise.reject(error);
        },
      );
    }
    return http.request({ ...this });
  }
}
