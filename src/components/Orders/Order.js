import OrderItem from './OrderItem';

const Order = (props) => {
    // console.log(props);
    console.log(props);

    return (
        <div>
            {props.items.map((el,ind) => {
                return <OrderItem
                    name={el.name}
                    price={el.price}
                    quantity={el.quantity}
                    path={el.path} />
            })}
        </div>
    );
}

export default Order;