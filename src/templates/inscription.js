import axios from 'axios';

const Inscription = class {
  constructor() {
    this.el = document.querySelector('#app');
  }

  render() {
    return `<h1 class="text-center">Inscription</h1>
      <form class="w-50 text-center m-auto" id="myform">
        <div class="mb-3">
          <label for="firstname" class="form-label">Prénom</label>
          <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Nom</label>
          <input type="text" class="form-control" id="lastname">
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age</label>
          <input type="text" class="form-control" id="age">
        </div>
        <div class="mb-3">
          <label for="promo" class="form-label">Promo</label>
          <input type="text" class="form-control" id="promo">
        </div>
        <div class="mb-3">
          <label for="specialite" class="form-label">Specialité</label>
          <input type="text" class="form-control" id="specialite">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>`;
  }

  run() {
    this.el.innerHTML = this.render();
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = document.getElementById('myform');
      const data = new FormData(form);
      const firstname = document.getElementById('firstanme');
      const lastname = document.getElementById('lastname');
      data.append('firstname', firstname);
      data.append('lastname', lastname);
      axios.post({
        method: 'POST',
        url: 'http://localhost:3000/api/signup',
        data
      }).then((res) => {
      // handle error
      // eslint-disable-next-line no-console
        console.log(res);
      }).catch((err) => { throw err; });
    });
  }
};

export default Inscription;
