import axios from 'axios';
import Search from './search';

const Moncompte = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.search = new Search();
  }

  renderItem(data) {
    const {
      firstname,
      lastname,
      age,
      promo,
      speciality,
      email
    } = data;
    return `<h1 class="text-center mt-2"> Mon Compte</h1>
        <table class="mt-4 table table-primary w-75 m-auto">
          <tr class="table-primary">
            <th> Nom </th>
            <th> Prenom </th>
            <th> Age</th>
            <th> Promo </th>
            <th> Specialité</th>
            <th> Mon adresse mail </th>
          </tr>
          <tr>
            <td class="table-primary"> ${lastname} </td>
            <td> ${firstname}</td>
            <td>${age}</td>
            <td>${promo}</td>
            <td>${speciality}</td>
            <td>${email}</td>
          </tr>
        </table>
        ${this.search.render()}
       `;
  }

  render(data) {
    return data.map((student) => this.renderItem(student));
  }

  run() {
    axios.get('http://localhost:3000/users/show/622a343e917cbcbb7689191f')
      .then((response) => {
        const dataResults = response.data.student;
        this.el.innerHTML = this.render(dataResults);
      })
      .catch((error) => {
        // handle error
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
};

export default Moncompte;
