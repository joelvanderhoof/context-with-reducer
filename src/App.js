import React from 'react';

import appContext from 'Context';
import NameSection from 'components/NameSection';

import './App.css';

const App  = () => {
  return (
    <appContext.ContextProvider>
      <div className="App">
          <NameSection />              
      </div>
    </appContext.ContextProvider>
  );
}

export default App;
