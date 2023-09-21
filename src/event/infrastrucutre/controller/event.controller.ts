import { Request, Response } from "express";
import { EventUseCase } from "../../application/eventUseCase";
import { Validate } from "../services/validate.service";

export class EventController {

  validate = new Validate();

  constructor(private eventUseCase: EventUseCase) {
    this.registerEvent = this.registerEvent.bind(this);
    this.allEvents = this.allEvents.bind(this);
    this.removeEvent = this.removeEvent.bind(this); //NOTE: analizar que hace bien este constructor
    this.updateEvent = this.updateEvent.bind(this); //NOTE: analizar que hace bien este constructor
  }


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

  public async allEvents(req: Request, res: Response) {
    const allEvents = await this.eventUseCase.obtainAllEvents();
    res.send({allEvents});
  }

  //NOTE: manage res when id its not found
  public async removeEvent(req: Request, res: Response) {
    const rol = this.validate.rolByToken(req.headers.authorization);

    if(!rol) {
      return res.status(404).json({
        msg:'You do not have permissions to do the action'
      });
    }

    const {id} = req.params; 
    const eventRemoved = this.eventUseCase.removeEvent(id);

    res.send({msg: 'Event Removed'});
  }

  public async updateEvent(req: Request, res: Response) {
    const {id} = req.params;
    const {body} = req;

    //NOTE: pasar esto a un middleware
    const rol = this.validate.rolByToken(req.headers.authorization);

    if(!rol) {
      return res.status(404).json({
        msg:'You do not have permissions to do the action'
      });
    }
    const eventUpdated = await this.eventUseCase.updateEventById(id, body);
    res.send({msg: 'Event Updated'});

  }
}
