import { inject, injectable } from "tsyringe";

import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  title: string;
  author: string;
  description: string;
  coverBookURL: string;
}

@injectable()
class CreateBookService {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({
    title,
    author,
    description,
    coverBookURL,
  }: IRequest): Promise<void> {
    const bookAlreadyExistis = await this.booksRepository.findByTitle(title);

    if (bookAlreadyExistis) {
      throw new Error("Book already exists!");
    }

    this.booksRepository.create({
      title,
      author,
      description,
      coverBookURL,
    });
  }
}

export { CreateBookService };
