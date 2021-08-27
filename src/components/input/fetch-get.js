export class FetchGet {
  orgUnits;
  children;

  attached() {
    fetch("https://wfm-dev.t.goodt.me/api/v1/org-units/main", {
      method: "GET",
      headers: {
        Authorization: `Basic ${btoa("superuser:qweqwe")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const orgUnits = data._embedded.orgUnits;
        this.orgUnits = orgUnits;
      });
  }

  getName(item) {
    return item.name;
  }

  getChildren() {
    this.orgUnits.map((item) => {
      item._links.children.href
        ? fetch(`${item._links.children.href.split("{")[0]}`, {
            method: "GET",
            headers: {
              Authorization: `Basic ${btoa("superuser:qweqwe")}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              const children = data._embedded.orgUnits;
              this.children = children;
              console.log(children);
            })
        : console.log("Нет детей");
    });
  }
}
