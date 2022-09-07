import { HttpRequest, HttpResponse } from "../../../app/contracts/http";
import { Route } from "../../routes/contracts/route";

export abstract class App {
  init: () => Promise<this>;
  createRoute: (route: Route[]) => void;
  request: <T = any>(req: any) => HttpRequest<T>;
  response: (res: HttpResponse, adapterResponse: any) => any;
  listen: (port: number) => void;
}
