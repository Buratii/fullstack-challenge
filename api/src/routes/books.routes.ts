import { Router } from "express";
import { CreateBookController } from "../modules/books/services/createBook/CreateBookController";
import { ListBooksController } from "../modules/books/services/listBooks/ListBooksController";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const listBookController = new ListBooksController();

booksRoutes.post("/", createBookController.handle);

booksRoutes.get("/", listBookController.handle);

export { booksRoutes };
