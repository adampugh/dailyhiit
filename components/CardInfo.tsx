import { Workout } from '../types';
import Card from './Card';
import Info from './Info';

const CardInfo = (workout: Workout) => {
    return (
        <>
            <Card {...workout} />
            <Info {...workout} />
        </>
    );
};

export default CardInfo;
