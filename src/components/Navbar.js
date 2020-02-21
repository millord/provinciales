import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark navbar-expand-lg fixed-top">
      <a href="#" className="navbar-brand" style={{ color: "#1fd7e0" }}>
        Geo - Provinciales
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <a style={{ color: "white" }} className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a style={{ color: "white" }} className="nav-link" href="#">
              Mapa
            </a>
          </li>
          <li className="navbar-item">
            <a style={{ color: "white" }} className="nav-link" href="#">
              Equipos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
