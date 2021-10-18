import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBookService } from "./CreateBookService";

class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, author, description, coverBookURL } = request.body;

    const createBookService = container.resolve(CreateBookService);

    await createBookService.execute({
      title,
      author,
      description,
      coverBookURL,
    });

    return response.status(201).send();
  }
}

export { CreateBookController };
