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

class Course extends React.Component {
  constructor({ props, match }) {
    super(props);
    this.match = match;
    this.state = { isFetching: true };
  }

  togglePrompt = () => {
    console.log("togglePromot");
    this.setState({
      showPrompt: !this.state.showPrompt
    });
  };

  renderPrompt = () => {
    if (this.state.showPrompt) {
      return (
        <Prompt
          show={this.state.showPrompt}
          togglePrompt={() => this.togglePrompt()}
          action={() => this.handleDelete(this.state.course.id)}
          actionTitle="Delete"
          title={`Deleting ${this.state.course.title}...`}
          description="Are you sure you want to delete this course? Seems quite useful to me!"
        />
      );
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleDelete = id => {
    {
      console.log("delete handled");
    }
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
        console.log(instructorsPromises);
        return Promise.all(instructorsPromises);
      })
      .then(res => {
        console.log(res);
        this.setState({
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
                <Button bsStyle="primary">Edit</Button>
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
      return <div>Fetching...</div>;
    }
  }
}

export default Course;
