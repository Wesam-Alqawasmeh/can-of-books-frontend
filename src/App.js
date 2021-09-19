import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './components/BestBooks';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <BestBooks/>
        <Footer/>
      </>
    )
  }
}

export default App
