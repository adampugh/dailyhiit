import Button from './Button';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import { formatSeconds } from '../utils/formatSeconds';
import { db } from '../lib/firebase';

interface Exercise {
    name: string;
    time: number;
    id: string;
}

interface InfoProps {
    title: string;
    exercises: Exercise[];
    button?: boolean;
}

const getQueryParams = (query) => {
    return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
              let [key, value] = param.split('=');
              params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
              return params;
          }, {})
        : {};
};

const Info = (workout) => {
    const { title, exercises, button = true } = workout;
    const { authUser } = useAuth();
    const router = useRouter();

    const handleAddWorkout = () => {
        // get index
        const { index } = getQueryParams(window.location.search);
        db.collection('users')
            .doc(`${authUser.uid}`)
            .update({
                [`weeklyWorkouts.${index}`]: workout,
            })
            .then(() => {
                router.push('/dashboard');
            })
            .catch((error) => {
                console.log('Error adding workout: ' + error.message);
            });
    };

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
                <div className='text-center' onClick={handleAddWorkout}>
                    <Button text='ADD WORKOUT' />
                </div>
            )}
        </div>
    );
};

export default Info;
