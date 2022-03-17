import './index.scss';
import HomePage from './templates/home';
import Inscription from './templates/inscription';
import Connexion from './templates/connexion';
import Moncompte from './templates/moncompte';

const Controller = class {
  routes() {
    const urlPath = window.location.pathname.split('/');

    if (urlPath[1] === 'inscription') {
      const inscription = new Inscription();

      inscription.run();
    }

    if (urlPath[1] === 'connexion') {
      const inscription = new Connexion();

      inscription.run();
    }

    if (urlPath[1] === 'student-moncompte') {
      const moncompte = new Moncompte();

      moncompte.run();

      return;
    }

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
