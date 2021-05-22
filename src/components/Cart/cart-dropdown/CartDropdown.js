import React, { Fragment } from 'react';
import CartItem from './CartItem';
import classes from './CartDropdown.module.css';
import { useSelector } from 'react-redux';

const CartDropdown = (props) => {
    const { items } = useSelector((state) => state.cart);

    return (
        <div className={classes['cart-dropdown']}>
            {items.length !== 0 && <div className={classes['cart-items']}>
                {items.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>}
            {items.length !== 0 && <button onClick={props.onGoToCheckout}>GO TO CHECKOUT</button>}
            {items.length === 0 && <p className={classes['empty-message']}>Cart Empty</p>}
        </div>

    );
}

export default CartDropdown;