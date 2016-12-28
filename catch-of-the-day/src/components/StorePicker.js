import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {

  goToStore() {
    event.preventDefault();
    console.log('You changed the URL');
    // First grab the text from the box
    const storeId = this.storeInput.value
    // Second transition from / to /store/:storeId
    this.context.router.transitionTo('store/${storeId}');
  }
  render(){
    // JSX allows us to write html right inside Javascript. Community Standard
    return (
      // Here we can write all our html
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      <h2> Please Enter A Store </h2>
      <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
      <button type="submit"> Visit Store </button>
      </form>
      )

    // Uncomment line 8 to display one way of writing html inside Javascript
    // return React.createElement('p', {className: 'Testing'}, 'I Love you');
    // Uncomment line 10 to display another way of writing html inside Javascript.
    // return <p>Hello World</p>
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker; //exports the StorePicker Component
