import type { NextPage } from 'next';
import Footer from '../../components/Footer';
import Workout from '../../components/Workout';
import Navbar from '../../components/Navbar';

const Start: NextPage = () => {
    return (
        <div>
            <Navbar />
            <Workout />
            <Footer />
        </div>
    );
};

export default Start;
