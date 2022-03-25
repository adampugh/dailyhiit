import type { NextPage } from 'next';
import { useUser } from '../../context/UserContext';

import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import Stats from '../../components/Stats';
import WeekWorkout from '../../components/WeekWorkouts';
import Footer from '../../components/Footer';

const Dashboard: NextPage = () => {
    const { weeklyWorkouts, weeklyStats } = useUser();

    return (
        <div>
            <Navbar />
            {!weeklyWorkouts && !weeklyStats ? (
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
