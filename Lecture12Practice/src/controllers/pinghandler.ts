import { Request, Response, NextFunction } from "express";
import fs from 'fs/promises'
import { success } from "zod";
import { AppError, InternalServerError } from "../utils/erros/app.errors";
import { error } from "console";
import logger from "../config/logger.config";
export const pingHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
     logger.info('ping request recieved', {correlationId:req.headers['x-correlation-id']});
    res.status(200).json({
          success: true,
          message : "Pong !!"
     })
     throw new InternalServerError("error is coming");
};

// 1. have some unique id generator
// 2. put the id in the current request 
