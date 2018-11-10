import React from "react";
import { Navbar, Table, Button, NavItem, Nav } from "react-bootstrap";
import TableRow from "./TableRow";

const LastCourses = ({courses}) => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Last 5 Courses</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Table responsive bordered>
        <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.slice(Math.max(courses.length - 5, 0)).map(course => (
            <TableRow key={course.id} {...course} />
          ))}
        </tbody>
      </Table>
      <Nav pullRight={true}>
        <NavItem eventKey={2} href="#">
          <Button>View All</Button>
        </NavItem>
      </Nav>
    </div>
  );
};

export default LastCourses;
