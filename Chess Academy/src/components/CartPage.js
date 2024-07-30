import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartPage.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}><DeleteOutlinedIcon/></button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div className="cart-total">Total: ${total}</div>
          <button className="buy-now">Buy Now</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
