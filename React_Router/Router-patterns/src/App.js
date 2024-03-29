import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Food from './Food';
import Meal from './Meal';
import Navbar from './Navbar';
import FoodSearch from './FoodSearch'

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* THIS VERSION USING COMPONENT WORKS AND IS SIMPLER */}
        {/* BUT IT WILL NOT WORK IF YOU NEED TO PASS ADDITIONAL PROPS*/}
        {/* <Route exact path='/food/:name' scomponent={Food} /> */}

        {/* THIS VERSION USING RENDER IS LESS CLEAN BUT MORE EXPLICIT */}
        {/* AND YOU CAN PASS IN YOUR OWN ADDITIONAL PROPS */}
        <Navbar />
        <Routes>
          <Route
            exact
            path='/food/:name'
            render={routeProps => <Food {...routeProps} />}
          />
          <Route
            exact
            path='/food/:foodName/drink/:drinkName'
            component={Meal}
          />
          {/* <Route
            exact
            path='/'
            render={routeProps => <FoodSearch {...routeProps}/>}
          /> */}
          <Route exact path='/' component={FoodSearch} />
          <Route render={() => <h1>ERROR NOT FOUND!!!</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;