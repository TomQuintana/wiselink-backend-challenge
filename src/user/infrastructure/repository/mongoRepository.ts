//import EventModel from "../model/model.event";
import User from "../model/model.user";
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

export class UserMongoRepository implements UserRepository{

  async registerUser(userIn: UserEntity): Promise<any> {
    const user = await User.create(userIn);
    console.log('Desde user UserMongoRepository');
    
    return user;
  }
}
