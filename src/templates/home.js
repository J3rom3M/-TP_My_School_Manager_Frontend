import Header from './header';

const Home = class {
  constructor() {
    this.el = document.querySelector('#app');
    this.header = new Header(true);
  }

  render() {
    return `
      ${this.header.render()}
      <main id="market" class="container-fluid">
        <section class="market--content-1 row pt-3 pb-5 bg-light">
          <div class="col-2"></div>
          <div class="col-8">
            <h2 class="display-5">Lorem Ipsum</h2>
            <hr />
            <p class="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis non mi quis accumsan. Etiam eget erat sed nunc auctor ornare. Suspendisse ullamcorper diam eget magna vestibulum hendrerit.</p>
            <div class="d-grid gap-2 mt-2">
              <button type="button" class="btn btn-primary">Accéder gratuitement au dashboard</button>
            </div>
          </div>
          <div class="col-2"></div>
        </section>
        <section class="market--content-1 row pt-3 pb-5 mt-5 mb-5" >
          <div class="col-2"></div>
          <div class="col-8">
            <div class="row">
              <div class="col-4">
                <img class="img-fluid" src="https://cdn-icons.flaticon.com/png/512/4202/premium/4202843.png?token=exp=1642513352~hmac=6bddae82a161ad6bd846402b3a69870c" alt="image">
              </div>
              <div class="col-8">
                <h4 class="display-6">Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis non mi quis accumsan. Etiam eget erat sed nunc auctor ornare. Suspendisse ullamcorper diam eget magna vestibulum hendrerit.</p>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </section>
        <section class="market--content-1 row pt-3 pb-5 mt-5 mb-5" >
          <div class="col-2"></div>
          <div class="col-8">
            <div class="row">
              <div class="col-8">
                <h4 class="display-6">Lorem Ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis non mi quis accumsan. Etiam eget erat sed nunc auctor ornare. Suspendisse ullamcorper diam eget magna vestibulum hendrerit.</p>
              </div>
              <div class="col-4">
                <img class="img-fluid" src="https://cdn-icons.flaticon.com/png/512/868/premium/868311.png?token=exp=1642513447~hmac=2a3a797cb55de52bf55e4527a4199b5d" alt="image">
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </section>
      </main>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
