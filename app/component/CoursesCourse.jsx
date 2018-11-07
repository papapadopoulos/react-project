import React from "react";
import { Grid, Col, Button, Navbar, NavItem, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoursesCourse = ({ title, image, price, bookable, duration, dates, id }) => {

    return (
        <div>
            <Navbar className="noPadding">
                <Navbar.Header>
                    <Navbar.Brand  >
                        {title}
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <Image height="180" src={image} />
            <p>Price: {price}| Bookable: {String(bookable)}</p>
            <p>Duration: {duration}</p>
            <p>Dates: {dates.start_date} - {dates.end_date}</p>
            <Link to={`/course/${id}`}>
                <Button >View</Button>
            </Link>
        </div>
    );
};



export default CoursesCourse;