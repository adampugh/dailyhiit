import Link from 'next/link';
import { format } from 'date-fns';

import { useUser } from '../context/UserContext';
import { getDayIndex } from '../utils/dates';

import Card from './Card';
import DefaultCard from './DefaultCard';
import StatsChart from './StatsChart';

const Stats = () => {
    const { todaysWorkout } = useUser();
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
                                    <p className='text-purple-400 pt-2 font-heading'>17 DAYS</p>
                                </div>
                                <div>
                                    <h3>Workouts Completed</h3>
                                    <p className='text-purple-400 pt-2 font-heading'>17</p>
                                </div>
                                <div>
                                    <h3>Workout Time</h3>
                                    <p className='text-purple-400 pt-2 font-heading'>3 HOURS</p>
                                </div>
                            </div>
                            <div>
                                <StatsChart />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Stats;
