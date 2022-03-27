// @ts-nocheck
import Loader from './Loader';
import ScrollCards from './ScrollCards';
import CardInfo from './CardInfo';
import { Workout } from '../types';

const Category = ({ categoryWorkouts, title }: { categoryWorkouts: Workout[]; title: string }) => {
    return (
        <div className='container'>
            <h2 className='font-heading pt-10'>{title}</h2>
            {categoryWorkouts.length === 0 ? <Loader /> : <ScrollCards cards={categoryWorkouts} Component={CardInfo} />}
        </div>
    );
};

export default Category;
