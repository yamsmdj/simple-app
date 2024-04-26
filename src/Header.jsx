const Header = () => {

  const seed = "yamine.mdj@gmail.com"

  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
            style={{height: "60px", width: "60px"}}
             src={"https://api.dicebear.com/8.x/adventurer/svg?seed=" + seed} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Recettes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Parametre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
