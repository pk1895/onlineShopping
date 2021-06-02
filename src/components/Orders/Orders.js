import { useState, useEffect } from "react";
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useSelector } from 'react-redux';
import Order from './Order';
import { useHistory } from "react-router";
import Card from "../UI/Card";

const Orders = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [ordersData, setOrdersData] = useState([]);
    const userId = useSelector((state) => state.auth.userData.userId);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch('https://online-shopping-c8f55-default-rtdb.firebaseio.com/order.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedElement = [];
            for (let i in responseData) {
                if (responseData[i].UserData == userId) {
                    loadedElement.push({
                        id: i,
                        items: responseData[i].items
                    });
                }
            }
            setOrdersData(loadedElement);
            console.log(loadedElement);
        }
        fetchData().catch((error) => {
            alert(error.message);
        });
        fetchData().finally(() => {
            setIsLoading(false);
        });

    }, []);

    let orderList;
    if (ordersData.length !== 0) {
        orderList = ordersData.map((el, ind) => {
            return <Card>
                <h3>Order No: {ind + 1}</h3>
                <Order id={el.id} items={el.items} />
            </Card>
        });
    } else {
        orderList = <p style={{ textAlign: 'center', color: 'white' }}>No Ordes Found</p>
    }

    return (
        <div>
            { isLoading && <LoadingSpinner />}
            { !isLoading && orderList}

        </div>
    );
}

export default Orders;