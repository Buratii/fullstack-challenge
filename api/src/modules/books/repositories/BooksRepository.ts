import { getRepository, Repository } from "typeorm";

import { Book } from "../entities/book";
import { IBooksRepository, ICreateBookDTO } from "./IBooksRepository";

class BooksRepository implements IBooksRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = getRepository(Book);
  }

  async create({
    title,
    author,
    description,
    coverBookURL,
  }: ICreateBookDTO): Promise<void> {
    const book = this.repository.create({
      title,
      author,
      description,
      cover_book_url: coverBookURL,
    });

    await this.repository.save(book);
  }

  async list(): Promise<Book[]> {
    const books = await this.repository.find();

    return books;
  }

  async findByTitle(title: string): Promise<Book> {
    const book = await this.repository.findOne({ title });

    return book;
  }
}

export { BooksRepository };
