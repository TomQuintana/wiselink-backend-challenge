import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { generarJWT } from "../services/auth.service";

export class UserController {

  constructor(private userUseCase: UserUseCase) {
    this.registerUser = this.registerUser.bind(this);
    this.authUser = this.authUser.bind(this);
  }

  public async registerUser(req: Request, res: Response) {

    const user = await this.userUseCase.createUser(req.body);
    
    res.status(200).send({user});
  }

  public async authUser(req: Request, res: Response) {
    
    const {email, password} = req.body;
    const userEmail = await this.userUseCase.getEmailUser(email, password);

    if(userEmail == null) {
      return res.status(500).json({
        msg: 'The user it not register'
      });
    }

    const {rol} = userEmail;

    const token = await generarJWT(email, rol);

    res.send({token});
  }

}
