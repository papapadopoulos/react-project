import React from "react";
import CourseForm from "./Forms/CourseForm";
import axios from "axios";
import ApiData from "./Api/ApiData"
import { Jumbotron } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class AddCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      title: "",
      price: {
        early_bird: "",
        normal: ""
      },
      bookable: false,
      selectedInstructors: new Map()
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  handleInstructorChange = event => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prevState => ({
      selectedInstructors: prevState.selectedInstructors.set(id, isChecked)
    }));
  };

  renderRedirect = (id) => {
    if (this.state.redirect) {
      return <Redirect to={`/course/${id}`} />;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const price = {
      early_bird: this.state.early_bird,
      normal: this.state.normal
    };

    const dates = {
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };

    const instructors = [];
    this.state.selectedInstructors.forEach(
      (value, key, map) => value && instructors.push(key)
    );

    // this.setState({price});
    const { title, description, bookable:open, image_path } = this.state;
    axios
      .post("http://localhost:3000/courses", {
        title,
        description,
        open,
        image_path,
        price,
        dates,
        instructors
      })
      .then(response => {
        this.setState({ redirect: true, savedId: response.data.id });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.renderRedirect(this.state.savedId)}
        <ApiData url="instructors">
          {data => (
            <Jumbotron>
              <CourseForm
                headerTitle="Add Course"
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleInstructorChange={this.handleInstructorChange}
                instructors={data}
                {...this.state}
              />
            </Jumbotron>
          )}
        </ApiData>
      </div>
    );
  }
}

export default AddCourse;
