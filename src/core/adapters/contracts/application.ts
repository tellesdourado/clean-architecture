import { HttpRequest, HttpResponse } from "../../../app/contracts/http";
import { Route } from "../../routes/contracts/route";

export interface Application {
  init(): Promise<this>;
  createRoute(route: Route[]): void;
  request(req: unknown): HttpRequest<unknown>;
  response(res: HttpResponse, adapterResponse: unknown): unknown;
  listen(port: number): void;
}
