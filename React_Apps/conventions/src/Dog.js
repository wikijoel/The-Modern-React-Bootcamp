import React, { Component } from 'react';
import doggo from './puff.jpg'
import './Dog.css';

class Dog extends Component {
    render(){
        return (
            <div className="Dog">
                <h1>DOGGO</h1>
                <img className="Dog-img" src={doggo} />
            </div>
        )
    }
}

export default Dog; 