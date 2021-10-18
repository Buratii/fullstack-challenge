import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListBooksService } from "./ListBooksService";

class ListBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listBooksService = container.resolve(ListBooksService);

    const all = await listBooksService.execute();

    return response.json(all);
  }
}

export { ListBooksController };
