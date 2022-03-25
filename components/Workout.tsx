import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { formatSecondsCondensed, formatSeconds } from '../utils/formatSeconds';
import { useUser } from '../context/UserContext';

const Workout = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exerciseName, setExerciseName] = useState('');
    const [nextExercise, setNextExercise] = useState({ name: '', id: '', time: 0 });
    const { todaysWorkout } = useUser();
    const { time, img, exercises, title, intensity } = todaysWorkout;

    useEffect(() => {
        if (!exercises[exerciseIndex]) {
            setCompleted(true);
        } else {
            const { time, name } = exercises[exerciseIndex];
            if (exercises[exerciseIndex + 1]) {
                const { time, name, id } = exercises[exerciseIndex + 1];
                setNextExercise({ time, name: name.toUpperCase(), id });
            } else {
                setNextExercise({ name: 'COMPLETE', time: 0, id: '' });
            }
            setExerciseName(name.toUpperCase());
            setSeconds(time);
        }
    }, [exerciseIndex, completed]);

    useEffect(() => {
        if (running) {
            if (seconds < 0) {
                if (exercises[exerciseIndex]) {
                    setExerciseIndex(exerciseIndex + 1);
                }
            } else {
                const timer = setInterval(() => setSeconds(seconds - 1), 1000);
                return () => clearTimeout(timer);
            }
        }
    }, [seconds, running]);

    return (
        <>
            <div className='overflow-hidden'>
                <div
                    className='h-screen pt-10 pb-10 flex justify-center blur relative -m-2'
                    style={{
                        backgroundImage: `linear-gradient(4deg, rgba(18,18,18,0.8743872549019608) 0%, rgba(91,91,91,0.5466561624649859) 35%, rgba(0,212,255,0) 100%), url("${img}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}></div>
            </div>
            <div
                onClick={() => setRunning(!running)}
                className='rounded-3xl h-5/6 w-80 pt-6 pb-4 mt-20 flex flex-col justify-between pl-8 pr-8 inline-block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                style={{
                    backgroundImage: `linear-gradient(4deg, rgba(18,18,18,0.8743872549019608) 0%, rgba(91,91,91,0.5466561624649859) 35%, rgba(0,212,255,0) 100%), url("${img}")`,
                    backgroundSize: 'cover',
                }}>
                <div>
                    <FontAwesomeIcon icon={faClock} /> {time}
                </div>
                <div className='self-center text-center'>
                    {completed ? (
                        <h1 className='text-3xl font-heading'>COMPLETED!</h1>
                    ) : (
                        <>
                            <h1 className='text-8xl font-heading'>
                                {seconds === -1 ? formatSecondsCondensed(0) : formatSecondsCondensed(seconds)}
                            </h1>
                            <h2 className='text-3xl font-heading'>{exerciseName}</h2>
                        </>
                    )}
                </div>
                <div className='self-center text-center text-purple-400'>
                    {!completed && (
                        <>
                            <h2 className='font-heading'>NEXT</h2>
                            <h2 className='font-heading'>
                                {nextExercise.time > 0
                                    ? `${nextExercise.name} - ${formatSeconds(nextExercise.time)}`
                                    : 'COMPLETE'}
                            </h2>
                        </>
                    )}
                </div>
            </div>
            <div className='flex justify-center h-96 bg-gradient-to-br from-[#1B0E28]/80 to-[#2A2830]/70'>
                <div className='mt-20 mb-20'>
                    <h2 className='font-heading'>{title}</h2>
                    <div className='mr-4'>
                        <p className='inline'>Intensity </p>
                        {new Array(+intensity).fill('').map((v, i) => (
                            <div
                                className='ml-2 inline-block rounded-full bg-green-300'
                                style={{ height: '8px', width: '32px' }}
                                key={i}></div>
                        ))}
                    </div>
                    <div className='mt-10 mb-10 relative w-96'>
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
                </div>
            </div>
        </>
    );
};

export default Workout;
