import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Course from "./Course";
import Courses from "./Courses";
import Home from "./Home";
import Input from "./Forms/Input";


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
              <Route path="/create/course" component={Input} />
              {/* <Route component={Page404} /> */}
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
