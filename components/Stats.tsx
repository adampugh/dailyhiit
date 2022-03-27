import Link from 'next/link';
import { format } from 'date-fns';

import { useUser } from '../context/UserContext';
import { getDayIndex } from '../utils/dates';
import { formatSeconds } from '../utils/formatSeconds';

import Card from './Card';
import DefaultCard from './DefaultCard';
import StatsChart from './StatsChart';
import { Workout } from '../types';
import { useEffect } from 'react';

// completedWorkouts: 0,
// totalWorkoutTime: 0,
// currentStreak: { lastWorkout: '', addedToday: false, streakCount: 0 },
// workoutGraphData: {
//     monday: { date: 0, totalTime: 0 },
//     tuesday: { date: 0, totalTime: 0 },
//     wednesday: { date: 0, totalTime: 0 },
//     thursday: { date: 0, totalTime: 0 },
//     friday: { date: 0, totalTime: 0 },
//     saturday: { date: 0, totalTime: 0 },
//     sunday: { date: 0, totalTime: 0 },
// },

const Stats = () => {
    const { todaysWorkout, weeklyStats } = useUser();
    const { totalWorkoutTime, completedWorkouts, currentStreak, workoutGraphData } = weeklyStats;
    const date = format(new Date(), 'eeee do MMMM, y');

    return (
        <>
            {todaysWorkout && (
                <div className='container'>
                    <div className='flex justify-between pt-10'>
                        <h3 className='font-heading'>TODAY&apos;S WORKOUT</h3>
                        <h3>{date}</h3>
                    </div>
                    <div className='mt-4 mb-10 grid grid-cols-3'>
                        <div>
                            {todaysWorkout.title ? (
                                <Link href='/start'>
                                    <a>
                                        <Card {...todaysWorkout} />
                                    </a>
                                </Link>
                            ) : (
                                <DefaultCard index={getDayIndex()} />
                            )}
                        </div>
                        <div className='col-span-2 rounded-3xl bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 pr-12 pl-12 pt-6 pb-6'>
                            <div className='flex justify-between text-center justify-items-center'>
                                <div>
                                    <h3>Current Streak</h3>
                                    <p className='text-purple-400 pt-2 font-heading'>
                                        {currentStreak.streakCount} DAYS
                                    </p>
                                </div>
                                <div>
                                    <h3>Workouts Completed</h3>
                                    <p className='text-purple-400 pt-2 font-heading'>{completedWorkouts}</p>
                                </div>
                                <div>
                                    <h3>Workout Time</h3>
                                    <p className='text-purple-400 pt-2 font-heading'>
                                        {formatSeconds(totalWorkoutTime)}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <StatsChart workoutGraphData={workoutGraphData} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Stats;
