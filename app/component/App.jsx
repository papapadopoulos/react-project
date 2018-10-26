import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Course from "./Course";
import Home from "./Home";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <NavigationBar />

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={Course} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
