import React from "react";
import Hero from "./Hero";
import Badge from "./Badge";

import LastCourses from "./LastCourses";
import axios from "axios";
import ApiData from "./Api/ApiData";
import Stats from "./Stats";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero />

        <ApiData url="stats">{data => <Stats stats={data} />}</ApiData>
        <ApiData url="courses">
          {data => <LastCourses courses={data} />}
        </ApiData>
      </div>
    );
  }
}

export default Home;
