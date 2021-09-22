import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BestBooks from "./components/BestBooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import UpdateModal from "./components/UpdateModal";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      name: "",
      profile_email: "",
      img_src: "",
      description: "",
      status: "",
      email: "",
      id: "",
      error: "",
      isError: false,
      showModal: false,
      profileShowModal: false,
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
      profileShowModal: false,
    });
  };

  handleUpdate = () => {
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
        console.log("respone works");
      })
      .catch((error) => {
        this.setState({
          error: error,
          isError: true,
        });
      });
  };

  //******************************* Profile Modal *************************************

  profileModalHandle = (name, email, src) => {
    this.setState({
      name: name,
      profile_email: email,
      img_src: src,
      profileShowModal: true,
    });
  };

  //******************************* Render *************************************

  render() {
    return (
      <>
        <Header />
        {/* <Router>
          <Switch>
            <Route exact path="/"> */}
        {this.props.auth0.isAuthenticated ? (
          <>
            <div
              style={{
                position: "relative",
                left: "35px",
                bottom: "80px",
              }}
            >
              <LogoutButton />
              <Button
                onClick={() => {
                  this.profileModalHandle(
                    `${this.props.auth0.user.name}`,
                    `${this.props.auth0.user.email}`,
                    `${this.props.auth0.user.picture}`
                  );
                }}
                variant="warning"
                style={{
                  height: "50px",
                  width: "150px",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Profile
              </Button>
              <Profile
                name={this.state.name}
                email={this.state.profile_email}
                src={this.state.img_src}
                profileShowModal={this.state.profileShowModal}
                closeModal={this.closeModal}
              />
            </div>
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
          </>
        ) : (
          <LoginButton />
        )}
        {/* </Route>
            <Route path="/profile"> */}

        {/* </Route>
          </Switch>
        </Router> */}

        <Footer />
      </>
    );
  }
}

export default withAuth0(App);
