import Navbar from '../../components/Navbar';
import LoginInForm from '../../components/LogInForm';
import Footer from '../../components/Footer';

const Login = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Navbar />
            <LoginInForm />
            <Footer />
        </div>
    );
};

export default Login;
