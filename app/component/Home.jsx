import React from "react";
import Hero from "./Hero";
import Badge from "./Badge";

import LastCourses from "./LastCourses";
import { Nav, NavItem } from "react-bootstrap";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      courses: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/stats").then(res => {
      const stats = res.data;
      this.setState({ stats });
    });

    axios.get("http://localhost:3000/courses").then(res => {
      const courses = res.data;
      this.setState({ courses });
    });
  }

  render() {
    const { stats, courses } = this.state;

    return (
      <div>
        <Hero />
        <Nav justified={true}>
          {stats.map(stat => (
            <NavItem key={stat.id}>
              <Badge key={stat.id} title={stat.title} bubble={stat.amount} />
            </NavItem>
          ))}
        </Nav>
        <LastCourses courses={courses} />
      </div>
    );
  }
}

export default Home;
