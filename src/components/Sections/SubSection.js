import classes from './SubSection.module.css';
import { useHistory } from 'react-router';
import SubSectionItems from './SubSectionItems';

const SubSection = (props) => {

    const history = useHistory();
    const subsection = history.location.state;

    const content = subsection.items.map(el => (
        <div className={classes['collection-preview']}>
            <h1 className={classes.title}>{el.title}</h1>
            <div className={classes.preview}>
                {el.subItems
                    .filter((item, ind) => ind < 4)
                    .map((item) => (
                        <SubSectionItems key={item.id} item={item} />
                    ))}
            </div>
        </div>
    ))

    return (
        <div className={classes['collections-overview']}>
            {content}
        </div>
    );
}

export default SubSection;