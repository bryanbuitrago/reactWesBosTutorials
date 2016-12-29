import React from 'react';
import { formatPrice } from '../helpers';
class Fish extends React.Component {
  render() {
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
    const index = this.props.index;
    return(
    <li className="menu-fish">
      <img src={details.image} alt={details.name} /> {/*details references const details on line 5*/}
      <h3 className="fish-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
      </h3>
      <p>{details.desc}</p>
      <button onClick={() => this.props.addToOrder(index)}
        disabled={!isAvailable}>{buttonText}
      </button>
    </li>
    )
  }
}

export default Fish;
