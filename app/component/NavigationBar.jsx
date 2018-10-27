import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Code.Hub Dashboard</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/courses">
          <NavItem eventKey={1}>Courses</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight={true}>
        <LinkContainer to="/create/course">
          <NavItem eventKey={2}>Add new course</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
