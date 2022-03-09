import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chips from './Chips';
import Soda from './Soda';
import Beer from './Beer';
import VendingMachine from './VendingMachine';
import NavBar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={ <VendingMachine /> }/>
          <Route exact path='/chips' element={ <Chips /> }/>
          <Route exact path='/beer' element={ <Beer /> }/>
          <Route exact path='/soda' element={ <Soda /> }/>
        </Routes>
      </div>
    );
  }
}

export default App;

