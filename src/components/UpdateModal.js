import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Form, Row, Button, Col } from "react-bootstrap";

class UpdateModal extends Component {
  render() {
    return (
      <Modal
        size="lg"
        show={this.props.showModal}
        onHide={this.props.closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handleUpdate}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                onChange={this.props.handleTilte}
              >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.title} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                onChange={this.props.handleDes}
              >
                <Form.Label> Description </Form.Label>
                <Form.Control type="text" value={this.props.description} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                onChange={this.props.handleMail}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={this.props.email} />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                onChange={this.props.handleStatus}
              >
                <Form.Label>status</Form.Label>
                <Form.Control type="text" value={this.props.status} />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              style={{ margin: "auto", display: "block" }}
            >
              Update book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateModal;
