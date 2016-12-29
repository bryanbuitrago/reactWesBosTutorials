import React from 'react';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
  render() {
    const { details } = this.props;
    return(
    <li className="menu-fish">
      <img src={details.image} alt={details.name} /> {/*details references const details on line 5*/}
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button>Add To Order</button>
    </li>
    )
  }
}

export default Fish;
