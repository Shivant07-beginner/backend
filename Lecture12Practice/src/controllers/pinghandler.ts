import { Request, Response, NextFunction } from "express";
import fs from 'fs/promises'
import { success } from "zod";
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
      next(error)
   }
};