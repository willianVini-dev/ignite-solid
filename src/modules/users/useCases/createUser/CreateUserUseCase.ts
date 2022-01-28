import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";


interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ email, name }: IRequest){
    const emailExists = this.usersRepository.findByEmail(email);
    if(emailExists){
      throw new Error("Mensagem do erro")
    }

    const user = this.usersRepository.create({name, email});
    return user;
  }
}

export { CreateUserUseCase };
