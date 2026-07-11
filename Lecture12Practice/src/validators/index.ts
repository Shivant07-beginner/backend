import { Request, Response, NextFunction } from "express";
import { success } from "zod";
 import { ZodObject } from "zod";
import logger from "../config/logger.config";



 export const validRequestBody = (schema:ZodObject) =>{
    return async (req : Request, res:Response, next : NextFunction) =>{
        try{
            logger.info("validatiing request body", {correlationId:req.headers['x-correlation-id']});
            await schema.parseAsync(req.body);
            logger.info("Request body is valid", {correlationId:req.headers['x-correlation-id']});
            next();

        } catch(error
        ){
            logger.info("reques body is invalid",  {correlationId:req.headers['x-correlation-id']})
             res.status(400).json({
                message:"invalid request body",
                success: false
             }); 
        }
    }
}
