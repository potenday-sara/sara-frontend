import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import { HTTPMethod } from '@/libs';

const apiHost = '/api/shop';

export class ClientShopAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientShopAPI('GET', url);
}
