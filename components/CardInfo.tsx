import { WorkoutType } from '../types';
import Card from './Card';
import Info from './Info';

const CardInfo = (workout: WorkoutType) => {
    return (
        <>
            <Card {...workout} />
            <Info {...workout} />
        </>
    );
};

export default CardInfo;
