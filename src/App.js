import React, { Component } from 'react';
import Header from './components/header/header';
import Contents from './components/content/content';
import Footer from './components/footer/Footer';
import * as Fetch from './fetch/Fetch';
import './App.css';

class App extends Component {

  render() {
    Fetch.loadScript();
    return (
      <div className="App">
        <Header/>
        <Contents />
        <Footer/>
      </div>
    );
  }
}

export default App;
