import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.list();

    const userAdmin = user.find(user => user.id === user_id);
    if(!userAdmin.admin || !userAdmin){
      throw new Error("Mensagem do erro");
    }
    return user;
  }
}

export { ListAllUsersUseCase };
