import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./components/BestBooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import { Alert } from "react-bootstrap";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      description: "",
      status: "",
      email: "",
      error: "",
      isError: false,
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/books`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };

  handleTilte = (e) => {
    this.setState({
      title: e.target.value,
    });
    console.log(this.state.title);
  };
  handleDes = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  handleMail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "POST",
      baseURL: process.env.REACT_APP_BACKEND_SERVER,
      url: "/books",
      data: {
        title: this.state.title,
        description: this.state.description,
        status: this.state.status,
        email: this.state.email,
      },
    };
    axios(config)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          isError: true,
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <BookForm
          handleTilte={this.handleTilte}
          handleDes={this.handleDes}
          handleMail={this.handleMail}
          handleStatus={this.handleStatus}
          handleSubmit={this.handleSubmit}
        />
        {this.state.isError && 
          <Alert  variant='primary'>
            {this.state.error}
          </Alert>
        }
        <BestBooks data={this.state.data} />
        <Footer />
      </>
    );
  }
}

export default App;
