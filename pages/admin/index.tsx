import CreateWorkoutForm from '../../components/CreateWorkoutForm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Admin = () => {
    return (
        <>
            <Navbar />
            <div className=' mt-10 mb-10 container '>
                <h2 className='font-heading mb-10 text-center'>ADD WORKOUT</h2>
                <CreateWorkoutForm />
            </div>
            <Footer />
        </>
    );
};

export default Admin;
