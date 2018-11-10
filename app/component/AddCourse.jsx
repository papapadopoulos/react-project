import React from "react";
import CourseForm from "./Forms/CourseForm";
import axios from "axios";
import ApiData from "./Api/ApiData";
import { Jumbotron } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class AddCourse extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      title: "",
      start_date: "",
      end_date: "",
      early_bird: "",
      normal: "",
      open: false,
      selectedInstructors: [],
      duration: "",
      imagePath: ""
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
    const { selectedInstructors } = this.state;
    if (isChecked) {
      selectedInstructors.push(id);
    } else {
      selectedInstructors.splice(selectedInstructors.indexOf(id), 1);
    }
    this.setState({
      selectedInstructors
    });
  };

  renderRedirect = id => {
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

    const { selectedInstructors: instructors } = this.state;

    const { title, description, open, imagePath, duration } = this.state;
    axios
      .post("http://localhost:3000/courses", {
        title,
        description,
        open,
        imagePath,
        price,
        dates,
        instructors,
        duration
      })
      .then(response => {
        this.setState({ redirect: true, savedId: response.data.id });
      })
      .catch(error => {
        console.error(error);
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
                buttonText="Add Course"
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
