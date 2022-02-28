import { CreateUserController } from "../../app/resources/create-user/create-user.controller";
import { CreateUserService } from "../../app/resources/create-user/create-user.service";
import { MongoDbAdapter } from "../adapters/mongodb/mongodb.adapter";
import { Route } from "./contracts/route";

const api = async (): Promise<Route[]> => {
  const routes: Route[] = [];
  const database = await new MongoDbAdapter().connect();
  const createUserService = new CreateUserService(database);

  routes.push({
    controller: new CreateUserController(createUserService),
    path: "/user/create",
    method: "post",
  });

  return routes;
};

export { api };
