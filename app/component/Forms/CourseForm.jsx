import React from "react";
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Checkbox,
  Button
} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const CourseForm = ({
  headerTitle,
  handleSubmit,
  handleChange,
  handleCheckboxChange,
  handleInstructorChange,
  duration,
  imagePath,
  price,
  early_bird,
  normal,
  start_date,
  end_date,
  title,
  open,
  instructors,
  selectedInstructors,
  description,
  buttonText
}) => {
  return (
    <div>
      <h2>{headerTitle}</h2>
      <form onSubmit={handleSubmit}>
        <FieldGroup
          id="title"
          name="title"
          type="text"
          label="Title"
          placeholder="Enter course title"
          value={title}
          onChange={handleChange}
        />

        <FieldGroup
          id="duration"
          name="duration"
          type="text"
          label="Duration"
          placeholder="Duration"
          value={duration}
          onChange={handleChange}
        />

        <FieldGroup
          id="imagePath"
          name="imagePath"
          type="text"
          label="Image Path"
          placeholder="Image Path"
          value={imagePath}
          onChange={handleChange}
        />

        <h5>
          <b>Bookable</b>
        </h5>
        <Checkbox
          id="open"
          name="open"
          label="Bookable"
          onChange={handleCheckboxChange}
          checked={open}
        >
          Bookable
        </Checkbox>

        <h5>
          <b>Instructors</b>
        </h5>
        <FormGroup>
          {instructors.map(instructor => (
            <Checkbox
              name={instructor.id}
              id="instructors"
              key={instructor.id}
              onChange={handleInstructorChange}
              checked={
                selectedInstructors.length>0 &&
                selectedInstructors.filter(si => si == instructor.id).length>0
              }
            >
              {instructor.name.first} {instructor.name.last}
            </Checkbox>
          ))}
        </FormGroup>

        <FormGroup controlId="description">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            onChange={handleChange}
            name="description"
            componentClass="textarea"
            placeholder="Descriptipon"
            value={description}
          />
        </FormGroup>
        <h3>Dates</h3>

        <FieldGroup
          id="start_date"
          name="start_date"
          type="text"
          label="Start Date"
          placeholder="Start Date"
          value={start_date}
          onChange={handleChange}
        />

        <FieldGroup
          id="end_date"
          name="end_date"
          type="text"
          label="End Date"
          placeholder="End Date"
          value={end_date}
          onChange={handleChange}
        />

        <h3>Price</h3>
        <FieldGroup
          id="early_bird"
          name="early_bird"
          type="text"
          label="Early Bird"
          placeholder="Early bird price"
          value={early_bird}
          onChange={handleChange}
        />

        <FieldGroup
          id="normal"
          name="normal"
          type="text"
          label="Normal"
          placeholder="Normal price"
          value={normal}
          onChange={handleChange}
        />
        <Button className="pull-right" bsStyle="primary" type="submit">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default CourseForm;
