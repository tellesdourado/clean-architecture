import { App } from "../../core/adapters/contracts/application";
import { api } from "../../core/routes/api.route";
import { Register } from "../modules/register";

export class Application {
  static async load() {
    const app = await Register.get<App>(App);

    app.createRoute(await api());

    app.listen(3333);
  }
}
