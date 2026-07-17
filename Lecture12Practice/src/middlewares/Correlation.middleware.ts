import { Request, Response, NextFunction } from "express";
import { v4 as uuidV4 } from "uuid";
import { asyncLocalStorage } from "../helper/request.helpers";


export const addCorrelationIdToTheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuidV4();

  // Store it in the request object (optional but recommended)
  req.headers["x-correlation-id"] = correlationId;

  // Send it back in the response
  res.setHeader("x-correlation-id", correlationId);
    asyncLocalStorage.run({correlationId: correlationId}, () =>{
      next();
    });

  next();
};

