import { Router } from "express";
import { UserMongoRepository } from "../repository/mongoRepository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";

const route = Router();

const userRepo = new UserMongoRepository();

const userUseCase = new UserUseCase(userRepo);

const userCtrl = new UserController(userUseCase);

route.post(`/create`, userCtrl.registerUser);
route.post(`/auth`, userCtrl.authUser);
route.put(`/suscribe`, userCtrl.suscribeEvent);

export default route;
