import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Code.Hub Dashboard</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
        <Link to="/courses">Courses</Link>
        </NavItem>
      </Nav>
      <Nav pullRight={true}>
        <NavItem eventKey={2} href="#">
          Add new course
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
