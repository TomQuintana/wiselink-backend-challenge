import { Request, Response } from "express";
import { EventUseCase } from "../../application/eventUseCase";

export class EventController {
  constructor(private eventUseCase: EventUseCase) {
    this.registerEvent = this.registerEvent.bind(this);
  }

  public async registerEvent(req: Request, res: Response) {
    //const event = await this.eventUseCase.registerEvent(body);
    console.log(req.body);
    //res.send({event});
  }

}
// public async getCtrl({ query }: Request, res: Response) {
//   const { uuid = '' } = query;
//   const user = await this.userUseCase.getDetailUSer(`${uuid}`);
//   res.send({ user });
// }
//
// public async insertCtrl({ body }: Request, res: Response) {
//   const user = await this.userUseCase.registerUser(body);
//   res.send({ user });
// }


// import { Request, Response } from "express";
// import { UserUseCase } from "../../application/userUseCase";
//
// export class UserController {
//   constructor(private userUseCase: UserUseCase) {
//     this.insertCtrl = this.insertCtrl.bind(this)
//     this.getCtrl = this.getCtrl.bind(this)
//   }
//
//   public async getCtrl({ query }: Request, res: Response) {
//     const { uuid = '' } = query;
//     const user = await this.userUseCase.getDetailUSer(`${uuid}`);
//     res.send({ user });
//   }
//
//   public async insertCtrl({ body }: Request, res: Response) {
//     const user = await this.userUseCase.registerUser(body);
//     res.send({ user });
//   }
// }
