import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export type SchemaType = z.ZodType<any, any, any>;

const validate = <T extends SchemaType>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(
        req.body,
    );
      next();
    } catch (error) {
        console.log(error)
      res.status(400).send(error);     
    }
  };
};
export default validate;
