import Navbar from '../../components/Navbar';
import SignUpForm from '../../components/SignUpForm';
import Footer from '../../components/Footer';

const Login = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Navbar />
            <SignUpForm />
            <Footer />
        </div>
    );
};

export default Login;
