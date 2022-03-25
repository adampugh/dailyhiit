import Loader from './Loader';
import ScrollCards from './ScrollCards';
import CardInfo from './CardInfo';

const Category = ({ categoryWorkouts, title }) => {
    return (
        <div className='container'>
            <h2 className='font-heading pt-10'>{title}</h2>
            {categoryWorkouts.length === 0 ? <Loader /> : <ScrollCards cards={categoryWorkouts} Component={CardInfo} />}
        </div>
    );
};

export default Category;
