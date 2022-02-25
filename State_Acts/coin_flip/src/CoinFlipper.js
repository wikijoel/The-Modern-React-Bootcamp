import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps= {
        coins: [
            { side: 'heads', imgSrc: "http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg" },
            { side: 'tails', imgSrc: "http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                ...st,
                currentCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads +(newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails +(newCoin.side === "tails" ? 1 : 0)
            };
        });
    }
    handleClick(e) {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinFlipper">
                <h2>Flip The Coin</h2>
                {this.state.currentCoin && <Coin info={this.state.currentCoin}/>}
                <button onClick={this.handleClick}>Flip</button>
                <p>Flips: {this.state.nFlips} </p>
                <p>Heads: {this.state.nHeads} </p>
                <p>Tails: {this.state.nTails} </p>
            </div>
        )
    }
}

export default CoinFlipper;