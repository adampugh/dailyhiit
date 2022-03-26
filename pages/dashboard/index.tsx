import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';

import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import Stats from '../../components/Stats';
import WeekWorkout from '../../components/WeekWorkouts';
import Footer from '../../components/Footer';

const Dashboard: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const { weeklyWorkouts, weeklyStats } = useUser();

    useEffect(() => {
        if (weeklyWorkouts && weeklyStats) {
            setLoading(false);
        }
    }, [weeklyStats, weeklyWorkouts]);

    return (
        <div>
            <Navbar />
            {loading ? (
                <Loader />
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
