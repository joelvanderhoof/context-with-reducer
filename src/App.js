import React, { Component } from 'react';

import AppContext from './components/Context';
import NameSection from './components/NameSection';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppContext.AppContextProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <NameSection />              
      </AppContext.AppContextProvider>
      </div>
    );
  }
}

export default App;
