import type { NextPage } from 'next';
import Navbar from '../../components/Navbar';
import WorkoutCategory from '../../components/WorkoutCategory';
import Footer from '../../components/Footer';

const Workouts: NextPage = (props) => {
    console.log(props);
    return (
        <div>
            <Navbar />
            <WorkoutCategory />
            <Footer />
        </div>
    );
};

export default Workouts;
