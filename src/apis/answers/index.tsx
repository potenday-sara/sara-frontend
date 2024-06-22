import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import { HTTPMethod } from '@/libs';
import ServerAPIBuilder from '@/apis/ServerAPIBuilder';

const apiHost = 'https://api.sara-mara.com/answers/';

class ClientAnswerAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientAnswerAPI('GET', url);
}

export default ClientAnswerAPI;

class SeverAnswerAPI extends ServerAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new SeverAnswerAPI('GET', url);
}
