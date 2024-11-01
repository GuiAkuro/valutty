import { User } from "@/domain/models/user";

interface UserInput {
  id?: string;
  email: string;
  password: string;
  forename: string;
  surname: string;
}

export abstract class UsersAdapter {
  static many(users: Array<UserInput>) {
    if (!users) {
      return null;
    }

    return users.map((user) => {
      return new User(user);
    });
  }

  static one(user: UserInput | undefined) {
    if (!user) {
      return null;
    }

    return new User(user);
  }
}
