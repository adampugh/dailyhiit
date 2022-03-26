import { useState, useEffect } from 'react';
import { calculateTotalTime, formatSeconds } from './formatSeconds';
import { Exercise } from '../types';

function useTotalTime(exercises: Exercise[]) {
    const [totalTime, setTotalTime] = useState('');

    useEffect(() => {
        const totalTime = calculateTotalTime(exercises);
        const formattedTime = formatSeconds(totalTime);
        setTotalTime(formattedTime);
    }, []);

    return totalTime;
}

export default useTotalTime;
