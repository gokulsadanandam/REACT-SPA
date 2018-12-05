import React, { Component } from 'react';
import './App.css';
// import Head from './Header/Header'
import Section from './Section/Section'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section/>
        <Footer />
      </div>
    );
  }
}

export default App;
  