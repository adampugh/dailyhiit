import type { NextPage } from 'next';

import Footer from '../../components/Footer';
import Stats from '../../components/Stats';
import WeekWorkout from '../../components/WeekWorkouts';
import Navbar from '../../components/Navbar';

const Dashboard: NextPage = () => {
    return (
        <div>
            <Navbar />
            <Stats />
            <WeekWorkout />
            <Footer />
        </div>
    );
};

export default Dashboard;
