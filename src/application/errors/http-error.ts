import { StatusCode } from "./status-code";

export class HttpError extends Error {
  constructor(public statusCode: StatusCode, message: string) {
    super();
    this.message = message;
  }
}
