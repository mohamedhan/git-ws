import React from 'react';
import './App.css';

import MohamedComponent from "./mohamedComponenet.js"

import Mouadhcomponent from './mouadhcomponent';
import AnasComponent from './anasComponent';
import AnasComponentDEUX from './AnasComponentDEUX';

function App() {
  return (
    <div className="App">
     <Mouadhcomponent/>
      <AnasComponent/>
      <AnasComponentDEUX/>
     <MohamedComponent />

    </div>
  );
}

export default App;
