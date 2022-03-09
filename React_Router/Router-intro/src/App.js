import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/'>
            About
            </NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>
            Dog
            </NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>
            Contact
            </NavLink>
        </nav>
        
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/dog' element={<Dog />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;

/* 
react-router-dom v6 +

Switch -> Routes
component={} -> element={</>}

*/