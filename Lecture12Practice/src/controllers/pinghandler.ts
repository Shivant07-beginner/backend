import { Request, Response, NextFunction } from "express";
import fs from 'fs/promises'
import { success } from "zod";
import { AppError, InternalServerError } from "../utils/erros/app.errors";
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
       throw new InternalServerError("something went wrong!!!!!!");
   }
};