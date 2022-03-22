import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const workout1 = {
    id: '123',
    title: 'ULTIMATE BODY WORKOUT',
    category: ['upperBody', 'fullBody'],
    time: '10 Mins',
    intensity: '2',
    img: '/images/mobile.png',
    exercises: [
        { id: '1', name: 'Pressups', time: 1 },
        { id: '2', name: 'Sit Ups', time: 1 },
        { id: '3', name: 'Jumping Jacks', time: 1 },
        { id: '4', name: 'Rest', time: 1 },
    ],
};

const Workout = () => {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exerciseName, setExerciseName] = useState('');
    const [nextExercise, setNextExercise] = useState({ name: '', id: '', time: 0 });
    const { time, img, title, exercises } = workout1;

    useEffect(() => {
        if (!exercises[exerciseIndex]) {
            setCompleted(true);
        } else {
            const { time, name } = exercises[exerciseIndex];
            if (exercises[exerciseIndex + 1]) {
                const { time, name, id } = exercises[exerciseIndex + 1];
                setNextExercise({ time, name, id });
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
        <div onClick={() => setRunning(!running)}>
            <div
                className='rounded-3xl h-96 w-64 pt-6 pb-4 flex flex-col justify-between pl-8 pr-8 inline-block'
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
                            <h1 className='text-8xl font-heading'>{seconds}</h1>
                            <h2 className='text-3xl font-heading'>{exerciseName}</h2>
                        </>
                    )}
                </div>
                <div className='self-center text-center text-purple-400'>
                    {!completed && (
                        <>
                            <h2>NEXT</h2>
                            <h2>
                                {nextExercise.time > 0 ? `${nextExercise.name} - ${nextExercise.time}` : 'COMPLETE'}
                            </h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Workout;
