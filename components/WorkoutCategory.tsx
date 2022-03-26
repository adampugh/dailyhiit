import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

import Category from './Category';

const WorkoutCategory = () => {
    const [upperBodyWorkouts, setUpperBodyWorkouts] = useState([]);
    const [lowerBodyWorkouts, setLowerBodyWorkouts] = useState([]);
    const [fullBodyWorkouts, setfullBodyWorkouts] = useState([]);

    useEffect(() => {
        async function fetchWorkouts() {
            const querySnapshot = await getDocs(collection(db, 'workouts'));
            querySnapshot.forEach((doc) => {
                const workout = { id: doc.id, ...doc.data() };
                workout.category.map((categoryName: string) => {
                    if (categoryName === 'upperBody')
                        setUpperBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
                    if (categoryName === 'lowerBody')
                        setLowerBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
                    if (categoryName === 'fullBody') setfullBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
                });
            });
        }
        fetchWorkouts();
    }, []);

    return (
        <>
            <Category categoryWorkouts={upperBodyWorkouts} title='UPPER BODY' />
            <Category categoryWorkouts={lowerBodyWorkouts} title='LOWER BODY' />
            <Category categoryWorkouts={fullBodyWorkouts} title='FULL BODY' />
        </>
    );
};

export default WorkoutCategory;
