import { StatusCode } from "./statusCode.js";

export interface HttpResponse<T = any> {
  statusCode: number;
  body: {
    success: boolean;
    message: string;
    data?: T;
  };
}

const response = <T>(
  statusCode: number,
  success: boolean,
  message: string,
  data?: T,
): HttpResponse<T> => ({
  statusCode,
  body: {
    success,
    message,
    data,
  },
});

export const ok = <T>(message: string, data: T): HttpResponse<T> =>
  response(StatusCode.OK, true, message, data);

export const created = <T>(message: string, data: T): HttpResponse<T> =>
  response(StatusCode.CREATED, true, message, data);

export const badRequest = (message: string): HttpResponse =>
  response(StatusCode.BAD_REQUEST, false, message);

export const notFound = (message: string): HttpResponse =>
  response(StatusCode.NOT_FOUND, false, message);

export const internalServerError = (
  message = "Erro interno do servidor",
): HttpResponse => response(StatusCode.INTERNAL_SERVER_ERROR, false, message);
