/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
/**
 * Router Definition
 */
export const apiRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items/

apiRouter.get("/", async (req: Request, res: Response) => {
    try {
      res.status(200).send({MSG : "Api route"});
    } catch (e) {
      res.status(404).send(e.message);
    }
  });