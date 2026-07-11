import { Request, Response, NextFunction } from "express";
import { v4 as uuid } from "uuid";

export const addCorrelationIdToTheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuid();

  // Store it in the request object (optional but recommended)
  req.headers["x-correlation-id"] = correlationId;

  // Send it back in the response
  res.setHeader("X-Correlation-Id", correlationId);

  next();
};