import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop inverse>
          <Navbar.Header>
            <Navbar.Brand>
                <NavLink to="/">React App</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              
                <NavItem eventkey={1} componentClass='span'>
                 <NavLink to="/About"> About</NavLink>
                </NavItem>
                <NavItem eventkey={2} componentClass='span'>
                <NavLink  id="packLink" to="/Packages">Packages</NavLink>
                </NavItem>
              <NavDropdown
                eventkey={3}
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <MenuItem eventkey={3.1}>Option 1</MenuItem>
                <MenuItem eventkey={3.2}>Option 2</MenuItem>
                <MenuItem divider />
                <MenuItem eventkey={3.3} />
              </NavDropdown>
              </Nav>
              <Nav pullRight>
              <NavItem eventkey={4} componentClass='span' >
              <NavLink to="/Login"> Login</NavLink>
              </NavItem>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
