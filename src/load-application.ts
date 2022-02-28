import { Application } from "./core/adapters/contracts/application";
import { api } from "./core/routes/api.route";

export class LoadApplication {
  constructor(private application: Application) {}
  async run() {
    const app = await this.application.init();

    const routes = [...(await api())];

    app.createRoute(routes);

    app.listen(3333);
  }
}
