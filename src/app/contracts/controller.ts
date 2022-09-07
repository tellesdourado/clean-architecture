import { HttpRequest, HttpResponse } from "./http";

export abstract class Controller {
  action: (request: HttpRequest<unknown>) => Promise<HttpResponse>;
}
