import React from "react";
import { Grid, Col, Row, Navbar, NavItem, Image } from "react-bootstrap";

const CoursesCourse = ({ title, image, price, bookable, duration, dates }) => {

    return (
        <Grid>
            <Row>
                <Col xs={4} md={4}>

                    <Navbar className="noPadding">
                        <Navbar.Header>
                            <Navbar.Brand >
                                {title}
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>
                    <Image width="200" src={image} />
                    <p>Price: {price}| Bookable: {String(bookable)}</p>
                    <p>Duration: {duration}</p>
                    <p>Dates: {dates.start_date} - {dates.end_date}</p>
                </Col>
            </Row>
        </Grid>
    );
};



export default CoursesCourse;