import { User } from "../model/user";

const DATABASE: User[] = [];

export class UserService {
  async createUser(user: User) {
    DATABASE.push(user);
    return DATABASE;
  }
}
