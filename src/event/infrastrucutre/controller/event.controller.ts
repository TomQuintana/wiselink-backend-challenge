import { Request, Response } from "express";
import { EventUseCase } from "../../application/eventUseCase";
import { Validate } from "../services/validate.service";

export class EventController {

  validate = new Validate();

  constructor(private eventUseCase: EventUseCase) {
    this.registerEvent = this.registerEvent.bind(this);
    this.allEvents = this.allEvents.bind(this);
  }

  //TODO: create event only for admin user
  //TODO: modify event only for admin user
  //TODO: remove event only for admin user
  public async registerEvent(req: Request, res: Response) {
    
    const rol = this.validate.rolByToken(req.headers.authorization);

    if(!rol) {
      return res.status(404).json({
        msg:'You do not have permissions to do the action'
      });
    }

    const event = await this.eventUseCase.registerEvent(req.body);
    res.send({event});
  }

  //TODO:
  public async allEvents(req: Request, res: Response) {
    console.log('Todos los eventos');
    const allEvents = await this.eventUseCase.obtainAllEvents();
    res.send({allEvents});
  }

  public async removeEvent(req: Request, res: Response) {

    
  }

}
