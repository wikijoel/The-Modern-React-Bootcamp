import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Beer.css';
import Message from "./Message";

class Beer extends Component {
  render() {
    return (
      <div
        className='Beer'
        style={{
          backgroundImage:
            "url(https://c.tenor.com/meM9lz__N1QAAAAC/homer-beer.gif)"
        }}
      >
        <img src='https://c.tenor.com/RPNoOOImaRwAAAAC/homer-simpson-homer-dance.gif' />
        <Message>
          <h1>Beer Wujuju</h1>
          <Link to='/'>Go Back</Link>
        </Message>
        <img src='https://c.tenor.com/RPNoOOImaRwAAAAC/homer-simpson-homer-dance.gif' />
      </div>
    );
  }
}

export default Beer;