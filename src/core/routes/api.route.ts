import { CreateUserController } from "../../app/resources/create-user/create-user.controller";
import { CreateUserService } from "../../app/resources/create-user/create-user.service";
import { Register } from "../../kernel/modules/register";
import { Database } from "../adapters/contracts/database";
import { Route } from "./contracts/route";

export const api = async (): Promise<Route[]> => {
  const routes: Route[] = [];
  const createUserService = new CreateUserService(
    await Register.get<Database>(Database)
  );

  routes.push({
    controller: new CreateUserController(createUserService),
    path: "/user/create",
    method: "post",
  });

  return routes;
};
