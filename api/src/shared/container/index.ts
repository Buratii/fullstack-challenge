import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository";

import { BooksRepository } from "../../modules/books/repositories/BooksRepository";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";

container.registerSingleton<IBooksRepository>(
  "BooksRepository",
  BooksRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
