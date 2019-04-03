
export class User {
  id: string;
  idToken: string;
  image: string;
  name: string;
  provider: string;
  token: string;

  constructor(id, idToken, image, name, provider, token) {
    this.id = id;
    this.idToken = idToken;
    this.name = name;
    this.provider = provider;
    this.token = token;
    this.image = image;
  }

  static getUserByJSON(data) {
    return new User(data.id, data.idToken, data.image, data.name, data.provider, data.token);
  }

}
