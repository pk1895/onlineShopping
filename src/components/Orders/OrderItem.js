import classes from "./OrderItem.module.css";


const OrderItem = (props) => {
    return (
        <div className={classes.OrderItem}>            
            <p><b>Product:  {props.name}</b></p>
            <span><b>Price: </b> {props.price}</span>
            <span><b>Quantity: </b> {props.quantity}</span>
            <span><b>Section: </b> {props.path.split('/').join('-').toUpperCase()}</span>
        </div>
    );
}

export default OrderItem;