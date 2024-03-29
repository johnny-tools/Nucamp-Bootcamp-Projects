import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";
import {NavLink} from 'react-router-dom';
import NucampLogo from "../app/assets/img/logo.png";
import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={NucampLogo} alt="nucamp logo" className="float-start" />
        <h1 className="mt-1">Nucamp</h1>
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" to="/">
            <i className='fa fa-home fa-lg' /> Home
          </NavLink>
        </NavItem>
        <NavLink className="nav-link" to="/directory">
            <i className='fa fa-list fa-lg' /> Directory
        </NavLink>
        <NavItem>
          <NavLink className="nav-link" to="/about">
              <i className='fa fa-info fa-lg' /> About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/contact">
              <i className='fa fa-address-card fa-lg' /> Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/"></NavLink>
        </NavItem>
      </Nav>
      <UserLoginForm />
    </Navbar>
  );
};

export default Header;
