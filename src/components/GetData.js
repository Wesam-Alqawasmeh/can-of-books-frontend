import React, { Component } from "react";

class GetData extends Component {
  componentWillUnmount = (props) => {
    this.props.callProfile(this.props.name, this.props.email, this.props.src);
  };

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default GetData;
