import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config";




export const validRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info("validatiing the request",)
      await schema.parseAsync(req.body);
      console.log("valid request body");
      next();
    } catch (error) {
      res.status(400).json({
        message: "invalid request body",
        success: false,
      });
    }
  };
};



