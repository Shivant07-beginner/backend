import { Request, Response, NextFunction } from "express";
import fs from 'fs/promises'
import { success } from "zod";
import { AppError } from "../utils/erros/app.errors";
import { error } from "console";
export const pingHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
   try {
     await fs.readFile("sample");
     res.status(200).json({
          success: true,
          message : "Pong !!"
     })

   } catch (error) {
       const error1: AppError ={
          statusCode: 500,
          message : "internal server error",
          name: "InternalServerEoor",
       }
        next(error1);
   }
};