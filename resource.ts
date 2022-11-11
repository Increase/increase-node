import type { Increase } from './index'

export class APIResource {
  protected client: Increase;
  constructor(client: Increase) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: Increase['get'];
  protected post: Increase['post'];
  protected patch: Increase['patch'];
  protected put: Increase['put'];
  protected delete: Increase['delete'];
  protected getAPIList: Increase['getAPIList'];
}