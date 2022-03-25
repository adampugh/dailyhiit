import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthUserContext';

import Footer from '../../components/Footer';
import Stats from '../../components/Stats';
import WeekWorkout from '../../components/WeekWorkouts';
import Navbar from '../../components/Navbar';

const Dashboard: NextPage = () => {
    const [weeklyWorkouts, setWeeklyWorkouts] = useState(null);
    const [weeklyStats, setWeeklyStats] = useState(null);
    const { authUser } = useAuth();

    useEffect(() => {
        if (authUser) {
            const userRef = db.collection('users').doc(authUser.uid);
            userRef.get().then((doc) => {
                const userData = doc.data();
                const { weeklyWorkouts, weeklyStats } = userData;
                setWeeklyWorkouts(weeklyWorkouts);
                setWeeklyStats(weeklyStats);
                // setLoading(false);
            });
        }
    }, [authUser]);

    return (
        <div>
            <Navbar />
            {!weeklyWorkouts && !weeklyStats ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Stats />
                    <WeekWorkout weeklyWorkouts={weeklyWorkouts} />
                </>
            )}
            <Footer />
        </div>
    );
};

export default Dashboard;
