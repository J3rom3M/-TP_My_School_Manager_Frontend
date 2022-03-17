const HomePage = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  render() {
    return `<h1 class="text-center mt-2">My school Managment</h1>
        <div class="m-auto text-center mt-5">
          <a href="http://127.0.0.1:9090/inscription">
            <button type="button" class="btn btn-info btn-lg" id="inscription">S'inscrire</button>
          </a>
          <a href="http://127.0.0.1:9090/connexion">
            <button type="button" class="btn btn-success btn-lg" id="connexion">Se connecter</button>
          </a>
        </div>`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default HomePage;
