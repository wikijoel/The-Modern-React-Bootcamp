import React, { Component } from 'react';
import Die from './Die';
import RollDice from './RollDice';
import './App.css';

function App() {
  return (
    <div className="App">
      <RollDice face='five' />
    </div>
  );
}

export default App;