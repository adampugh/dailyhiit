import { useEffect, useState } from 'react';
import { WorkoutType, Workout } from '../types';
import Card from './Card';
import ScrollCards from './ScrollCards';

const WeekWorkouts = ({ weeklyWorkouts }: { weeklyWorkouts: Workout[] }) => {
    const [weeklyWorkoutsArray, setWeeklyWorkoutsArray] = useState<WorkoutType | []>([]);

    useEffect(() => {
        const workouts = [];
        for (let key in weeklyWorkouts) {
            workouts[key] = weeklyWorkouts[key];
        }
        setWeeklyWorkoutsArray(workouts);
    }, [weeklyWorkouts]);

    return (
        <div className='bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 pt-10 pb-10'>
            <div className='container'>
                <h3 className='font-heading'>THIS WEEK&apos;S WORKOUTS</h3>
                {weeklyWorkoutsArray && <ScrollCards Component={Card} cards={weeklyWorkoutsArray} showDay={true} />}
            </div>
        </div>
    );
};

export default WeekWorkouts;
