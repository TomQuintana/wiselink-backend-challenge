//import EventModel from "../model/model.event";
import User from "../model/model.user";
import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

export class UserMongoRepository implements UserRepository{

  async registerUser(userIn: UserEntity): Promise<any> {
    const user = await User.create(userIn);
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

  async addEventForUser(email: string, id: string): Promise<any> {
    
    try {
      const emailUser = await User.findOneAndUpdate({email: email}, { subscribedEvents: id});
      console.log(emailUser);
      
      return emailUser;

    } catch (error) {
      console.log(error);
    }
  }

}
