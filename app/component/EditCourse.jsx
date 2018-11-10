import React from "react";
import ApiData from "./Api/ApiData";
import CourseForm from "./Forms/CourseForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditCourse extends React.Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    this.setState({ ...this.props });
    console.log(this.state);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
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
      selectedInstructors: selectedInstructors
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
    // this.state.selectedInstructors.forEach(
    //   (value, key, map) => value && instructors.push(key)
    // );

    // this.setState({price});
    console.log(instructors);
    const { title, description, open, imagePath, duration } = this.state;
    axios
      .put(`http://localhost:3000/courses/${this.state.id}`, {
        title,
        description,
        duration,
        open,
        imagePath,
        price,
        dates,
        instructors
      })
      .then(response => {
        this.props.handleHide();
        this.props.updateCourse(response.data);
        console.log(this.props)
        // this.setState({ redirect: true, savedId: response.data.id });
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
            <CourseForm
              {...this.state}
              selectedInstructors={this.state.selectedInstructors}
              instructors={data}
              early_bird={this.state.early_bird}
              normal={this.state.normal}
              start_date={this.state.start_date}
              end_date={this.state.start_date}
              handleChange={this.handleChange}
              handleCheckboxChange={this.handleCheckboxChange}
              handleInstructorChange={this.handleInstructorChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        </ApiData>
      </div>
    );
  }
}

export default EditCourse;
