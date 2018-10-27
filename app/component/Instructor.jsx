import React from "react";
import {Link} from "react-router-dom";

const Instructor = ({instructor}) => {
  return (
    <div>
      
      <h4>{instructor.name.first} {instructor.name.last} <small>({instructor.dob})</small></h4>
      <p>Email: <a href={`mailto:${instructor.email}`}>{instructor.email}</a> | <a href={instructor.linkedin}>LinkedIn</a></p>
      <p>{instructor.bio}</p>
    </div>
  );
};

export default Instructor;
