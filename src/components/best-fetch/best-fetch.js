import { bindable } from "aurelia-framework";
import b from"./best-fetch.module.scss";

const params = {
  method: "GET",
  headers: {
    Authorization: `Basic ${btoa("superuser:3lB4cuzF")}`,
  },
};

export class BestFetch {
  @bindable orgUnit;
  classes = b;

  loading = false;
  children = null;

  loadChildren() {
    const url =
      this.orgUnit && this.orgUnit._links.children
        ? this.orgUnit._links.children.href.split("{")[0]
        : "https://pochta-wfm-release-qa.goodt.me/api/v1/org-units/main";

    this.loading = true;
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => (this.children = data._embedded.orgUnits))
      .finally(() => (this.loading = false));
    componentHandler.upgradeAllRegistered();
  }
}
