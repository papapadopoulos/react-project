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
import Instructor from "./Instructor";

class Course extends React.Component {
  constructor({ props, match }) {
    super(props);
    this.match = match;
    this.state = { isFetching: true };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/courses/${this.match.params.courseId}`)
      .then(res => {
        const course = res.data;
        this.setState({
          course: course
         
        });
        axios
          .get(`http://localhost:3000/instructors/${course.instructors[0]}`)
          .then(res2 => {
            const inst = res2.data;
            this.setState({
              instructor: inst,
              isFetching: false
            });
          });
      });
  }

  render() {
    const { course, isFetching, instructor } = this.state;

    if (!isFetching) {
      return (
        <div>
          <PageHeader>
            {course.title}
            <small>{course.id}</small>
          </PageHeader>
          <div className="courseImageContainer">
            <Image responsive src={course.imagePath} className="courseImage" />;
          </div>
          <div className="courseInfoContainer">
            <Grid>
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
                  <Button bsStyle="danger">Delete</Button>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Instructor instructor={instructor} />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      );
    } else {
      return <div>Fetching...</div>;
    }
  }
}

export default Course;
