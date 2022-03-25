import Button from './Button';
import { useUser } from '../context/UserContext';
import { formatSeconds } from '../utils/formatSeconds';
import { WorkoutType } from '../types';

const Info = (workout: WorkoutType) => {
    const { title, exercises, button = true } = workout;
    const { addWorkout } = useUser();

    return (
        <div className=' mt-6 mb-6 p-5 w-64 bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70'>
            <h2 className='font-heading'>{title}</h2>
            <div className='mt-10 mb-10 relative'>
                {exercises.map(({ name, time, id }) => {
                    return (
                        <div className='ml-5 flex justify-between' key={id}>
                            <p>{name}</p>
                            <p>{formatSeconds(time)}</p>
                        </div>
                    );
                })}
                <div className='h-full w-1 rounded-3xl bg-gradient-to-b from-[#7253A0] to-[#E8A0AC] absolute top-0'></div>
            </div>
            {button && (
                <div className='text-center' onClick={() => addWorkout(workout)}>
                    <Button text='ADD WORKOUT' />
                </div>
            )}
        </div>
    );
};

export default Info;
