import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import vendingMachineImg from "./VendingMachine.png";
import Message from "./Message";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}>
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
          <h1>
            <Link to='/soda'>Soda</Link>
          </h1>
          <h1>
            <Link to='/chips'>Chips</Link>
          </h1>
          <h1>
            <Link to='/beer'>Beer</Link>
          </h1>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;