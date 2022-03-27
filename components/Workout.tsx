import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { formatSecondsCondensed, formatSeconds, calculateTotalTime } from '../utils/formatSeconds';
import { useUser } from '../context/UserContext';
import useTotalTime from '../utils/useTotalTime';
import { Workout, Exercise } from '../types';

import WorkoutInfo from './WorkoutInfo';

const Workout = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exerciseName, setExerciseName] = useState('');
    const [nextExercise, setNextExercise] = useState({ name: '', id: '', time: 0 });
    const { todaysWorkout, updateStats } = useUser();
    const { img, exercises, title, intensity } = todaysWorkout;
    const totalTime = useTotalTime(exercises);
    const totalTimeCalculated = calculateTotalTime(exercises);

    useEffect(() => {
        if (!exercises[exerciseIndex]) {
            setCompleted(true);
            updateStats(totalTimeCalculated);
        } else {
            const { time, name }: Exercise = exercises[exerciseIndex];
            if (exercises[exerciseIndex + 1]) {
                const { time, name, id }: Exercise = exercises[exerciseIndex + 1];
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
                    <FontAwesomeIcon icon={faClock} className='h-4 inline' /> {totalTime}
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
            <WorkoutInfo exercises={exercises} title={title} intensity={intensity} />
        </>
    );
};

export default Workout;
