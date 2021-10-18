import { Book } from "../entities/book";

export interface ICreateBookDTO {
  title: string;
  author: string;
  description: string;
  coverBookURL: string;
}

interface IBooksRepository {
  findByTitle(name: string): Promise<Book>;
  list(): Promise<Book[]>;
  create({
    title,
    author,
    description,
    coverBookURL,
  }: ICreateBookDTO): Promise<void>;
}

export { IBooksRepository };
