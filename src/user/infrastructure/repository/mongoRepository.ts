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

  async getEmailUser(email: string): Promise<any> {

    try {
      const emailUser = await User.findOne({email});
      return emailUser;

    } catch (error) {
      console.log(error);
    }
  }
}
