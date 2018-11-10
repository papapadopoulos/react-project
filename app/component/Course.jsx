import React from "react";
import axios from "axios";
import {
  PageHeader,
  Image,
  Grid,
  Row,
  Col,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Instructor from "./Instructor";
import Prompt from "./Modals/Prompt";
import Loader from "./Loader";
import EditCourse from "./EditCourse";

class Course extends React.Component {
  constructor({ props, match }) {
    super(props);
    this.match = match;
    this.state = { isFetching: true };
  }

  togglePrompt = () => {
    this.setState({
      showPrompt: !this.state.showPrompt
    });
  };

  toggleEditCourse = () => {
    this.setState({
      showEditCourse: !this.state.showEditCourse
    });
  };

  renderPrompt = () => {
    if (this.state.showPrompt) {
      return (
        <Prompt
          showButtons={true}
          show={this.state.showPrompt}
          togglePrompt={() => this.togglePrompt()}
          action={() => this.handleDelete(this.state.course.id)}
          actionTitle="Delete"
          title={`Deleting ${this.state.course.title}...`}
        >
          {() =>
            "Are you sure you want to delete this course? Seems quite useful to me!"
          }
        </Prompt>
      );
    }
  };

  updateCourse = (course) => {
    this.componentDidMount();
  }

  renderEditCourse = () => {
    if (this.state.showEditCourse) {
      return (
        <Prompt
          showButtons={false}
          show={this.state.showEditCourse}
          togglePrompt={() => this.toggleEditCourse()}
          title={`Editing ${this.state.course.title}...`}
        >
          {() => (
            <EditCourse
              {...this.state.course}
              handleHide={this.toggleEditCourse}
              updateCourse={this.updateCourse}
              selectedInstructors={this.state.instructors.map(i => i.id)}
              early_bird={this.state.course.price.early_bird}
              normal={this.state.course.price.normal}
              start_date={this.state.course.dates.start_date}
              end_date={this.state.course.dates.start_date}
            />
          )}
        </Prompt>
      );
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleDelete = id => {
    axios.delete(`http://localhost:3000/courses/${id}`).then(() => {
      this.setState({
        redirect: true
      });
    });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/courses/${this.match.params.courseId}`)
      .then(res => {
        this.setState({
          course: res.data
        });
        let instructorsPromises = [];

        instructorsPromises = res.data.instructors.map(ins =>
          axios.get(`http://localhost:3000/instructors/${ins}`)
        );
        return Promise.all(instructorsPromises);
      })
      .then(res => {
        this.setState({
          course: {
            ...this.state.course,
            instructors: res.map(r => r.data)
          },
          instructors: res.map(r => r.data),
          isFetching: false
        });
      });
  }
  render() {
    const { course, isFetching, instructors } = this.state;

    if (!isFetching) {
      return (
        <div>
          {this.renderRedirect()}
          {this.renderPrompt()}
          {this.renderEditCourse()}
          <Grid>
            <Row>
              <Col xs={12} md={12}>
                <PageHeader>
                  {course.title}
                  <small> ({course.id})</small>
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <div className="courseImageContainer">
                  <Image
                    responsive
                    src={course.imagePath}
                    className="courseImage"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                {" "}
                {`Price: ${course.price.normal}€`}{" "}
              </Col>
              <Col xs={6} md={6} className="floatRight">
                {" "}
                {`Duration: ${course.duration}`}{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                Bookable: {course.open && "\u2713"}
              </Col>
              <Col xs={6} md={6} className="floatRight">
                {" "}
                {`Dates: ${course.dates.start_date} - ${
                  course.dates.end_date
                }`}{" "}
              </Col>
            </Row>
            <Row>
              <Col
                xs={12}
                md={12}
                dangerouslySetInnerHTML={{ __html: course.description }}
              />
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <Button
                  onClick={() => this.toggleEditCourse()}
                  bsStyle="primary"
                >
                  Edit
                </Button>
                <Button onClick={() => this.togglePrompt()} bsStyle="danger">
                  Delete
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <h3>Instructors</h3>
              </Col>
              {instructors.map(instructor => (
                <Col key={instructor.id} xs={12} md={6}>
                  <Instructor key={instructor.id} instructor={instructor} />
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      );
    } else {
      return (
        <div>
          <Loader />
        </div>
      );
    }
  }
}

export default Course;
