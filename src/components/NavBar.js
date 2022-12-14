import React from "react";
import '../App.css';
import CardWidget from "./CardWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoShiva from "../imagenes/logo-shiva.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";


function NavbarComponent({greeting}){
    return(
<div>
  <h1 className="d-flex justify-content-center text-success" >{greeting}</h1>
    <nav className="navbar bg-light ">
      <div className="container-fluid justify-content-end pe-5">
        <a className="navbar-brand fs-6 fw-bold" href="#">CONTACTO</a>
        <a className="navbar-brand fs-6 fw-bold" href="#">CREAR CUENTA</a>
        <a className="navbar-brand fs-6 fw-bold" href="#">INICIAR SESION</a>
      </div>
    </nav>
    <nav className="navbar bg-white ancho">
      <div class="container-fluid d-flex justify-content-center ">
        <Link  to="/" className="navbar-brand pe-5"><img src={logoShiva} className="logo" alt="logo shivaseed" /></Link>
        <form className="d-flex align-items-center "  role="search">
          <input className="form-control me-2 h-45" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-outline-success h-45" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
    
      <nav className="navbar bg-success">
        <div className="container justify-content-center">
          <button type="button" class="btn btn-success">
            <Link to="/" className="navbar-brand text-white">Home</Link>
          </button>
          <div className="pe-5">
            <Dropdown>
              <Dropdown.Toggle className="navbar-brand text-white" variant="success" id="dropdown-basic">
                Productos
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item><Link to="/category/Silver River" className="text-decoration-none"> Silver River Seeds</Link></Dropdown.Item>
                <Dropdown.Item>< Link to="/category/R-Kiem" className="text-decoration-none">R-Kiem Seeds</Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/category/Delicious" className="text-decoration-none">Delicious Seeds</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
            <CardWidget />
          
        </div>
      </nav>
    
    
</div>
    );
};

export default NavbarComponent
