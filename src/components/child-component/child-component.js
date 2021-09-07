import { bindable } from 'aurelia-framework';
import classes from "./child-component.module.scss";

const params = {
	method: "GET",
	headers: {
		Authorization: `Basic ${btoa("superuser:3lB4cuzF")}`,
	}
};

export class ChildComponent {
	@bindable orgUnit;
	classes = classes;
	loading = false;
	children = null;
	
	loadChildren(orgUnit) {
		this.loading = true;
		fetch(orgUnit._links.children.href.split('{')[0], params)
			.then(response => response.json())
			.then(data => this.children = data._embedded.orgUnits)
			.finally(() => this.loading = false);
			componentHandler.upgradeAllRegistered();
	}

	reload(text) {
		console.log(text)
	}
}
