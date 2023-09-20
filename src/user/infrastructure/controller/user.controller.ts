import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {

  constructor(private userUseCase: UserUseCase) {
    this.registerUser = this.registerUser.bind(this);
  }

  public async registerUser(req: Request, res: Response) {

    const user = await this.userUseCase.createUser(req.body);
    
    res.status(200).send({user});
  }

  public async authUser() {
    console.log('Desde validate Rol');
  }

}
