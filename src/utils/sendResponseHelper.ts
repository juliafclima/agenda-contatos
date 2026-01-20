import { Response } from "express";

export const sendResponse = (res: Response, response: any) => {
  return res.status(response.statusCode).json(response.body);
};