import { Application } from "./core/adapters/contracts/application";
import { ExpressAdapter } from "./core/adapters/express/express.adapter";
import { LoadApplication } from "./load-application";

const application: Application = new ExpressAdapter();

const loadApplication = new LoadApplication(application);

loadApplication.run();
