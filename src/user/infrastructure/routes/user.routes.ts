import { Router } from "express";
import { UserMongoRepository } from "../repository/mongoRepository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";


//import { EventController } from "../controller/event.controller";
//import { MongoRepository } from "../repository/mongoRepository";

const route = Router();

const userRepo = new UserMongoRepository();

const userUseCase = new UserUseCase(userRepo);

const userCtrl = new UserController(userUseCase);

route.post(`/create`, userCtrl.registerUser);
route.post(`/auth`, userCtrl.authUser);

export default route;
