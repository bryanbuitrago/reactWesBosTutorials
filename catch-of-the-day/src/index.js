// let's go!
import React from 'react'; // imports react from react
import { render } from 'react-dom'; //Imports the render method from the DOM package
import './css/style.css' // Imports css from the Web Pack.
import StorePicker from './components/StorePicker';
import App from './components/App'

render(<App/>, document.querySelector('#main')); // renders the Component

// // 1 page way of Components
// // Component begins
// // Every Component needs at least a method to be a Component I.E. render() on line 8
// class StorePicker extends React.Component {
//   render(){
//     return <p>Hello World</p>
//   }
// }
// //
// render(<StorePicker/>, document.querySelector('#main')); //renders the Component
