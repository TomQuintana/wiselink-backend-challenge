import { UserEntity } from "../domain/user.entity";

export interface UserRepository {
  registerUser(user: UserEntity): Promise<UserEntity | null>;
  getEmailUser(email: string): Promise<UserEntity | null>;
  addEventForUser(email: string, id: string): Promise<UserEntity | null>;
}
