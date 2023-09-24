import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";
import { UserService } from "../infrastructure/services/user.service";

export class UserUseCase {

  userService = new UserService();

  constructor(private readonly userRepository: UserRepository){}

  public createUser = async({name, email, password, rol}) => {
    const validateUser = this.userService.validate(email, rol);

    const userValue = new UserValue({name, email, password, rol});

    const userCreated = await this.userRepository.registerUser(userValue);

    return userCreated;
  };

  public getEmailUser = async(email: string, password: string) => {
    const userEmail = await this.userRepository.getEmailUser(email);
    return userEmail;
  };

  public addEventForUser = async(email: string, id: string) => {
    const userEvent = await this.userRepository.addEventForUser(email, id);
    return userEvent;
  };
}
