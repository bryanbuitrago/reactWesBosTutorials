// let's go!
import React from 'react'; // imports react from react
import { render } from 'react-dom'; //Imports the render method from the DOM package
import './css/style.css' // Imports css from the Web Pack.
import {BrowserRouter, Match, Miss} from 'react-router';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={StorePicker} />
          <Match pattern="/store/:storeId" component={App} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    )
}
render(<Root/>, document.querySelector('#main')); // renders the Component

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
