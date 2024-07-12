import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import { HTTPMethod } from '@/libs';
import ServerAPIBuilder from '@/apis/ServerAPIBuilder';

const apiHost = '/api/questions';

export class ClientQuestionAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientQuestionAPI('GET', url);

  static post = (url: string) => new ClientQuestionAPI('POST', url);
}

export class ServerQuestionAPI extends ServerAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ServerQuestionAPI('GET', url);

  static post = (url: string, data: unknown) => new ServerQuestionAPI('POST', url, data);
}
