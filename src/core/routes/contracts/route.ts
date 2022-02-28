import { Controller } from "../../../app/contracts/controller";

export interface Route {
  controller: Controller;
  path: string;
  method: "post" | "get" | "put" | "patch";
}
