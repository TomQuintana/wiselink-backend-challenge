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

/**
   * @swagger
   * /user/create:
   *   post:
   *     summary: Create a user
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "User"
   *         schema: 
   *          type: object
   *          properties:
   *            name : 
   *              type: string
   *            email: 
   *              type: string
   *            password: 
   *              type: string
   *            rol:
   *              type: string
   *          example:
   *              name: "Tom"
   *              email: "admin@wiselink.com"
   *              password: "123456"
   *              rol: "ADMIN_ROL"
   * /auth:
   *   post:
   *     summary : Validate a user email and password
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "User"
   *         schema: 
   *          type: object
   *          properties:
   *            email: 
   *              type: string
   *            password: 
   *              type: string
   *          example:
   *             email: "tom@user.com"
   *             password: "123456"
   * user/suscribe/:id:
   *   put:
   *     summary: Subscribe a user to an event 
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               eventStatus:
  *                 type: object
  *                 properties:
  *                   email:
  *                     type: string
  *                   rol:
  *                     type: string
  *                   iat:
  *                     type: integer
  *                   exp:
  *                     type: integer
  *               id:
  *                 type: string
  *             example:
  *               eventStatus:
  *                 email: "tom@user.com"
  *                 rol: "USER_ROL"
  *                 iat: 1695415330
  *                 exp: 1695429730
  *               id: "650da6c917e893ae4b5e1fd1"
*/
