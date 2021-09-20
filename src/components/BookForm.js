import React, { Component } from "react";
import {Form , Row ,Button ,Col} from "react-bootstrap"

class BookForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" onChange={this.props.handleTilte}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter book title" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" onChange={this.props.handleDes}>
            <Form.Label> Description </Form.Label>
            <Form.Control type="text" placeholder="description" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" onChange={this.props.handleMail}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" onChange={this.props.handleStatus}>
            <Form.Label>status</Form.Label>
            <Form.Control type="text" placeholder="status" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" style ={{margin:"auto",display:"block"}}>
          add book 
        </Button>
      </Form>
    );
  }
}

export default BookForm;
