import classes from './CartButton.module.css';

const CartButton = (props) => {
    let cartCss = props.inverted ?[classes['custom-button'], classes.inverted]: classes['custom-button'];

    return (
        <button className={cartCss.join(' ')}>{props.children}</button>
    );
}

export default CartButton;