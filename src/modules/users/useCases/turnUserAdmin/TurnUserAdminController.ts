import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.params.user_id
      const user = this.turnUserAdminUseCase.execute({user_id})
      return response.json({name:user.name, email:user.email, admin:user.admin})
    } catch (error) {
      return response.status(404).json({error})
    }
  }
}

export { TurnUserAdminController };
