import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div className="container">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="navbar-brand"> Справочник сотрудников</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                  <NavLink className="nav-link" to={{ pathname: `/employee/`, fromDashboard: false}}>Сотрудники</NavLink>
                  <NavLink className="nav-link" to={{ pathname: `/department/`, fromDashboard: false}}>Отделы</NavLink>
                </Nav>
        </Navbar>
    </div>
  );
}

export default NavBar;
