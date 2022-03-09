import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Soda.css';
import sodaImg from './Soda.png';
import Message from "./Message";

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
          <img src={sodaImg} alt='Coca Cola' />
          <Message>
            <h1>Epic Soda</h1>
            <h3>But dont drink that much</h3>
            <p>Or your stomach will hurt</p>
            <h1><Link to='/'>Return</Link></h1>
          </Message>

          <img src={sodaImg} alt='Coca Cola' />
      </div>
    );
  }
}

export default Soda;