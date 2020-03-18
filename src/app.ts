/**
 * Required External Modules
 */
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import { apiRouter } from "./api/api.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";
import connect from "./config/db";
import { config } from './config/config';
/**
 * App Variables
 */

connect();
const app: Application = express();
if (!config.port) {
    process.exit(1);
}
const PORT: number = parseInt(config.port as string, 10);
/**
 *  App Configuration
 */
app.use(helmet());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("Hit made")
    res.status(200).json({ MSG: "Hi user" });
});
app.use('/api', apiRouter);
app.use(errorHandler);
app.use(notFoundHandler);
/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
})