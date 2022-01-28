import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
   try {
    let {user_id} = request.headers;
    user_id = String(user_id)
    const user = this.listAllUsersUseCase.execute({user_id});

    return response.json(user)
   } catch (error) {
     return response.status(400).json({error})
   }
  }
}

export { ListAllUsersController };
