import classes from './MainSection.module.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainSection = (props) => {

    const history = useHistory();
    const shopData = useSelector((state) => state.shop.data);

    const onClickListItem = (linkUrl) => {
        
        const [subData] = shopData.filter(el => {
            return el.linkUrl === linkUrl;
        });

        history.push({
            pathname: linkUrl,
            state: subData 
        });
    }

    return (
        <div className={classes['menu-item']} onClick={onClickListItem.bind(null, props.linkUrl)}>
            <div
                className={classes['background-image']}
                style={{ backgroundImage: `url(${props.imageUrl})` }} />
            <div className={classes.content}>
                <h1 className={classes.h1}>{props.title.toUpperCase()}</h1>
                <span className={classes.span}>SHOP NOW</span>
            </div>
        </div>
    );
}
export default MainSection;