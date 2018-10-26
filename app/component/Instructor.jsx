import React from "react";

const Instructor = ({instructor}) => {
  return (
    <div>
      <h3>Instructors</h3>
      <h4>{instructor.email}</h4>
    </div>
  );
};

export default Instructor;
