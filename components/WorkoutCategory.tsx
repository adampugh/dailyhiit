// import { collection, getCollection, doc, getDoc } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

import ScrollCards from './ScrollCards';
import CardInfo from './CardInfo';

import { weeklyWorkouts } from '../utils/data';
import { useEffect, useState } from 'react';

// const filteredWorkouts = workouts => {

//     return {
//         upperBody: workouts.filter(({ category }) => category.includes('upperBody')),
//         lowerBody:  workouts.filter(({ category }) => category.includes('upperBody')),
//         fullBody:  workouts.filter(({ category }) => category.includes('upperBody'))
//     }
// }

const WorkoutCategory = () => {
    const [upperBodyWorkouts, setUpperBodyWorkouts] = useState([]);
    const [lowerBodyWorkouts, setLowerBodyWorkouts] = useState([]);
    const [fullBodyWorkouts, setfullBodyWorkouts] = useState([]);

    useEffect(() => {
        async function fetchWorkouts() {
            const querySnapshot = await getDocs(collection(db, 'workouts'));
            querySnapshot.forEach((doc) => {
                const workout = doc.data();
                workout.category.map((categoryName: string) => {
                    if (categoryName === 'upperBody')
                        setUpperBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
                    if (categoryName === 'lowerBody')
                        setLowerBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
                    if (categoryName === 'fullBody')
                        setfullBodyWorkouts((prevWorkouts) => [...prevWorkouts, workout, workout]);
                });
            });
        }
        fetchWorkouts();
    }, []);

    return (
        <>
            <div>
                <div className='container'>
                    {/* <div className='pl-32 pr-0 ml-auto'> */}
                    <h2 className='font-heading pt-10'>UPPER BODY</h2>
                    <ScrollCards cards={upperBodyWorkouts} Component={CardInfo} />
                </div>
            </div>
            <div className='bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70'>
                <div className='container'>
                    <h2 className='font-heading pt-10'>LOWER BODY</h2>
                    <ScrollCards cards={lowerBodyWorkouts} Component={CardInfo} />
                </div>
            </div>
            <div className='bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70'>
                <div className='container'>
                    <h2 className='font-heading pt-10'>FULL BODY</h2>
                    <ScrollCards cards={fullBodyWorkouts} Component={CardInfo} />
                </div>
            </div>
        </>
    );
};

export default WorkoutCategory;
