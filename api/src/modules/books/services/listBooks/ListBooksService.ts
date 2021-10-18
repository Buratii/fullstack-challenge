import { inject, injectable } from "tsyringe";
import { Book } from "../../entities/book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class ListBooksService {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute(): Promise<Book[]> {
    const books = await this.booksRepository.list();

    return books;
  }
}

export { ListBooksService };
