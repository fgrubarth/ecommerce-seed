import React from "react";
import '../App.css';
import CardWidget from "./CardWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoShiva from "../imagenes/logo-shiva.png"


function NavBar({greeting}){
    return(
<div>
  <h1 class="d-flex justify-content-center text-success" >{greeting}</h1>
    <nav class="navbar sticky-top bg-light">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#"><img src={logoShiva} className="logo" alt="logo shiva" /></a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-success fw-bold"  aria-current="page" href="#">Catalogo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-success fw-bold"  aria-current="page" href="#">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-success fw-bold"  aria-current="page" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <CardWidget />
            </a>
        </div>
      </nav>
    </nav>
</div>
    );
};

export default NavBar
