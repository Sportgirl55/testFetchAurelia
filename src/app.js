import "./main.scss";
import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
		// Без флага pushState в адресах придётся добавлять решётку:
		// localhost:8080/#/fetch-get
		// вместо
		// localhost:8080/fetch-get
		config.options.pushState = true;
		config.map([
			{
				// Маршрут для корня и /fetch-get
				route: ['', 'fetch-get'],
				name: 'fetch-get',
				// Указываем полный путь к компоненту, который
				// будет отображаться внутри <router-view> для
				// данного маршрута
				moduleId: PLATFORM.moduleName('components/input/fetch-get')
			},
			{
				// Маршрут для /tab3
				route: ['tab3'],
				name: 'tab3',
				moduleId: PLATFORM.moduleName('components/tab3/tab3')
			}
		]);

    this.router = router;
		
		// Можно ещё указать компонент, который будет отображаться
		// для неизвестных адресов
		// config.mapUnknownRoutes(PLATFORM.moduleName('components/unknown/unknown'));
	}
}
