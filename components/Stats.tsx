import Card from './Card';

const Stats = () => {
    return (
        <div className='container'>
            <div className='flex justify-between pt-10'>
                <h3>Today&apos;s Workout</h3>
                <h3>Tuesday 22nd March, 2022</h3>
            </div>
            <div className='mt-10 mb-10 grid grid-cols-3'>
                <div className=''>
                    <Card />
                </div>

                <div className='col-span-2 rounded-3xl bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 pr-12 pl-12 pt-6 pb-6'>
                    <div className='flex justify-between text-center justify-items-center'>
                        <div>
                            <h3>Current Streak</h3>
                            <p className='text-purple-400 pt-2 font-heading'>17 days</p>
                        </div>
                        <div>
                            <h3>Workouts Completed</h3>
                            <p className='text-purple-400 pt-2 font-heading'>17</p>
                        </div>
                        <div>
                            <h3>Workout Time</h3>
                            <p className='text-purple-400 pt-2 font-heading'>3 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
