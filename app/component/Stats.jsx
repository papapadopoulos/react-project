import React from "react";
import { Nav, NavItem, Grid, Col, Row } from "react-bootstrap";
import Badge from "./Badge";

const Stats = ({ stats, isLoading }) => {
  return (
    <Nav justified={true}>
      {stats.map(stat => (
        <NavItem key={stat.id}>
          <Badge title={stat.title} bubble={stat.amount} />
        </NavItem>
      ))}
    </Nav>
  );
};
export default Stats;
