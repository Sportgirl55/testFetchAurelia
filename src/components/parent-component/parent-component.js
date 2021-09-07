import p from "./parent-component.module.scss";


const params = {
	method: "GET",
	headers: {
		Authorization: `Basic ${btoa("superuser:3lB4cuzF")}`,
	}
};

export class ParentComponent {
	class = p;
	loading = false;
	main = null;

	attached () {
		const url = 'https://pochta-wfm-release-qa.goodt.me/api/v1/org-units/main';
		
		this.loading = true;
		fetch(url, params)
			.then(response => response.json())
			.then(data => this.main = data._embedded.orgUnits)
        // .then(data => console.log(this.main[0].name))
			.finally(() => this.loading = false);
      
	}
  
}
