const Connexion = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  render() {
    return `
    <h1 class="text-center"> Se connecter</h1>
    <form class="mt-5 text-center m-auto w-50">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Adresse Mail</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Mot de passe</label>
      <input type="password" class="form-control" id="password">
    </div>
    <a href="http://127.0.0.1:9090/student-moncompte">
        <button type="submit" class="btn btn-primary">Se connecter</button>
    </a>
  </form>`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Connexion;
