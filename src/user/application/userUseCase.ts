import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository){}

  public createUser = async({name, email, password, rol}) => {
    const userValue = new UserValue({name, email, password, rol});

    const userCreated = await this.userRepository.registerUser(userValue);
    console.log('Desde User Case');
    
    return userCreated;
  };

  public getEmailUser = async(email: string, password: string) => {
    const userEmail = await this.userRepository.getEmailUser(email);
    return userEmail;
  };
}
