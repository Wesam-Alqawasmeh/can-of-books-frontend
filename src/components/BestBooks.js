
import React, { Component } from "react";
import { Carousel,Alert } from "react-bootstrap";

class BestBooks extends Component {
  
  render() {
    return (
      <>
        {this.props.data.length > 0 && (
          <Carousel fade style={{width:"800px", height:"auto", margin:"50px auto"}}>
            {this.props.data.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption style={{ fontSize:"30px", fontWeight:"bold"}}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                    <p>{item.email}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}

        {this.props.data.length === 0 && (
          <Alert variant={'warning'}>
          book collection is empty!!
        </Alert>
        )}
      </>
    );
  }
}

export default BestBooks;
