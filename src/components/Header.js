import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "brown",
          height: "100px",
          paddingTop: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>Can of Books</h1>
      </div>
    );
  }
}

export default Header;
