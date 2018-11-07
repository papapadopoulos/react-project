import React from "react";
import axios from "axios";
import { PageHeader, Grid, Col, Row, Panel } from "react-bootstrap";
import CoursesCourse from "./CoursesCourse";


class Courses extends React.Component {
    constructor({ props }) {
        super(props);
        this.state = { courses: [] , hasError:false};
        // this.state = {isFeaching: true};
    }

    componentDidMount() {
        axios.get("http://localhost:3000/courses")
        .then(res => {
            const courses = res.data;
            this.setState({ courses });
        })
        .catch((error) => {
            this.setState({hasError:true});
          })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
        const { courses } = this.state;

        return (
            <div>
                <PageHeader>
                    Courses
        <small>
                        (all)
            </small>
                </PageHeader>
                <Grid>
                    <Row>
                        {courses.map(course => (
                            <Col key = {course.id} xs={4} md={4}>
                                <Panel>
                                    <CoursesCourse title={course.title}
                                        image={course.imagePath}
                                        price={course.price.normal}
                                        bookable={course.open}
                                        duration={course.duration}
                                        dates={course.dates}
                                        id={course.id}
                                    />
                                </Panel>

                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div >
        );
    }
}

export default Courses;