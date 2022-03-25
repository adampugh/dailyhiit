import type { NextPage } from 'next';
import { useUser } from '../../context/UserContext';

import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import Workout from '../../components/Workout';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
    const { todaysWorkout } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!todaysWorkout) {
            router.push('/dashboard');
        }
    }, []);

    return (
        <div>
            <Navbar />
            {todaysWorkout ? <Workout /> : <Loader />}
            <Footer />
        </div>
    );
};

export default Start;
