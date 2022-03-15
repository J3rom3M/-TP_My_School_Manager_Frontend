import HomePage from './templates/home';

import './index.scss';

const Controller = class {
  routes() {
    const urlPath = window.location.pathname.split('/');

    if (!urlPath[1]) {
      const homePage = new HomePage();

      homePage.run();
    }
  }

  run() {
    this.routes();
  }
};

const controller = new Controller();

controller.run();
