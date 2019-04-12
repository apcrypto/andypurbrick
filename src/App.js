import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      </div>
    );
  }
}

export default App;
