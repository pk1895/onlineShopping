import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useSelector } from 'react-redux';

const HeaderCartButton = (props) => {
    const quantity = useSelector((state) => state.cart.totalQuantity);

    return <button className={classes.button} onClick={props.onHandle}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span className={classes.badge}>{quantity}</span>
    </button>
}

export default HeaderCartButton;