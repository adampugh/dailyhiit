import ScrollCards from './ScrollCards';
import CardInfo from './CardInfo';

import { weeklyWorkouts } from '../utils/data';

// const filteredWorkouts = workouts => {

//     return {
//         upperBody: workouts.filter(({ category }) => category.includes('upperBody')),
//         lowerBody:  workouts.filter(({ category }) => category.includes('upperBody')),
//         fullBody:  workouts.filter(({ category }) => category.includes('upperBody'))
//     }
// }

const WorkoutCategory = () => {
    return (
        <>
            <div>
                <div className='container'>
                    {/* <div className='pl-32 pr-0 ml-auto'> */}
                    <h2 className='font-heading pt-10'>UPPER BODY</h2>
                    <ScrollCards cards={weeklyWorkouts} Component={CardInfo} />
                </div>
            </div>
            <div className='bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70'>
                <div className='container'>
                    <h2 className='font-heading pt-10'>LOWER BODY</h2>
                    <ScrollCards cards={weeklyWorkouts} Component={CardInfo} />
                </div>
            </div>
        </>
    );
};

export default WorkoutCategory;
