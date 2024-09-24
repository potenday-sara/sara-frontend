import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import ServerAPIBuilder from '@/apis/ServerAPIBuilder';
import { HTTPMethod } from '@/libs';

const apiHost = 'https://api.sara-mara.com/answers';

export class ClientAnswerAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientAnswerAPI('GET', url);
}

export default ClientAnswerAPI;

export class SeverAnswerAPI extends ServerAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new SeverAnswerAPI('GET', url);
}
