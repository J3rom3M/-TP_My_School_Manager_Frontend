const Header = class {
  constructor(status) {
    this.status = status;
  }

  renderHeaderDashboard() {
    return `<div class="row container-fluid pt-3 pb-3 bg-danger text-dark">
      <div class="col-3">
        <div class="row">
          <div class="col-4">
            <img class="border border-2 border-dark rounded-circle" width="70" height="70" src="https://cdn-icons.flaticon.com/png/512/4202/premium/4202843.png?token=exp=1642513352~hmac=6bddae82a161ad6bd846402b3a69870c" alt="image">
          </div>
          <div class="col-8 pt-1">
            <div class="row">
              <span class="fs-5">jerome MAGNIER</span>
            </div>
            <div class="row">
              <span class="fs-6">Heure : 14:36:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  render() {
    return `
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand">PeopleStats</a>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-light" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="http://127.0.0.1:9090/home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Search</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>`;
  }
};

export default Header;
