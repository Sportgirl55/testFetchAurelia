export class FetchGet {
  message = "У подразделения нет дочерних элементов";

  _baseUrl = "https://wfm-dev.t.goodt.me/api/v1/org-units";
  _headers = {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa("superuser:qweqwe")}`,
    },
  };
  orgUnits;
  children;

  attached() {
    fetch(`${this._baseUrl}/main`, this._headers)
      .then((response) => response.json())
      .then((data) => {
        const orgUnits = data._embedded.orgUnits;
        this.orgUnits = orgUnits;
      });
  }

  getName(item) {
    return item.name;
  }
  getChildren = async (elem) => {
    if (elem._links.children) {
      await fetch(`${this._baseUrl}/${elem.id}/children`, this._headers)
        .then((response) => response.json())
        .then((data) => {
          const children = data._embedded.orgUnits;
          this.children = children;
          console.log(children);
        });
    } else {
      console.log("Нет подразделений для этого элемента");
    }
  };
}
