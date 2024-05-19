import React from 'react';
import logoImage from '../paginas/Pictures/PURA_ACQUA-removebg-preview.png';
import	{ Link } from 'react-router-dom';
import Login from '../paginas/Login';


const Navbar = () => {
  return (
    <div id="nav">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img id="logo" src={logoImage} alt="Logotipo do Pura Acqua" style={{ maxWidth: "200px", height: "auto" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb- mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link Home" aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link sobre" href="#sobre">Sobre</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link contato" href="#contato">Contato</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <Link to="/Login">
                  <button className="btn btn-outline-success btn-custom" type="button" onClick={() => window.location.href='login.html'}>Login</button>
                </Link>
                <button className="btn btn-outline-success btn-custom" type="button" onClick={() => window.location.href='cadastro.html'}>Cadastre-se</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
