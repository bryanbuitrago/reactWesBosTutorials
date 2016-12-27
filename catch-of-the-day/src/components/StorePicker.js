import React from 'react';

class StorePicker extends React.Component {
  render(){
    // JSX allows us to write html right inside Javascript. Community Standard
    return (
      // Here we can write all our html
      <form className="store-selector">
      <h2> Please Enter A Store </h2>
      <input type="text" required placeholder="Store Name"/>
      <button type="submit"> Visit Store </button>
      </form>
      )

    // Uncomment line 8 to display one way of writing html inside Javascript
    // return React.createElement('p', {className: 'Testing'}, 'I Love you');
    // Uncomment line 10 to display another way of writing html inside Javascript.
    // return <p>Hello World</p>
  }
}

export default StorePicker; //exports the StorePicker Component
