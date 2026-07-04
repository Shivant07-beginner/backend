import { Request,Response, NextFunction } from "express";
import { success } from "zod";
import {AppError} from '../utils/erros/app.errors'

export const genricErrorHandling =(err:AppError, req: Request, res: Response, next : NextFunction) =>{
  res.status(err.statusCode).json({
      success : false,
      message : err.message,
  })
}