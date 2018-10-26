import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Course from "./Course";
import Courses from "./Courses";
import Home from "./Home";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Router>
          <div>
            <NavigationBar />
            <div className="mainContainer">
              <Route exact path="/" component={Home} />
              <Route path="/course/:courseId" component={Course} />
              <Route path="/courses" component={Courses} />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
