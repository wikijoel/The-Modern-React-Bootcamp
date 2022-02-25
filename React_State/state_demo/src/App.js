import React, { Component } from 'react';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrockenClick2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrokenClick />
        <BrokenClick2 />
      </div>
    );
  }
}

export default App;
