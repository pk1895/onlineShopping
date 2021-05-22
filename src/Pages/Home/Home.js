import { useSelector } from 'react-redux';
import classes from "./Home.module.css";
import MainSection from '../../components/Sections/MainSection';
const Home = () => {

    const shopData = useSelector((state) => state.shop.data);
    const data = useSelector((state) => state.cart);
    console.log(data);

    return (
        <div className={classes['home-menu']}>
            {shopData.map(el => {
                return (<MainSection
                    key={el.id}
                    title={el.title}
                    imageUrl={el.imageUrl}
                    linkUrl={el.linkUrl}
                    items={el.items}
                />);
            })}
        </div>
    );
}

export default Home;