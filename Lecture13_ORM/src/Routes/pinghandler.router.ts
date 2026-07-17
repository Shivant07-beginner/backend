import express from 'express'
import { validRequestBody } from '../validators';
import { pingSchema } from '../validators/ping.validator';

const pingRouter = express.Router();

pingRouter.get('/ping',validRequestBody(pingSchema), )