import { Link } from 'react-router-dom';
import '../../assets/styles/Item.scss';
import shippingIcon from '../../assets/images/shipping-icon.png';
import placeholder from '../../assets/images/placeholder.png';
import { parsePrice } from '../../utils/parser';

function Item({ id, title, price, picture, shipping, state }) {
  // Currency format
  const { currency, amount, decimals } = parsePrice(price);

  return (
    <Link to={`/items/${id}`}>
      <div className="item-box">
        <img className="item-picture" src={picture || placeholder} alt="Producto" />
        <div className="text-box">
          <div className="item-title">
            <h2>{currency} {amount}<sup>{decimals}</sup></h2>
            {shipping === true ? <img className="shipping-icon" src={shippingIcon} alt="Free Shipping" /> : ""}
            <h1>{title}</h1>
          </div>
          <span className="small-text">{state}</span>
        </div>
      </div>
    </Link>
  );
}

export default Item;
