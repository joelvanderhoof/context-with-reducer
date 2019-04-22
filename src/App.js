import React, { Component } from 'react';

import AppContext from './components/Context';
import NameSection from './components/NameSection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppContext.AppContextProvider>
          <NameSection />              
      </AppContext.AppContextProvider>
      </div>
    );
  }
}

export default App;
