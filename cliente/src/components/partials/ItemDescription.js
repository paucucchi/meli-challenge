import '../../assets/styles/ItemDescription.scss';
import shippingIcon from '../../assets/images/shipping-icon-large.png';
import placeholder from '../../assets/images/placeholder.png';
import { parsePrice } from '../../utils/parser';

function ItemDescription({ title, price, picture, condition, shipping, sold, description }) {
  // Currency format
  const { currency, amount, decimals } = parsePrice(price);
  // Translate condition
  condition = (condition === 'used') ? 'Usado' : 'Nuevo';

  return (
    <div className="row">
      <div className="column-left">
        <img className="item-picture" src={picture || placeholder} alt="Producto" />
        <h4>Descripción del producto</h4>
        <p>{description}</p>
      </div>
      <div className="column-right">
        <small>{condition} - {sold} vendidos</small>
        <h1>{title}</h1>
        <h2>{currency} {amount}<sup>{decimals}</sup></h2>
        {shipping === true ? <img className="shipping-icon" src={shippingIcon} alt="Free Shipping" /> : ""}
        <button className="primary-btn">Comprar</button>
      </div>
    </div>
  );
}

export default ItemDescription;
