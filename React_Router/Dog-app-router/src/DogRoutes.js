import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class DogRoutes extends Component {
    // findDog(name) {
    //     return this.props.dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
    // }
    render() {
        const getDog = props => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetails {...props} dog={currentDog} />
        };

        return (
            <Routes>
                <Route exact path='/dogs' element={<DogList dogs={this.props.dogs} />} />
                <Route exact path='/dogs/:name' element={(getDog)} />
                <Route path='*' element={<Navigate to='/dogs' />} />
            </Routes>
        );
    }
}

export default DogRoutes;