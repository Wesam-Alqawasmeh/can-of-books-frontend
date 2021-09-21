import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./components/BestBooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import { Alert } from "react-bootstrap";
import axios from "axios";
import UpdateModal from "./components/UpdateModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      description: "",
      status: "",
      email: "",
      id: "",
      error: "",
      isError: false,
      showModal: false,
    };
  }
  //******************************* GET *************************************
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/books`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };

  //******************************* Post *************************************

  handleTilte = (e) => {
    this.setState({
      title: e.target.value,
    });
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

  //******************************* Delete *************************************

  handleDelete = (id) => {
    let bookId = id;
    let config = {
      method: "DELETE",
      baseURL: process.env.REACT_APP_BACKEND_SERVER,
      url: `/books/${bookId}`,
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

  //***************************************** Update **********************************

  modalHandle = (title, description, status, email, id) => {
    this.setState({
      showModal: true,
      title: title,
      description: description,
      status: status,
      email: email,
      id: id,
    });
    console.log("works");
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    let bookId = this.state.id;
    let config = {
      method: "PUT",
      baseURL: process.env.REACT_APP_BACKEND_SERVER,
      url: `/books/${bookId}`,
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
        console.log('respone works')
      })
      .catch((error) => {
        this.setState({
          error: error,
          isError: true,
        });
      });
  };

  //******************************* Render *************************************

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
        {this.state.isError && (
          <Alert variant="primary">{this.state.error}</Alert>
        )}
        <BestBooks
          data={this.state.data}
          handleDelete={this.handleDelete}
          modalHandle={this.modalHandle}
        />

        <UpdateModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          email={this.state.email}
          id={this.state.id}
          handleUpdate={this.handleUpdate}
          handleTilte={this.handleTilte}
          handleDes={this.handleDes}
          handleMail={this.handleMail}
          handleStatus={this.handleStatus}
        />

        <Footer />
      </>
    );
  }
}

export default App;
