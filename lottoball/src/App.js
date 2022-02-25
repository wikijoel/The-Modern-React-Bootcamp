import React, { Component } from 'react';
import Ball from './Ball';
import Lottery from './Loterry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
    </div>
  );
}

export default App;