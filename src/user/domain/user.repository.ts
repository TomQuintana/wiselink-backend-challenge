import { UserEntity } from "../domain/user.entity";

export interface UserRepository {
  registerUser(user: UserEntity): Promise<UserEntity | null>;
}
