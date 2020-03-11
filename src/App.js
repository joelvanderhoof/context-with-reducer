import React from 'react';

import { ContextProvider } from 'Context';
import NameSection from 'components/NameSection';

import './App.css';

const App  = () => {
  return (
    <ContextProvider>
      <div className="App">
          <NameSection />              
      </div>
    </ContextProvider>
  );
}

export default App;
