import { Router } from "express";
import { EventController } from "../controller/event.controller";
import { MongoRepository } from "../repository/mongoRepository";
import { EventUseCase } from "../../application/eventUseCase";

const route = Router();

const eventRepo = new MongoRepository();

const eventUseCase = new EventUseCase(eventRepo);

const eventCtrl = new EventController(eventUseCase);


route.get(`/`, eventCtrl.allEvents);
route.get(`/suscribe/:id`, eventCtrl.suscribEvent);
route.post(`/create`, eventCtrl.registerEvent);
route.delete(`/remove/:id`, eventCtrl.removeEvent);
route.put(`/update/:id`, eventCtrl.updateEvent);


export default route;

/**
   * @swagger
   * /event:
   *   get:
   *     summary: See all events using a token but only user with ADMIN ROLE can see event with borrador and publicado status
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "User"
   *         schema: 
   *          type: object
   * /suscribe/:id Event :
   *   get:
   *     summary: first step so that a user can subscribe to an event using the event id
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "User"
   *          
   * /event/create:
   *   post:
   *     summary: Create the events but only an ADMIN_ROL user can create them
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
  *                title: "Charla Ted"
  *                shortDescription: "Charla"
  *                longDescription: "Charla Del Medio Ambiente"
  *                host: "Tom"
  *                place: "Planetario"
  *                status: "borrador"
  *                date: "09-21"
  *                hour: "14:05"
  *  
  * event/delete/:id:
  *   delete:
  *     summary: Delete the events but only an ADMIN_ROL user can create them
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  * event/update/:id:
  *   put:
  *     summary: Delete the events but only an ADMIN_ROL user can create them
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
  *                   title:
  *                     type: integer
  *                   status:
  *                     type: integer
  *             example:
  *                title: "Charla Ted"
  *                status: "borrador"
*/
