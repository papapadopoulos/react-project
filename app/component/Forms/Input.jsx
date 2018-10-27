import React from "react";
import Paragraph from "./Paragraph";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="container"
          style={{ marginTop: "50px", maxWidth: "1000px" }}
        >
          <label>
            Name:&nbsp;
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Paragraph text={this.state.value} />
      </div>
    );
  }
}

export default Input;
