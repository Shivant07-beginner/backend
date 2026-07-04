import { Request, Response, NextFunction } from "express";
import { success } from "zod";
 import { ZodObject } from "zod";



 export const validRequestBody = (schema:ZodObject) =>{
    return async (req : Request, res:Response, next : NextFunction) =>{
        try{
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();

        } catch(error
        ){
             res.status(400).json({
                message:"invalid request body",
                success: false
             }); 
        }
    }
}
