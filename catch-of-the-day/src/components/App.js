import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    // getinitialstate or initialstate
    this.state = {
      fishes: {},
      order: {}
    };
  }
  addFish(fish){
    // update the state
    const fishes = {...this.state.fishes}; // It will take every item from the object and spread it into this fishes state
    // add in a new fish
    const timestamp = Date.now();
    fishes['fish-${timestamp}'] = fish;
    // set state or which state would you like to update
    this.setState({fishes: fishes});
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header age="5000" cool={true} tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
      )
  }
}
export default App; // Exports the App Component
