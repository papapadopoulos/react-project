import React from "react";
import {
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Checkbox,
  Button,
  Radio
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
  price,
  early_bird,
  normal,
  title,
  bookable,
  instructors
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
          onChange={handleChange}
        />

        <FieldGroup
          id="duration"
          name="duration"
          type="text"
          label="Duration"
          placeholder="Duration"
          onChange={handleChange}
        />

        <FieldGroup
          id="image_path"
          name="image_path"
          type="text"
          label="Image Path"
          placeholder="Image Path"
          onChange={handleChange}
        />

        <h5>
          <b>Bookable</b>
        </h5>
        <Checkbox
          id="bookable"
          name="bookable"
          label="Bookable"
          onChange={handleCheckboxChange}
          checked={bookable}
        >
          Bookable
        </Checkbox>

        <h5>
          <b>Instructors</b>
        </h5>
        <FormGroup>
          {instructors.map(instructor => (
            <Checkbox name={instructor.id} id="instructors" key={instructor.id} onChange={handleInstructorChange}>
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
          />
        </FormGroup>
        <h3>Dates</h3>

        <FieldGroup
          id="start_date"
          name="start_date"
          type="text"
          label="Start Date"
          placeholder="Start Date"
          onChange={handleChange}
        />

        <FieldGroup
          id="end_date"
          name="end_date"
          type="text"
          label="End Date"
          placeholder="End Date"
          onChange={handleChange}
        />

        <h3>Price</h3>
        <FieldGroup
          id="early_bird"
          name="early_bird"
          type="text"
          label="Early Bird"
          placeholder="Enter course title"
          onChange={handleChange}
        />

        <FieldGroup
          id="normal"
          name="normal"
          type="text"
          label="Normal"
          placeholder="Enter course title"
          onChange={handleChange}
        />

        {/* <FieldGroup
        id="formControlsEmail"
        type="email"
        label="Email address"
        placeholder="Enter email"
      /> */}
        {/* <FieldGroup id="formControlsPassword" label="Password" type="password" />
      <FieldGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />

      <Checkbox checked readOnly>
        Checkbox
      </Checkbox>
      <Radio checked readOnly>
        Radio
      </Radio>

      <FormGroup>
        <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{" "}
        <Checkbox inline>3</Checkbox>
      </FormGroup>
      <FormGroup>
        <Radio name="radioGroup" inline>
          1
        </Radio>{" "}
        <Radio name="radioGroup" inline>
          2
        </Radio>{" "}
        <Radio name="radioGroup" inline>
          3
        </Radio>
      </FormGroup>

      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">select</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelectMultiple">
        <ControlLabel>Multiple select</ControlLabel>
        <FormControl componentClass="select" multiple>
          <option value="select">select (multiple)</option>
          <option value="other">...</option>
        </FormControl>
      </FormGroup>

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Static text</ControlLabel>
        <FormControl.Static>email@example.com</FormControl.Static>
      </FormGroup> */}

        <Button className="pull-right" bsStyle="primary" type="submit">Add Course</Button>
      </form>
    </div>
  );
};

export default CourseForm;
