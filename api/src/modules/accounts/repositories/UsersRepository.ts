import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ username, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      email,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
