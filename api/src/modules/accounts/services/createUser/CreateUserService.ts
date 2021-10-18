import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ username, email, password }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      username,
      email,
      password,
    });
  }
}

export { CreateUserService };
