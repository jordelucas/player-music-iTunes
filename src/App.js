import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './App.css'

import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logomarca"/>
      
      <div className="content">
        <h1>iTunes - Music </h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <button><ChevronRightIcon /></button> 
      </div>

    </div>
  );
}

export default App;
