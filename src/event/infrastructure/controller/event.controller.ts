import { Request, Response } from "express";
import { EventUseCase } from "../../application/eventUseCase";
import { Validate } from "../services/validate.service";
import { Suscribe } from "../services/suscribe.service";

export class EventController {

  validate = new Validate();
  suscribe = new Suscribe();

  constructor(private eventUseCase: EventUseCase) {
    this.registerEvent = this.registerEvent.bind(this);
    this.allEvents = this.allEvents.bind(this);
    this.removeEvent = this.removeEvent.bind(this); 
    this.updateEvent = this.updateEvent.bind(this); 
    this.suscribEvent = this.suscribEvent.bind(this); 
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
    
    const rol = this.validate.rolByToken(req.headers.authorization);
    
    if(!rol) {
      const publishedEvent = await this.eventUseCase.getPublicEvent();
      return res.send({publishedEvent});
    }
    
    const allEvents = await this.eventUseCase.obtainAllEvents();
    res.send({allEvents});
  }

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

    const rol = this.validate.rolByToken(req.headers.authorization);
    console.log(rol);
    

    if(!rol) {
      return res.status(404).json({
        msg:'You do not have permissions to do the action'
      });
    }
    await this.eventUseCase.updateEventById(id, body);
    res.send({msg: 'Event Updated'});

  }

  public async suscribEvent(req: Request, res: Response) {
    const {id} = req.params;

    const rol = this.validate.rolByToken(req.headers.authorization);

    if(!rol) {
      const eventSelect = await this.eventUseCase.findEventById(id);
      const eventStatus = this.suscribe.event(eventSelect, req.headers.authorization);

      if(eventStatus) {
        return res.send({eventStatus, id});
      }
      return res.send({msg: 'No te puedes Suscribir'});
    }
  }

}
