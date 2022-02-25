import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 99,
            gameOver: false
        };
    }
    render(){
        return <h1>Your Score is: {this.state.score}</h1>
    }
}

export default Game;