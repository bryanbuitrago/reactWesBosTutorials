import React from 'react';

class Header extends React.Component {
  render() {
    console.log(this);
    return (
       <header className = "top">
        <h1>
          Catch
          <span className = "ofThe">
          <span className = "ofThe">of</span>
          <span className = "ofThe">the</span>
          </span>
          Day
          </h1>
        <h3 className = "tagline">{this.props.tagline}</h3> {/* With Variables we use this.props.<property>*/}
        {/*<h3 className = "tagline">Fill Me In</h3> // Without variables*/}
        </header>
      )
  }
}

export default Header; // Exports the Header Component
