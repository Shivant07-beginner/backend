import express, { Request, Response,NextFunction } from 'express';
import { pingHandler } from '../../controllers/pinghandler';
import { validRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const pingRouter = express.Router();

 

pingRouter.get('/ping', validRequestBody(pingSchema) ,pingHandler);

export default pingRouter;

