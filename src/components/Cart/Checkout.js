import React, { Fragment, useState } from "react";
import Modal from '../../components/UI/Modal';
import classes from './Checkout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useHistory } from "react-router";

const Checkout = (props) => {
    const { items, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const userData = useSelector((state) => state.auth.userData.userId);
    const history = useHistory();

    const addItem = (item) => {
        const { id, name, price, path, imageUrl } = item;

        dispatch(cartActions.addItem({
            id,
            name,
            price,
            path,
            imageUrl
        }));
    }

    const removeItem = (id) => {
        dispatch(cartActions.removeItem(id));
    }

    const orderHandler = () => {
        setIsLoading(true);
        fetch('https://online-shopping-c8f55-default-rtdb.firebaseio.com/order.json', {
            method: 'POST',
            body: JSON.stringify({
                items,
                UserData: userData
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            setIsLoading(false);
            console.log(response);
            dispatch(cartActions.clearCart());
            alert('Order placed!');
            props.onCancel();
            history.push('/home');

        }).catch((error) => {
            setIsLoading(false);
            // props.onCancel();
            console.log(error);
        });
    }

    return (
        <Modal onClick={props.onCancel}>
            <Fragment>
                {!isLoading && <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalPrice}</span>
                </div>}
                {!isLoading && <ul className={classes['cart-items']}>
                    {items.map(el => {
                        return (
                            <li className={classes['cart-item']}>
                                <div>
                                    <h2>{el.name}</h2>
                                    <div className={classes.summary}>
                                        <span className={classes.price}>{el.price}</span>
                                        <span className={classes.price}>X {el.quantity}</span>
                                    </div>
                                </div>
                                <div className={classes.actions}>
                                    <button onClick={addItem.bind(null, el)}>+</button>
                                    <button onClick={removeItem.bind(null, el.id)}>-</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>}
                {!isLoading && <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onCancel}>Cancel</button>
                    {items.length !== 0 && <button className={classes.button} onClick={orderHandler}> Confirm</button>}
                </div>}
                {isLoading && <LoadingSpinner />}
            </Fragment>
        </Modal>
    );
}

export default Checkout;