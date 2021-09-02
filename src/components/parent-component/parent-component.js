import {FetchGet} from '../input/fetch-get';
import {inject} from 'aurelia-framework';

// @inject(FetchGet)
export class ParentComponent {
  _baseUrl = "https://wfm-dev.t.goodt.me/api/v1/org-units";
  _headers = {
    method: "GET",
    headers: {
      Authorization: `Basic ${btoa("superuser:qweqwe")}`,
    },
  };
  orgUnits;
  children;
  statusChild;

  loading = false;
  // error = false;

  attached() {
    fetch(`${this._baseUrl}/main`, this._headers)
      .then((response) => response.json())
      .then((data) => {
        const orgUnits = data._embedded.orgUnits;
        this.orgUnits = orgUnits;
      });
  }

  getItemData(item) {
    return {
      name: item.name,
      id: item.id,
    };
  }

  getChildren = async (elem) => {
    if (elem._links.children) {
      this.loading = true;
      await fetch(`${this._baseUrl}/${elem.id}/children`, this._headers)
        .then((response) => response.json())
        .then((data) => {
          const children = data._embedded.orgUnits;
          this.children = children;
          this.statusChild = true;
          console.log(children);
        })
        .finally((this.loading = false));
    } else {
      this.statusChild = false;
    }
  };

}
