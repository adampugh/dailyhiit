import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import useTotalTime from '../utils/useTotalTime';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';
import { Workout } from '../types';

const Card = ({ title, intensity, img, exercises, index }: Workout) => {
    const [canDelete, setCanDelete] = useState(true);
    const { asPath } = useRouter();
    const { deleteWorkout } = useUser();
    const totalTime = useTotalTime(exercises);

    useEffect(() => {
        if (asPath !== '/dashboard') {
            setCanDelete(false);
        }
    }, []);

    return (
        <div
            className='rounded-3xl h-96 w-64 pt-6 pb-4 relative pl-8 pr-8 inline-block'
            style={{
                backgroundImage: `linear-gradient(4deg, rgba(18,18,18,0.8743872549019608) 0%, rgba(91,91,91,0.5466561624649859) 35%, rgba(0,212,255,0) 100%), url("${img}")`,
                backgroundSize: 'cover',
            }}>
            <div className='relative'>
                <div className='absolute '>
                    <FontAwesomeIcon icon={faClock} className='h-4 inline' /> {totalTime}
                </div>
                <div className='right-0 absolute'>
                    {canDelete && (
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => deleteWorkout(index)}
                            className='cursor-pointer h-4'
                        />
                    )}
                </div>
            </div>
            <div className='absolute bottom-10'>
                <h2 className='font-heading'>{title}</h2>
                <div className='mr-4'>
                    <p className='inline'>Intensity </p>
                    {!!intensity &&
                        new Array(+intensity)
                            .fill('')
                            .map((v, i) => (
                                <div
                                    className='ml-2 inline-block rounded-full bg-green-300'
                                    style={{ height: '8px', width: '32px' }}
                                    key={i}></div>
                            ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
