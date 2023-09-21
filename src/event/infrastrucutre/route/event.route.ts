import { Router } from "express";
import { EventController } from "../controller/event.controller";
import { MongoRepository } from "../repository/mongoRepository";
import { EventUseCase } from "../../application/eventUseCase";

const route = Router();

const eventRepo = new MongoRepository();

const eventUseCase = new EventUseCase(eventRepo);

const eventCtrl = new EventController(eventUseCase);

route.post(`/create`, eventCtrl.registerEvent);
route.delete(`/remove/:id`, eventCtrl.removeEvent);
route.get(`/`, eventCtrl.allEvents);


export default route;
