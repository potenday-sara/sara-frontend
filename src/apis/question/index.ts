import ClientAPIBuilder from '@/apis/ClientAPIBuilder';
import ServerAPIBuilder from '@/apis/ServerAPIBuilder';
import { HTTPMethod } from '@/libs';

const apiHost = '/api/questions';
const serverAPIHost = `${process.env.API_URL}/questions` || '';

export class ClientQuestionAPI extends ClientAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(apiHost);
  }

  static get = (url: string) => new ClientQuestionAPI('GET', url);

  static post = (url: string) => new ClientQuestionAPI('POST', url);

  static delete = (url: string) => new ClientQuestionAPI('DELETE', url);
}

export class ServerQuestionAPI extends ServerAPIBuilder {
  constructor(method: HTTPMethod, url: string, data?: unknown) {
    super(method, url, data);
    this.baseURL(serverAPIHost);
  }

  static get = (url: string) => new ServerQuestionAPI('GET', url);

  static post = (url: string, data: unknown) => new ServerQuestionAPI('POST', url, data);
}
