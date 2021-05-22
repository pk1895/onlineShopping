import { useDispatch } from 'react-redux';
import classes from './SubSectionItems.module.css';
import { cartActions } from '../../store/cart-slice';

const SubSectionItems = (props) => {
    const dispatch = useDispatch();
    const { id, name, price, path, imageUrl } = props.item;

    const addItemToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                name,
                price,
                path,
                imageUrl
            })
        );
    }

    return (
        <div className={classes["collection-item"]}>
            <div
                className={classes.image}
                style={{ backgroundImage: `url(${props.item.imageUrl})` }} />

            <div className={classes["collection-footer"]}>
                <span className={classes.name}> {props.item.name} </span>
                <span className={classes.price}> {props.item.price} </span>
            </div>

            <button className={classes['custom-button']} onClick={addItemToCart} inverted> ADD TO CART</button>
        </div>
    );
}

export default SubSectionItems;