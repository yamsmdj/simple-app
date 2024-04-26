import { NavLink } from "react-router-dom";

const Header = () => {

  const seed = "yamine.mdj@gmail.com"

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}>
            <img
            style={{height: "60px", width: "60px"}}
             src={"https://api.dicebear.com/8.x/adventurer/svg?seed=" + seed} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recette">
                  Recettes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/parametre">
                  Parametre
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
