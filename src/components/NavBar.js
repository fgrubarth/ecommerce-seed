import React from "react";
import '../App.css';
import CardWidget from "./CardWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import logoShiva from "../imagenes/logo-shiva.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function NavbarComponent(){
    return(
<div>
  <nav className="navbar bg-white ancho">
    <div className="container-fluid d-flex justify-content-center ">
      <Link  to="/" className="navbar-brand pe-5"><img src={logoShiva} className="logo" alt="logo shivaseed" /></Link>
    </div>
  </nav>
  <nav className="navbar bg-success">
    <div className="container justify-content-center">
      <button type="button" className="btn btn-success">
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
