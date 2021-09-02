import { PLATFORM } from "aurelia-framework";

export class Router {
  configureRouter(config, router) {
  config.map([
    { route: ['', 'fetch-get'],   name: 'fetch-get',    moduleId: PLATFORM.moduleName('fetch-get') }
  ]);

  this.router = router;
}
}
