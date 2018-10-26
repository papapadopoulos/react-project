import React from "react";
import { Modal, Button } from "react-bootstrap";

class Prompt extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: props.show,
      action: props.action,
      actionTitle: props.actionTitle,
      title: props.title,
      description: props.description
    };
  }

  handleHide = () => {
    this.setState({ show: false });
  };

  handleAction = () => {
    this.state.action();
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.description}
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={this.handleAction}>{this.state.actionTitle}</Button>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Prompt;
