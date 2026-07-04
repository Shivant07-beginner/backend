import { Request,Response, NextFunction } from "express";
import { success } from "zod";


export const genricErrorHandling =(err: any, req: Request, res: Response, next : NextFunction) =>{
  res.status(501).json({
      success : false,
      message : "Something went wrong",
  })
}