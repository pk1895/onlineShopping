import React from 'react';

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const { imageUrl, name, quantity, price } = props.item;

  return (
    <div className={classes["cart-item"]}>
      <img className={classes.img} src={imageUrl} alt="cart item" />
      <div className={classes["item-details"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{quantity} x ₹{price}</span>
      </div>
    </div>
  );
}

export default CartItem