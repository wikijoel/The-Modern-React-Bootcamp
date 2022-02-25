import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ["blue", "purple", "red", "black"]
    }
    render(){
        const boxes = Array.from({lenght: this.props.numBoxes}).map(() => (
            <Box colors={this.props.allColors} />
        ));
        return <div className='BoxContainer'>{boxes}</div>
    }
}

export default BoxContainer;