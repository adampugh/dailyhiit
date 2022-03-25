import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WorkoutType } from '../types';
import Card from './Card';
import ScrollCards from './ScrollCards';

const WeekWorkouts = ({ weeklyWorkouts }) => {
    const [weeklyWorkoutsArray, setWeeklyWorkoutsArray] = useState([]);

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
                <h3>This Week&apos;s Workouts</h3>
                {weeklyWorkoutsArray && <ScrollCards Component={Card} cards={weeklyWorkoutsArray} />}
            </div>
        </div>
    );
};

export default WeekWorkouts;
