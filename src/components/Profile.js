import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";


export class Profile extends Component {
  // componentDidMount=()=>{
  //     this.props.callApi()
  // }
  render() {
    return (
      <>
      <Modal
        size="lg"
        show={this.props.profileShowModal}
        onHide={this.props.closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Profile Informations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: "18rem", margin:"auto"}}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.email}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Modal.Body>
      </Modal>
        
      </>
    );
  }
}

export default Profile;
