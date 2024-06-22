import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import { HTTPMethod } from '@/libs';
import ServerAPIBuilder from '@/apis/ServerAPIBuilder';

const apiHost = 'https://api.sara-mara.com/rank';

export class ClientRankAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientRankAPI('GET', url);
}


export class ServerRankAPI extends ServerAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ServerRankAPI('GET', url);
}
