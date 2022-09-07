import { App } from "./core/adapters/contracts/application";
import { Database } from "./core/adapters/contracts/database";
import { ExpressAdapter } from "./core/adapters/express/express.adapter";
import { MongoDbAdapter } from "./core/adapters/mongodb/mongodb.adapter";
import { Application } from "./kernel/http/load-application";
import { Register } from "./kernel/modules/register";

async function main() {
  await Register.set(new MongoDbAdapter().connect(), Database.name);
  await Register.set(new ExpressAdapter().init(), App.name);
  Application.load();
}

main();
